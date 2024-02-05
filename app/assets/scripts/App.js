import '../styles/styles.css';
import lazySizes from 'lazysizes';
import MobileMenu from './modules/MobileMenu';
import StickyHeader from './modules/StickyHeader';
import RevealOnScroll from './modules/RevealOnScroll';
import './modules/accordion';
import './modules/calculator';
import './modules/general';

new RevealOnScroll(document.querySelectorAll('.feature-card'), 75);
new RevealOnScroll(document.querySelectorAll('.service-card'), 85);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 85);
new RevealOnScroll(document.querySelectorAll('.gallery__photo'), 75);

let stickyHeader = new StickyHeader();
let mobileMenu = new MobileMenu();

if (module.hot) {
	module.hot.accept();
}
