'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  if (!element || typeof element.append !== 'function') {
    throw new Error('Target element is invalid');
  }

  const ul = document.createElement('ul');

  for (const key of Object.keys(data)) {
    const li = document.createElement('li');

    li.textContent = key;

    if (
      data[key] &&
      typeof data[key] === 'object' &&
      Object.keys(data[key]).length
    ) {
      createTree(li, data[key]);
    }

    ul.append(li);
  }

  element.append(ul);
}

createTree(tree, food);
