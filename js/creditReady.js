let sendButton = document.querySelector('.send');
let inp = document.querySelector('.inp');


function sending(){
    let obj2 ={
        nomer:inp.value,
    
    }
    localStorage.setItem("Name1" , JSON.stringify(obj2))
}