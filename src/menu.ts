export default menuLoad;
export { menuBtn };
import strawberry from './images/shakes/Strawberry.jpg';
import chocolate from './images/shakes/chocolate.jpg';
import oreo from './images/shakes/oreo.jpg';
import vanilla from './images/shakes/vanilla.jpg';

import bbcheesecake from './images/sweets/bbcheesecake.jpg';
import cakepop from './images/sweets/cakepop.jpg';
import macarons from './images/sweets/macarons.jpg';
import oatmeal from './images/sweets/oatmeal.jpg';
const menuBtn = document.querySelector<HTMLElement>('#card');

function menuLoad() {
    const content = document.querySelector<HTMLElement>('#content');
    if (content) {
        content.textContent = '';
    } else {
        console.error('menuBtn not found:', menuBtn);
    }

    const shakes: HTMLElement = document.createElement('section');
    content?.appendChild(shakes);

    const topic: HTMLElement = document.createElement('h2');
    topic.classList.add('mshakes');
    topic.textContent = 'Milkshakes';
    shakes?.appendChild(topic);

    const shakestore: HTMLElement = document.createElement('div');
    shakestore.classList.add('shakemaker');
    shakes.appendChild(shakestore);

    const imgStorageOfShakes: string[] = [strawberry, chocolate, oreo, vanilla];

    createImagesOfShakes(imgStorageOfShakes, shakestore);

    // const sweets: HTMLElement = document.createElement('section');
    // sweets.classList.add('sweets');
    // content?.appendChild(sweets);
}

// Function to create images and append them to the section shakes.
// It will return elements of img
// The parameters are imgStorageOfShakes which is an array of img imports and
function createImagesOfShakes(imgStorageOfShakes: string[], shakestore: HTMLElement) {
    imgStorageOfShakes.forEach((image: string) => {
        const img = document.createElement('img');
        img.src = image;
        shakestore.appendChild(img);
    });
}
