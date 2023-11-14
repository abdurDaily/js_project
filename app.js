let increment = document.querySelector('.increment');
let decrement = document.querySelector('.decrement');
let quantity = document.querySelector('.quantity');
increment.addEventListener('click', function(e){
    quantity.value =  Number(quantity.value) + 1;
    e.preventDefault();
})
decrement.addEventListener('click', function(e){
    if(Number(quantity.value) > 1){
        quantity.value =  Number(quantity.value) - 1;
    }
    e.preventDefault();
})





// RANGE 
let range = document.querySelector('.range');
let rangeResult = document.querySelector('.result-range');
range.addEventListener('input', function(){
  let rangeValue = range.value = Number(range.value);
  rangeResult.innerHTML = rangeValue;
})



// COLOR 
let color = document.querySelector('#color');
let changeColor = document.querySelector('.change-color');


changeColor.addEventListener('click', function(){
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);

    color.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    // console.log(red, green, blue);
    // alert(red, green, blue);
})
