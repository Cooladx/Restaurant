// homePage.ts

import donut from './images/donut2.jpg';
export default pageLoad;

// Loads the DOM elements for the logo and the contents of the home page for the resturant.
function pageLoad() {
    console.log('if you are seeing this, it works!');

    // Assuming you have the `donut` variable defined and pointing to your image source
    const header = document.querySelector('header'); // Select the header

    // Create a banner div to hold the image
    const banner: HTMLElement = document.createElement('div');
    banner.classList.add('banner'); // Add a class for styling

    // Create the image element
    const image = document.createElement('img');
    image.src = donut; // Use the donut image source
    image.classList.add('logo'); // Add a class for styling

    // Append the image to the banner
    banner.appendChild(image);

    // Prepend the banner to the header
    header?.prepend(banner);

    const content = document.querySelector('#content');

    const headLine: HTMLElement = document.createElement('h1');
    headLine.textContent = 'Sweet Haven: A Candy Wonderland for All Ages!';
    content?.appendChild(headLine);

    const description: HTMLElement = document.createElement('p');
    description.classList.add('desc');
    description.textContent =
        'Step into a magical world where every corner is filled with delightful treats! At Sweet Haven, we’ve created a candy paradise for kids and adults alike. From classic favorites like gummies and chocolates to unique, handcrafted sweets, our menu is a sugary dream come true. Whether you’re celebrating a special occasion or just satisfying your sweet tooth, our colorful atmosphere and friendly staff will make your visit unforgettable. Come and indulge in a place where every bite brings happiness!';
    content?.appendChild(description);

    const daysOpen: HTMLElement = document.createElement('h2');
    content?.appendChild(daysOpen);
    daysOpen.textContent = 'Days Open';

    const hours = document.createElement('div');
    hours.classList.add('board');

    content?.appendChild(hours);

    const workHoursList = [
        'Monday: 9 AM - 9 PM',
        'Tuesday: 9 AM - 9 PM',
        'Wednesday: 9 AM - 9 PM',
        'Thursday: 9 AM - 10 PM',
        'Friday: 9 AM - 11 PM',
        'Saturday: 10 AM - 11 PM',
        'Sunday: 10 AM - 8 PM',
    ];

    createList(workHoursList, hours);
}

// Function to create an unordered list with a bullet of a full schedule.
// It will return an html element of ul and li's once all days of the week are iterated.
// Parameters are the array of the workHours week and the other one is an html element of the workhour board.
function createList(workHoursList: string[], parentElement: HTMLElement): HTMLElement {
    const ul = document.createElement('ul');

    workHoursList.forEach((workHour) => {
        const li = document.createElement('li');
        li.textContent = workHour;
        ul.appendChild(li);
    });
    parentElement = parentElement.appendChild(ul);
    parentElement.classList.add('sethours');
    return parentElement;
}
