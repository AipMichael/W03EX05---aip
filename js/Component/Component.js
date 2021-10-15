class Component {
  element;
  parentElement;

  constructor(className, htmlTag) {
    this.element = document.createElement(htmlTag);
    this.element.className = className;
    this.parentElement = document.querySelector(".container");
    this.parentElement.append(this.element);
  }
}

export default Component;
