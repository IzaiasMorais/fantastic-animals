export default class ScrollAnimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.8;

    this.animaScroll = this.animaScroll.bind(this);
  }
  
  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - this.halfWindow) < 0;
      if(isSectionVisible)
        section.classList.add('ativo');
      else if(section.classList.contains('ativo'))
        section.classList.remove('ativo');
    })
  }

  init() {
    if(this.sections.length) {
      window.addEventListener('scroll', this.animaScroll);
      console.log(this);
      this.animaScroll();
    }
  }
}