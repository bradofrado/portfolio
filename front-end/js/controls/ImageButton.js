class ImageButton extends Component {
    constructor(props) {
        super(props);
    }

    template = function() {
        const hasImage = !isNullOrUndefined(this.props.image);

        return `<div class="image-button-container">
                    <a href="/projects/{id}" name="image-button" class="image-button center-center ${hasImage && ' no-color'}">            
                        <div name="image-button-text" class="image-button-text center-center">{label}</div>
                    </a>
                    ${hasImage && `<img src="{image}">`}
                </div>`;
    }
}