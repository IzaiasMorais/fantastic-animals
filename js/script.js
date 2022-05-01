import SmoothScroll from "./modules/smooth-scroll.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import ToolTip from "./modules/tooltip.js";
import fetchAnimals from "./modules/animals-fetch.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";
import ScrollAnimation from "./modules/scroll-animacao.js";



import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";

initDropdownMenu();
initMenuMobile();

const smoothScroll = new SmoothScroll('[data-menu="suave"] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabnav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabnav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]')
modal.init();

const toolTip = new ToolTip('[data-tooltip]');
toolTip.init();

fetchAnimals("./animalsapi.json", ".numeros-grid");

fetchBitcoin("https://blockchain.info/ticker", '.btc-preco');

const scrollAnimation = new ScrollAnimation('[data-anime="scroll"]');
scrollAnimation.init();