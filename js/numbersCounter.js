let value = 0;
const numbersCounter = () =>{
    const inputEl = document.querySelector('.counter-value');
    const btnMinus = document.querySelector('.btn-minus')
    const btnPlus = document.querySelector('.btn-plus');
    let inputValue = inputEl.value;
    console.log(inputValue)

    btnMinus.addEventListener('click',()=>{
        inputEl.value = String(Number(inputEl.value) - 1);
    })
    btnPlus.addEventListener('click',()=>{
        inputEl.value = String(Number(inputEl.value) + 1);
    })

}

export default numbersCounter;