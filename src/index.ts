// index.ts
import './styles.css';
import pageLoad from './loadingPage';
import menuLoad from './menu';
import homeLoad from './homePage';
import { menuBtn } from './menu';
import { homebtn } from './homePage';

// Loads the home page with banner, nav, and its contents as website loads up. This is the home page
pageLoad();

// Checks if button exists, otherwise it won't work and show null.
if (menuBtn) {
    menuBtn?.addEventListener('click', function () {
        menuLoad();
    });
} else {
    console.error('menuBtn not found:', menuBtn);
}

if (homebtn) {
    homebtn?.addEventListener('click', function () {
        homeLoad();
    });
} else {
    console.error('homebtn not found:', homebtn);
}
