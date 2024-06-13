import {createBox} from './selectors.js'

export let boxes = []

export class Box {
    constructor(name, color, h, w) {
     this.id = Math.random()
     this.h = h;
     this.w = w;
     this.name = name;
     this.color = color;
    }

    initBox() {
        let htmlBox = createBox();
        //remeber that we are importing createBox() from selectors.js file. Which returns a div element.
        htmlBox.id = this.id;
        htmlBox.style.height = `${this.h}px`;
        htmlBox.style.width = `${this.w}px`;
        htmlBox.style.margin = '6px';
        htmlBox.style.backgroundColor = this.color;
        htmlBox.innerHTML = this.name;
        boxes.push(htmlBox);
      }

   }
