let inp1 = document.querySelector(".inp1")
let inp2 = document.querySelector(".inp2")
let inp3 = document.querySelector(".inp3")
let inp4 = document.querySelector(".inp4")
let inp5 = document.querySelector(".inp5")
let inp6 = document.querySelector(".inp6")



function sending(){
    let obj ={
        foto:inp6.value,
        ism:inp1.value,
        email:inp2.value,
        parol:inp3.value,
        age:inp4.value,
        geo:inp5.value
    }
    localStorage.setItem("Name" , JSON.stringify(obj))
}

function loadData() {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 1500);
    })
  }
  
  loadData()
    .then(() => {
      let preloaderEl = document.getElementById('preloader');
      preloaderEl.classList.add('hidden');
      preloaderEl.classList.remove('visible');
    });