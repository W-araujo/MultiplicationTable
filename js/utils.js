function multiplication() {
  let txtnumber = document.getElementById('txtnumber');
  let txttimes = document.getElementById('txttimes');

  let msg = document.getElementById('res_first');


  let number = Number(txtnumber.value);
  let times = Number(txttimes.value);

  if (number < 1) {
    alert('Please, enter a valid number!');
  } else if (times < 1) {
    alert('Please, enter a valid number!');
  } else {

    msg.innerHTML = '';
    for (let count = 1; count <= times; count++) {

      let response = count * number;
      msg.innerHTML += ` \u{1F449} <bold> ${number} x ${count} = <strong> ${response}</strong>  </bold><br>`
    }
  }
}


