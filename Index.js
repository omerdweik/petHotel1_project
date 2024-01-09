var nameError=document.getElementById('nameError');
var lastNameError=document.getElementById('lastNameError');
var telError=document.getElementById('telError');
var emailError=document.getElementById('emailError');
var petnameError=document.getElementById('petnameError');
var petcolerError=document.getElementById('petcolerError');
var daynumberError=document.getElementById('daynumberError');
var submitError=document.getElementById('submitError');

function validatName(){
    var name=document.getElementById('contact-name').value;
    if(name.length == 0){
        nameError.innerHTML = 'name is required';
        return false;
    }

    nameError.innerHTML='valid';
    return true;
   
}
function validatlastName(){
    var name=document.getElementById('contact-name2').value;
    if(name.length == 0){
        lastNameError.innerHTML = 'name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        lastNameError.innerHTML='write full name'
    }
    lastNameError.innerHTML='valid';
    return true;
   
}
function validaPhone(){
    var phone=document.getElementById('contact-number').value;
    if(phone.length == 0){
        telError.innerHTML = 'phone no is required';
        return false;
    }
    if(phone.length != 10){
        telError.innerHTML = 'phone no should be 10 digits';
        return false;
    }
    telError.innerHTML='valid';
    return true;
}
function validaEmail(){
    var email=document.getElementById('contact-email').value;
    if(email.length == 0){
        emailError.innerHTML = 'email is required';
        return false;
    }
    if(email.match(/^[A-Za-z]\._\-[0-9]*[@][A-AZ-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'email is Invalid';
        return false;
    }
    emailError.innerHTML='valid';
    return true;
}
function validpetName(){
    var pet=document.getElementById('contact-pet').value;
    if(pet.length == 0){
        petnameError.innerHTML = 'pet name is required';
        return false;
    }

    petnameError.innerHTML='valid';
    return true;
   
}
function validpetColer(){
    var col=document.getElementById('contact-coler').value;
    if(col.length == 0){
        petcolerError.innerHTML = 'pet coler is required';
        return false;
    }

    petcolerError.innerHTML='valid';
    return true
}
function validdayNum(){
    var day=document.getElementById('contact-day').value;
    if(day.length == 0){
        daynumberError.innerHTML = 'day is required';
        return false;
    }
    if(day.length >=3){
        daynumberError.innerHTML = 'day number should be 1 or 2digits';
        return false;
    }
    if(day.match(/^[0-9]{10}$/)){
        daynumberError.innerHTML = 'day is required';
        return false;
    }
    daynumberError.innerHTML='valid';
    return true;
}
function calc(){
    var num=parseInt(document.getElementById('contact-day').value);
    var num2=35;
    var result=num*num2;

}

