import { Box, boxes } from './classes.js';
import {boxHeight, boxWidth, boxColor, boxName, button, boxStorage} from './selectors.js';

function addBox(name, color, h, w) {
    let box = new Box(name, color, h, w);
    box.initBox();
  }

  button.addEventListener('click', () => {
    addBox(boxName.value, boxColor.value, boxHeight.value, boxWidth.value);
    boxName.value = '';
      //this will remove the name value.
  });

  function update() {
    for (let i = 0; i < boxes.length; i++) {
      boxStorage.appendChild(boxes[i]);
    }
  }
  // also update needs to be called when ever we create a new box
  button.addEventListener('click', () => {
    addBox(boxName.value, boxColor.value, boxHeight.value, boxWidth.value);
    update(); // add this to event listener
    boxName.value = '';
  });