import "./hello-world.scss";

class HelloWorldButton {
  textClass = "hello-world-text";
  render() {
    const button = document.createElement("button");
    button.innerHTML = "Hello World";
    button.classList.add("hello-world");
    const body = document.querySelector("body");
    button.onclick = function () {
      const p = document.createElement("p");
      p.innerHTML = "Hello World";
      p.classList.add(this.textClass);
      body.appendChild(p);
    };
    body.appendChild(button);
  }
}

export default HelloWorldButton;
