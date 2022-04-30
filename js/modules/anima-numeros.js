export default class initAnimaNumeros {
  constructor(numeros, observerClass, target) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerClass = observerClass;
    this.target = document.querySelector(target);

    this.handleMutation = this.handleMutation.bind(this);
  }

  static increaseNumberos(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start = start + incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  animaNumeros() {
    this.numeros.forEach((numero) => {
      this.constructor.increaseNumberos(numero);
    });
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.target, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.target) {
      this.addMutationObserver();
      return this;
    }
  }
}
