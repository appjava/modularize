export const createBox = () => document.createElement('div');
// Note that the reason I've made this a arrow function instead of a variable is so that it won't be using the same div element and will instead create a new one.
export const container = document.querySelector('.container');
export const button = document.querySelector('button');
export const boxName = document.querySelector('input[name="box-name"');
export const boxWidth = document.querySelector('input[name="width"');
export const boxHeight = document.querySelector('input[name="height"');
export const boxColor = document.querySelector('input[type="color"');
export const boxStorage = document.querySelector('.box-storage');