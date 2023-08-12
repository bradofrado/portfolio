import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import Head from 'next/head';
import "~/styles/globals.css";
import { Navbar } from "~/utils/components/navigation/navbar";
import { Footer } from "~/utils/components/navigation/footer";
import { SideNav } from "~/utils/components/navigation/sidenav";
import Header from '~/utils/components/base/header';
import { useState } from "react";
import { DarkModeProvider } from "~/utils/components/dark-mode/dark-mode-context";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [pos, setPos] = useState<{x: number, y: number}>({x: 1160, y: 74});
  const onPointerMove = (e: React.PointerEvent) => {
    setPos({x: e.clientX, y: e.clientY});
  }
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Braydon Jones</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DarkModeProvider>
        <div onPointerMove={onPointerMove}>
          <div className="pointer-events-none fixed inset-0 -z-10 h-full transition duration-300 bg-white dark:bg-slate-900" ></div>
          <div onPointerMove={onPointerMove} className="pointer-events-none fixed inset-0 z-50 transition duration-300 hidden dark:block" style={{background: `radial-gradient(600px at ${pos.x}px ${pos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`}}></div>
          <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 text-slate-700 dark:text-slate-400 ">
            <Component {...pageProps} />
          </main>
        </div>
      </DarkModeProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
