export default contactLoad;
export { contactbtn };

const contactbtn = document.querySelector<HTMLElement>('#about-us');

function contactLoad() {
    const content = document.querySelector<HTMLElement>('#content');
    if (content) {
        content.textContent = '';
    } else {
        console.error('menuBtn not found:', contactbtn);
    }
}
