let ifLightBulbSwitchIsOff = false;

let switchText = document.getElementById('switch-text');
let img = document.getElementById('switch');

function changeSwitch() {
  ifLightBulbSwitchIsOff = !ifLightBulbSwitchIsOff;

  if (ifLightBulbSwitchIsOff) {
    img.innerHTML = `<img src="img/on-bulb.png" alt="on-bulb" />`;
    switchText.innerHTML = `Light Bulb  is On`;
  } else {
    img.innerHTML = `<img src="img/off-bulb.png" alt="off-bulb" />`;
    switchText.innerHTML = `Light Bulb is Off`;
  }
}
