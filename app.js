window.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  body.innerHTML += `<div class = "wrapper">
                        <div class = "keyboard">
                        </div>
                      </div>`
  const wrapper = document.querySelector('.wrapper'),
    keyboard = document.querySelector('.keyboard');

  let keyboardArr = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\\', 'Enter', 'Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 'Control', 'Alt', ' ', 'Alt', 'Control', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

  function createKeys(keyboardArr) {
    for (let i = 0; i < keyboardArr.length; i++) {
      keyboard.innerHTML += `<div class = "key" data = ${keyboardArr[i]}>${keyboardArr[i]}</div>`;
    }
  }

  createKeys(keyboardArr)

  document.addEventListener('keydown', (event) => {
   document.querySelector(`.key[data='${event.key}']`).classList.add('active');
  })

  document.addEventListener('keyup', (event) => {
   document.querySelector(`.key[data='${event.key}']`).classList.remove('active');
  })
})
  // let keyboardArr = []

  //   document.addEventListener('keydown', (event) => {
  //     console.log(event);

  //     keyboardArr.push(event.key);
  //     console.log(keyboardArr);
  //   })