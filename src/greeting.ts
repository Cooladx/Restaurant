// greeting.ts
export const greeting = "Hello, Odinite!";
import odinImage from "./images/donut.jpg";

const image = document.createElement("img");
image.src = odinImage;

document.body.appendChild(image);
