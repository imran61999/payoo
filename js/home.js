// add money to the account

// atep-1: add event handler to  the add money button inside the form

document.getElementById('add-money').addEventListener('click', function(e){
    e.preventDefault();

    // step-2: get money to added to the account
    let addMoneyInput= document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // get the pin number provide
    const inputPinNumber = document.getElementById('input-pin-number').value;
    console.log(inputPinNumber);
})