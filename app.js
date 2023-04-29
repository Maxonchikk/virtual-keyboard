window.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  body.innerHTML += `<div class = "wrapper">
                        <textarea class = "textarea"></textarea>
                        <div class = "keyboard">
                        </div>
                      </div>`
  const wrapper = document.querySelector('.wrapper'),
    keyboard = document.querySelector('.keyboard'),
    textarea = document.querySelector('.textarea');

  let lowEnKeysArr = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650;', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '&#9668;', '&#9660;', '&#9658;'];

  let highEnKeysArr = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '\|', 'Delete', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&#9650;', 'Shift', 'Control', 'Win', 'Alt', ' ', 'Alt', 'Control', '&#9668;', '&#9660;', '&#9658;'];


  let atributeArr = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

  function createKeys(arr, atribute) {
    for (let i = 0; i < arr.length; i++) {
      keyboard.innerHTML += `<div class = "key" data = ${atribute[i]}>${arr[i]}</div>`;
    }
  }

  createKeys(lowEnKeysArr, atributeArr)

  document.addEventListener('keydown', (event) => {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      keyboard.innerHTML = '';
      createKeys(highEnKeysArr, atributeArr)
    } 
      document.querySelector(`.key[data='${event.code}']`).classList.add('active');
      textarea.innerHTML += event.key 
  })

  document.addEventListener('click', (event) => {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      keyboard.innerHTML = '';
      createKeys(highEnKeysArr, atributeArr)
    } 
      document.querySelector(`.key[data='${event.code}']`).classList.add('active');
      textarea.innerHTML += event.key 
  })

  document.addEventListener('keyup', (event) => {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      keyboard.innerHTML = '';
      createKeys(lowEnKeysArr, atributeArr)
    } 
    document.querySelector(`.key[data='${event.code}']`).classList.remove('active');
  })






  // let keysArr = [];
  // let atributeArr = [];

  //   document.addEventListener('keydown', (event) => {
  //     console.log(event);

  //     atributeArr.push(event.code);
  //     keysArr.push(event.key);
  //     console.log(atributeArr);
  //     console.log(keysArr)
  //   })

})