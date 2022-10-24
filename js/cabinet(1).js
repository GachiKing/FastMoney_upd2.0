let input1 = document.querySelector(".inpu3")
let input2 = document.querySelector(".inpu2")

function etnrace(){
    let obj = JSON.parse(localStorage.getItem("Name"))
    console.log(obj);
    input1.value = obj.email
    input2.value = obj.parol
}
etnrace()

function loadData() {
    return new Promise((resolve, reject) => {
      // setTimeout не является частью решения
      // Код ниже должен быть заменен на логику подходящую для решения вашей задачи
      setTimeout(resolve, 1500);
    })
  }

  function geting() {
    let name_out = document.querySelector(".info_name");
    let email_out = document.querySelector(".info_email");
    let age_out = document.querySelector(".info_age");
    let geo_out = document.querySelector(".info_geo");
    let foto_out = document.querySelector(".avatarka");
    let get = JSON.parse( localStorage.getItem('Name'))
    name_out.innerHTML = JSON.stringify(get.ism).replace(/"/g,"");
    foto_out.innerHTML = JSON.stringify(`<img src='${get.foto}' height='210px' width='200px'/>`).replace(/"/g,"");
    email_out.innerHTML = JSON.stringify(get.email).replace(/"/g,"");
    age_out.innerHTML = JSON.stringify(`${get.age} лет`).replace(/"/g,"");
    geo_out.innerHTML = JSON.stringify(`Г. ${get.geo}`).replace(/"/g,"");
  }
  function getingInfoCredit() {
    let name_card = document.querySelector('.card_name');
    let name_name = document.querySelector('.name_name');
    let get2 = JSON.parse(localStorage.getItem('Name1'))
    console.log(get2);
    name_card.innerHTML = JSON.stringify(`${get2.nomerCarti}`).replace(/"/g,"");
    name_name.innerHTML = JSON.stringify(`${get2.nameCard}`).replace(/"/g,"");
    let name_sum = document.querySelector('.sum_name');
    let name_data = document.querySelector('.data_name');
    let get3 = JSON.parse(localStorage.getItem('Name2'))
    let get4 = JSON.parse(localStorage.getItem('Name3'))
    console.log(get3);
    console.log(get4);
    name_sum.innerHTML = JSON.stringify(`${get3.sperma}`).replace(/"/g,"");
    name_data.innerHTML = JSON.stringify(`${get4.spermaData}`).replace(/"/g,"");

  }
  
  loadData()
    .then(() => {
      let preloaderEl = document.getElementById('preloader');
      preloaderEl.classList.add('hidden');
      preloaderEl.classList.remove('visible');
    });