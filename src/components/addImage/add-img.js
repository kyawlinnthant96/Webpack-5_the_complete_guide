import Suzume from "../../assets/suzume.jpg";

const addImage = () => {
  const img = document.createElement("img");
  img.alt = "suzume";
  img.width = "300";
  img.src = Suzume;
  const body = document.querySelector("body");
  body.appendChild(img);
};

export default addImage;
