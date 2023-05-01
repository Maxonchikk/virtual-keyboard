window.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  body.innerHTML += `<div class = "wrapper">
                        <textarea class = "textarea" autofocus></textarea>
                        <div class = "keyboard"></div>
                        <p>Задание выполнялось на OS Windows</p>
                      </div>`
  const keyboard = document.querySelector('.keyboard'),
    textarea = document.querySelector('.textarea');

  const lowEnKeysArr = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650;', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'],
    capsEnKeysArr = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '&#9650;', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'],
    highEnKeysArr = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&#9650;', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'],
    lowRuKeysArr = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650', 'Shift', 'Ctrl', 'Meta', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'],
    // capsRuKeysArr = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '&#9650', 'Shift', 'Ctrl', 'Meta', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'],
    // highRuKeysArr = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '&#9650', 'Shift', 'Ctrl', 'Meta', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'],
    atributeArr = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

  function createKeys(arr, atribute) {
    for (let i = 0; i < arr.length; i++) {
      keyboard.innerHTML += `<div class = "key" data = ${atribute[i]}>${arr[i]}</div>`;
    }
  }

  createKeys(lowEnKeysArr, atributeArr)

  document.addEventListener('keydown', (event) => {
    let capsLock = document.querySelector(`.key[data='CapsLock']`)
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      keyboard.innerHTML = '';
      createKeys(highEnKeysArr, atributeArr);
    } else if (event.code === 'CapsLock') {
      capsLock.classList.toggle('caps_active');
      keyboard.innerHTML = '';
      createKeys(capsEnKeysArr, atributeArr);
    } else if (event.code === 'AltLeft' && event.code === 'ControlLeft') {
      keyboard.innerHTML = '';
      createKeys(lowRuKeysArr, atributeArr);
      console.log('hi');
    } else {
      document.querySelector(`.key[data='${event.code}']`).classList.add('active');
      textarea.innerHTML += event.key;
    }
  })

  document.addEventListener('keyup', (event) => {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      keyboard.innerHTML = '';
      createKeys(lowEnKeysArr, atributeArr)
    }
    document.querySelector(`.key[data='${event.code}']`).classList.remove('active');
  })

  const keys = document.querySelectorAll('.key');

  keys.forEach((key) => {
    key.addEventListener('click', (event) => {
      key.classList.remove('active')
      let target = event.target;
      textarea.innerHTML += target.innerHTML;
    })
  })

  // let keysArr = [];
  // let atributeArr = [];

  //   document.addEventListener('keydown', (event) => {
  //     // console.log(event);

  //     atributeArr.push(event.code);
  //     keysArr.push(event.key);
  //     // console.log(atributeArr);
  //     console.log(keysArr)
  //   })
})