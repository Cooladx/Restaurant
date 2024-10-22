// homePage.ts

import donut from './images/donut.jpg';
export default pageLoad;

function pageLoad() {
    console.log('if you are seeing this, it works!');

    const content = document.querySelector('#content');

    const headLine = document.createElement('h1');
    headLine.textContent = 'Sweet Haven: A Candy Wonderland for All Ages!';
    content?.appendChild(headLine);

    const description = document.createElement('p');
    description.textContent =
        'Step into a magical world where every corner is filled with delightful treats! At Sweet Haven, we’ve created a candy paradise for kids and adults alike. From classic favorites like gummies and chocolates to unique, handcrafted sweets, our menu is a sugary dream come true. Whether you’re celebrating a special occasion or just satisfying your sweet tooth, our colorful atmosphere and friendly staff will make your visit unforgettable. Come and indulge in a place where every bite brings happiness!';
    content?.appendChild(description);

    const navbar = document.querySelector('.navbar');
    const image = document.createElement('img');
    image.src = donut;

    navbar?.prepend(image);
    image.classList.add('logo');
}
