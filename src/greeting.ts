// greeting.js
export const greeting = "Hello, Odinite!";
import odinImage from "./images/donut.png";

const image = document.createElement("img");
image.src = odinImage;

document.body.appendChild(image);
