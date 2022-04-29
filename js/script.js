import ScrollSuave from './modules/smooth-scroll.js';
import Accordion from './modules/accordion.js';

import initTabNav from './modules/tabnav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js'; 
import initAnimalsFetch from './modules/animals-fetch.js'; 
import initFetchBitcoin from './modules/fetch-bitcoin.js'; 
import initAnimacaoScroll from './modules/scroll-animacao.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();





initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFetchBitcoin();
initAnimalsFetch();
initAnimacaoScroll();