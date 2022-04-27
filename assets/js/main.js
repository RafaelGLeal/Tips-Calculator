window.addEventListener('load', start)

function start(){
    'use strict'

    const billAmount = document.getElementById('billValue');
    const peopleAmount = document.getElementById('amountPeople');
    const customPercent = document.querySelector('.percent__options-custom');
    const percentValues = Array.from(document.querySelectorAll('.percent__options-btn'));
    const tipTotalText = document.querySelector('.result__tip');
    const totalPersonText = document.querySelector('.result__total');

    customPercent.addEventListener('keyup', setCustomPercent);
    peopleAmount.addEventListener('keyup', setPeople);
    billAmount.addEventListener('keyup', setBill);

    let tipToCalculate = {
        bill: billAmount,
        people: peopleAmount,
        percent: null,
    }
    
    function setCustomPercent(){
        tipToCalculate.percent = this.value
        removeBtn()
        calculate(this.value) 
    }
    
    function setPeople(){
       
        tipToCalculate.people = Number(this.value)
        calculate(this.value)
    }
    
    function setBill(){
       
        tipToCalculate.bill = Number(this.value)
        calculate(this.value)
    }

    function getPercent(){
        percentValues.forEach((button)=>{
            button.addEventListener('click', ()=>{
                for(let i = 0; i < percentValues.length; i++){
                    percentValues[i].classList.remove('active')
                }
                customPercent.value = '';
                button.classList.toggle('active')
                const percentValue = button.attributes[0].value;
                tipToCalculate.percent = percentValue
                calculate()
            })
        })
    }

    document.querySelector('.reset').addEventListener('click', reset)
    function reset(){
        customPercent.value = '';
        peopleAmount.value = '';
        billAmount.value = '';
        tipTotalText.textContent = '0.00'
        totalPersonText.textContent = '0.00'
        removeBtn()
    }

    function removeBtn(){
        percentValues.forEach((button)=>{
            button.classList.remove('active')
        })
    }

    function calculate(){
        let result = (tipToCalculate.percent * tipToCalculate.bill) / 100
        let totalPerson = result / tipToCalculate.people
        
        if(totalPersonText.textContent && tipTotalText.textContent === "NaN"){
            tipTotalText.textContent = '0.00'
            totalPersonText.textContent = '0.00'
        }
       
        tipTotalText.textContent = result.toFixed(2)
        totalPersonText.textContent = totalPerson.toFixed(2)
    }
    
    
    getPercent()   
}
