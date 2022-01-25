
const root = document.querySelector('.wrapper');
const input = document.querySelector('input');
const button = document.querySelector('button');
const ansDropDown = document.querySelector('.select-animation');


let TEXT = input.value.toUpperCase()
const COLORS = ['#ff3838', '#fff200', '#25CCF7', '#c56cf0', '#ff9f1a', '#ffb8b8', '#FAFAFA']
let animationName = ansDropDown[0].value

const createElement = (elementName, className) => {
      const element = document.createElement(elementName)
      element.className = className;
      return element;
}

const createLetters = (parentNode, char, diff) => {
      const LEN_OF_ELEMENT = 8;
      for (let i = 0; i < LEN_OF_ELEMENT; i++) {
            const delay = ((LEN_OF_ELEMENT - i + 1) / 10) + diff;
            const element = createElement('span', `letter ${animationName}`);
            element.textContent = char;
            element.style = `--delay:${delay}s; color:${COLORS[i]};`
            parentNode.append(element)
      }
}

const init = () => {

      let arr = [];
      let diff = .0;

      for (let char of TEXT) {
            const wrapper = createElement('div', 'letter-wrapper');
            createLetters(wrapper, char, diff);
            diff += .12;
            arr.push(wrapper)
      }
      root.innerHTML = '';
      root.append(...arr)
}


input.addEventListener('input', (event) => {
      TEXT = event.target.value.toUpperCase();
      init();
})

button.addEventListener('click', () => {
      const isAnimationStop = root.classList.toggle('animation-stop');
      button.textContent = isAnimationStop ? 'START' : 'STOP'
})

ansDropDown.addEventListener('change', (event) => {
      animationName = event.target.value;
      init();
})

init();