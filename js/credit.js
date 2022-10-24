// const range1 = document.querySelector(".input_sum")
// const viewRange1 = document.querySelector(".view_sum")

// range1.addEventListener('change', () => {
//     var newValue = range1.value;
//     viewRange1.innerHTML = `${range1.value} $`
// });


let elem = document.querySelector('.input_sum');


let rangeValue = function(){
  let obj3 = {
    sperma:elem.value
  }
  localStorage.setItem("Name2" , JSON.stringify(obj3))
  let newValue = elem.value;
  let target = document.querySelector('.value');
  let target2 = document.querySelector('.ac112');
  target.innerHTML = `${newValue} $`;
  target2.innerHTML = `${newValue} $`;
}

elem.addEventListener("input", rangeValue);


let elem2 = document.querySelector('.input_sum2');

let rangeValue2 = function(){
  let obj4 = {
    spermaData:elem2.value
  }
  localStorage.setItem("Name3" , JSON.stringify(obj4))
  let newValue = elem2.value;
  let target = document.querySelector('.value2');
  if (newValue == 2)target.innerHTML = `${newValue} дня`;
  else if (newValue == 3)target.innerHTML = `${newValue} дня`;
  else if (newValue == 4)target.innerHTML = `${newValue} дня`;
  else target.innerHTML = `${newValue} дней`;

}

elem2.addEventListener("input", rangeValue2);



let rangeValue3 = function(){
  let newValue = elem.value*1.3;
  let target = document.querySelector('.ac122');
  target.innerHTML = `${newValue} $`;
}

elem.addEventListener("input", rangeValue3);

let data = 23 

let rangeValue4 = function(){
  let newValue = +data + +elem2.value;
  let target = document.querySelector('.ac212');
  if (newValue <= 31) 
  target.innerHTML = `${newValue} Октября 2022 года`;
  else if (newValue == 32)target.innerHTML = `1 Ноября 2022 года` 
  else if (newValue == 33)target.innerHTML = `2 Ноября 2022 года`
  else if (newValue == 34)target.innerHTML = `3 Ноября 2022 года`
  else if (newValue == 35)target.innerHTML = `4 Ноября 2022 года`
  else if (newValue == 36)target.innerHTML = `5 Ноября 2022 года`
  else if (newValue == 37)target.innerHTML = `6 Ноября 2022 года`
  else if (newValue == 38)target.innerHTML = `7 Ноября 2022 года`
  else if (newValue == 39)target.innerHTML = `8 Ноября 2022 года`
  else if (newValue == 40)target.innerHTML = `9 Ноября 2022 года`
  else if (newValue == 41)target.innerHTML = `10 Ноября 2022 года`
  else if (newValue == 42)target.innerHTML = `11 Ноября 2022 года`
  else if (newValue == 43)target.innerHTML = `12 Ноября 2022 года`
  else if (newValue == 44)target.innerHTML = `13 Ноября 2022 года`
  else if (newValue == 45)target.innerHTML = `14 Ноября 2022 года`
  else if (newValue == 46)target.innerHTML = `15 Ноября 2022 года`
  else if (newValue == 47)target.innerHTML = `16 Ноября 2022 года`
  else if (newValue == 48)target.innerHTML = `17 Ноября 2022 года`
  else if (newValue == 49)target.innerHTML = `18 Ноября 2022 года`
  else if (newValue == 50)target.innerHTML = `19 Ноября 2022 года`
  else if (newValue == 51)target.innerHTML = `20 Ноября 2022 года`
  else if (newValue == 52)target.innerHTML = `21 Ноября 2022 года`
  else if (newValue == 53)target.innerHTML = `22 Ноября 2022 года`
  else target.innerHTML = `23 Ноября 2022 года`
}

elem2.addEventListener("input", rangeValue4);

function loadData() {
  return new Promise((resolve, reject) => {
    // setTimeout не является частью решения
    // Код ниже должен быть заменен на логику подходящую для решения вашей задачи
    setTimeout(resolve, 1500);
  })
}

loadData()
  .then(() => {
    let preloaderEl = document.getElementById('preloader');
    preloaderEl.classList.add('hidden');
    preloaderEl.classList.remove('visible');
  });
  
  let nameCard = document.querySelector('#name')
  let inp = document.querySelector('#cardnumber');
  let expirationdate = document.querySelector('#expirationdate')
  let securitycode = document.querySelector('#securitycode')
 
  let dateText = dateReturn.textContent ;
  
  function sending(){
      let obj2 ={
          nomerCarti:inp.value,
          nameCard:nameCard.value,
          expirationdate:expirationdate.value,
          securitycode:securitycode.value,

      }
      localStorage.setItem("Name1" , JSON.stringify(obj2))
  }