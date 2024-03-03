let user1 = document.body.querySelector('#user1');
let label1 = document.body.querySelector('.label1');
let user2 = document.body.querySelector('#user2');
let label2 = document.body.querySelector('.label2');
let divAnswer = document.body.querySelector('.result');
let btn = document.body.querySelector('.btn');

let dataUser1 = ''; 
let dataUser2 = '';

let secondUs1 = null;
let secondUs2 = null;

user1.addEventListener('input', (event)=>{
  user1.setAttribute('autocomplete', 'off');                        // * Винести у функцію
  dataUser1 = event.target.value;
  console.log(dataUser1);

  if (dataUser1.length >=10){
    user1.setAttribute('readonly', 'readonly');
  } else {
    label1.innerHTML = "<span class='warning'>** Не юзай автокомпліт. ТИЦЯЙ RESET ** </span>"
  }
  secondUs1 = getDate(dataUser1);

})
user2.addEventListener('input', (event)=>{
  user2.setAttribute('autocomplete', 'off');                        // * Винести у функцію
  dataUser2 = event.target.value;
  console.log(dataUser2);
  secondUs2 = getDate(dataUser2);

  if (dataUser2.length >= 10){
    user2.setAttribute('readonly', 'readonly');
    difference(secondUs1, secondUs2)
  } else {
    label2.innerHTML = "<span class='warning'>** Не юзай автокомпліт. ТИЦЯЙ RESET ** </span>"
  }
})
btn.addEventListener('click', () => {

  user1.value = '';
  user1.removeAttribute('readonly');
  user1.blur();

  user2.value = '';
  user2.removeAttribute('readonly');
  user2.blur();
})

function difference (secUs1, secUs2){
  const secondsInYear = 365 * 24 * 60 * 60;

  if(secUs1 > secUs2 ){
    let different = Math.round((secUs1 - secUs2) / secondsInYear, );
    divAnswer.innerHTML = `<span>Юзер 1 молодший за юзера 2 на ${different} роки(ів)</span>`;
    console.log(different);
    return different;
  } else {
    let different = Math.floor((secUs2 - secUs1) / secondsInYear);
    divAnswer.innerHTML = `<span>Юзер 1 старший за юзера 2 на ${different} роки(ів) </span>`;
    console.log(different);
    return different;
  }
}



function getDate(valueDate){

  let regex = /^\d{4}\/\d{2}\/\d{2}$/;

  const resReg = valueDate.match(regex);

  let dataUser1Array = [];
  console.log(resReg[0]);

  dataUser1Array.push(resReg[0]);
  console.log(dataUser1Array);

  let newArray = dataUser1Array[0].split('/');
  console.log(newArray);

  const [year, month, day] = newArray
  console.log(year, month, day);

  let dateUser1 = new Date(year, month-1, day);
  console.log(dateUser1);

  let dateUser2 = new Date(dateUser1);
  let second = Math.floor(dateUser2.getTime() / 1000);
  console.log(second);
  
  return second;
}

// if(resReg) console.log(resReg[0].length );


  // label1.innerHTML = "<span class='warning'>** Допустимі символи тільки цифри від 0 до 9 і правий слеш  ' / '  (2000/20/20)** </span>"
