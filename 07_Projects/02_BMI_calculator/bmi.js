const form = document.querySelector('form')

form.addEventListener('submit',(e) =>{
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const result = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = "Please enter a valid input!"
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = "Please enter a valid input!"
    } else { 
        const BMI = (weight / ((height * height)/10000)).toFixed(2)
        // result.innerHTML = `<span>${BMI}</span>`
        if(BMI < 18.6){
            result.innerHTML = `<span>Your BMI is: ${BMI} and you are under Weight</span>`
        } else if(BMI > 18.6 && BMI < 24.9 ){
            result.innerHTML = `<span>Your BMI is: ${BMI} and you are Normal</span>`

        } else if(BMI > 24.9){
            result.innerHTML = `<span>Your BMI is: ${BMI} and you are Over weight</span>`

        }
    }
})