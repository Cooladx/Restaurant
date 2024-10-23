export default menuLoad;
export { menuBtn };

const menuBtn = document.querySelector<HTMLElement>('#card');

function menuLoad() {
    const content = document.querySelector<HTMLElement>('#content');
    if (content) {
        content.textContent = '';
    } else {
        console.error('menuBtn not found:', menuBtn);
    }
}
