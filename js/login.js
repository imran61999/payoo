document.getElementById('btn-login').addEventListener('click', function (e){
    e.preventDefault();

    let phoneNumber =document.getElementById('number').value;
    let pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber , pinNumber);
    if(phoneNumber === '5' && pinNumber==='1234'){
        console.log('your account login');
        window.location.href= "/home.html"
    }
    else{
        console.log("sorry! correct your pin and password");
    }
})