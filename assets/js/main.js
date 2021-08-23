


window.onload;{
let bill = document.getElementById('billtext').value;
let people = document.getElementById('amount-people').value;
let percent = document.querySelector('.five')
;

function valuePercent(percent){
    let total = (percent * bill) / 100;
    let totalPerson = total / people;
    return totalPerson;
}
percent.addEventListener('click', valuePercent(5))
}
