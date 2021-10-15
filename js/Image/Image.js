import Component from "../Component/Component.js";

class Image extends Component {
  constructor(userInputUrl) {
    super("your-image", "img");
    this.userInputUrl = userInputUrl;
    this.element.src = userInputUrl;
  }
}

// done

export default Image;
