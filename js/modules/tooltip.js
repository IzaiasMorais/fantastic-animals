export default class ToolTip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);
    
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // this method makes the tooltip box move through 
  onMouseMove(event) {
    this.tooltipBox.style.top = event.pageY + 20 + 'px';
    this.tooltipBox.style.left = event.pageX + 20 + 'px';
  }

  // this method removes the move function of the current element
  onMouseLeave(event) {
    this.tooltipBox.remove();
    event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    event.currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  // this method creates a element and add class, text, and a father for this div element
  // manipulating too the others elements to create the tooltip thing
  createToolTipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  // this method adds to the current element two functions, mousemove and mouseleave
  onMouseOver(event) {
    this.createToolTipBox(event.currentTarget);

    event.currentTarget.addEventListener('mousemove', this.onMouseMove);
    event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  // add to the itens of the tooltip element the mouseover function
  addToolTipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  // init the add function
  init() {
    this.addToolTipsEvent();
    return this;
  }
}
