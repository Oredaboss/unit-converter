const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const  lengthTxt = document.getElementById("length-txt")
const volumeTxt = document.getElementById("volume-txt")
const massTxt = document.getElementById("mass-txt")
convertBtn.addEventListener("click", function(){
    length()
    volume()
    mass()
})

function length() {
    let inputValue = Number(inputEl.value) 
    if (isNaN(inputValue)) {
        lengthTxt.textContent = "Enter Only Numbers"
    } else{
        let meterToFeet = inputValue * 3.281
        let feetToMeter = inputValue / 3.281
        let result = meterToFeet.toFixed(3)
        let result1 = feetToMeter.toFixed(3)
        lengthTxt.textContent = `${inputValue} meters = ${result} feet | ${inputValue} feet = ${result1} meters`;
}
    }


function volume(){
    let inputValue = Number(inputEl.value)
    if(inputValue){
        let litersToGallon = inputValue * 0.264
        let gallonToLiters = inputValue / 0.264
        let result2 = litersToGallon.toFixed(3)
        let result3 = gallonToLiters.toFixed(3)
        volumeTxt.textContent = `${inputValue} meters = ${result2} feet | ${inputValue} feet = ${result3} meters`;   
    }else{
        volumeTxt.textContent =  "Enter Only Numbers"
    }

}

function mass(){
    let inputValue = Number(inputEl.value)
    if(inputValue){
        let KiloToPounds = inputValue * 2.204
        let poundsToKilo = inputValue / 2.202
        let result4 = KiloToPounds.toFixed(3)
        let result5 = poundsToKilo.toFixed(3)
        massTxt.textContent = `${inputValue} meters = ${result4} feet | ${inputValue} feet = ${result5} meters`;   
    }else{
         massTxt.textContent = "Enter Only Numbers"
    }

}