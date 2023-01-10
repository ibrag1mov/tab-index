let elList = document.querySelector('.js-list');
let elRes = document.querySelector('.js-res');
let elForm = document.querySelector('.js-form');
let elInput = document.querySelector('.js-input');
let elPositive = document.querySelector('.positive')
let elNegative = document.querySelector('.negative')
let elNeutral = document.querySelector('.neutral')


function btnEvent(item){
    if(item == "Positive"){
        elPositive.classList.add('active');
        elNegative.classList.remove('active');
        elNeutral.classList.remove('active');
        elRes.textContent = item;
    }
    if(item == "Negative"){
        elNegative.classList.add('active');
        elPositive.classList.remove('active');
        elNeutral.classList.remove('active');
        elRes.textContent = item;
    }
    if(item == "Neutral"){
        elNeutral.classList.add('active');
        elNegative.classList.remove('active');
        elPositive.classList.remove('active');
        elRes.textContent = item;
    }
}

btnEvent("Positive");


elList.addEventListener('click', (evt)=>{
    btnEvent(evt.target.textContent);
})

elForm.addEventListener('submit', (evt)=>{
    if(elInput.value == 1){
        btnEvent("Positive");
    }
    else if(elInput.value == 2){
        btnEvent("Negative");
    }
    else if(elInput.value == 3){
        btnEvent("Neutral");
    }
    else{
        alert("Index is invalid")
    }
    elInput.value = ''
    evt.preventDefault();
})