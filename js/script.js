import SmoothScroll from "./modules/smooth-scroll.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";

import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initAnimalsFetch from "./modules/animals-fetch.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";

const smoothScroll = new SmoothScroll('[data-menu="suave"] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabnav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabnav.init();



initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFetchBitcoin();
initAnimalsFetch();
initAnimacaoScroll();
