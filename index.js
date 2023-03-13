

function Fnm()
{
    let firstnm = document.getElementById("First-name");
    let errorTxt = document.getElementById("Fnmerror");
    let a = firstnm.value;
    if(a.length == 0)
    {
        console.log(" enter fnm");
        errorTxt.innerHTML = "Please enter  name";
        return false;
    }
    if(!a.match(/^[A-Za-z]+$/))
    {
        errorTxt.innerHTML="Please enter valid name";
        console.log("sfgd");
        return  false;
    }
    else
    {
        console.log("valid fnm");
        errorTxt.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        return true
    }
    
}

function Lnm()
{
    let lastnm = document.getElementById("last-name");
    let errorTxt = document.getElementById("lnmerror");
    let a = lastnm.value;
    if(a.length == 0)
    {
        console.log(" enter fnm");
        errorTxt.innerHTML = "Please enter  name";
        return false;
    }
    if(!a.match(/^[A-Za-z]+$/))
    {   
        console.log("sfgd");
        errorTxt.innerHTML="Please enter valid name";
        return  false;
    }
    else
    {
        console.log("valid fnm");
        errorTxt.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

function Email()
{
    let email = document.getElementById("email");
    let errorTxt = document.getElementById("emailerror");
    let e = email.value;
    if(e.length == 0)
    {
        errorTxt.innerHTML = "Enter email";
        return false;
    }
    if(!e.match(/^([a-z0-9\.-]+)(@)([a-z0-9]+).([a-z]{2,3})$/))
    {
        console.log("sfgd");
        errorTxt.innerHTML="Please enter valid email";
        return  false;
    }
    else
    {
        errorTxt.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

function Num()
{
    let number = document.getElementById("p-number");
    let errortxt = document.getElementById("errornum");
    let n = number.value;
    if(n.length == 0)
    {
        console.log("0");
        errortxt.innerHTML = "Enter Number";
        return false;
    }
    if(n.length > 10)
    {
        console.log("11");
        errortxt.innerHTML = "Enter valid Number";
        return false;
    }
    if(!n.match(/^[0-9]{10}$/))
    {
        console.log("valid1");
        errortxt.innerHTML="Please enter valid number";
        return  false;
    }
    else
    {
        console.log("valid");
        errortxt.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

function Bdate()
{
    let date = document.getElementById("b-date");
    let errortxt = document.getElementById("errordate");
    let e = date.value;
    if(!e)
    {
        console.log("0");
        errortxt.innerHTML = "Please Select Time";
        return false;
    }
    else
    {
        console.log("valid");
        errortxt.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}
function Atime()
{
    let time = document.getElementById("a-time");
    let errortxt = document.getElementById("errortime");
    let t = time.value;
    if(!t)
    {
        console.log("0");
        errortxt.innerHTML = "Please Select Time";
        return false;
    }
    else
    {
        console.log("valid");
        errortxt.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}
function Cpick()
{
    let pick = document.getElementById("f-color");
    let errortxt = document.getElementById("errorpick");
    let p = pick.value;
    if (p == "") 
    {
        console.log("0");
        errortxt.innerHTML = "Please Select color";
        return false;
    }
    else
    {
        console.log("valid");
        errortxt.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}
function Radio()
{
    let r1 = document.getElementById("r1");
    let r2 = document.getElementById("r2");
    let r3 = document.getElementById("r3");
    let errortxt = document.getElementById("errorradio");
    if(r1.checked==true)
    {
        errortxt.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
    else if(r2.checked==true)
    {
        errortxt.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
    else if(r3.checked==true)
    {
        errortxt.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
    else
    {
        errortxt.innerHTML = "Please Select method";
        return false;
    }
}
function Age()
{
    let age = document.getElementById("age");
    let errortxt = document.getElementById("errorage");
    let p = age.value;
    if (!p) 
    {
        console.log("0");
        errortxt.innerHTML = "Please Select color";
        return false;
    }
    else
    {
        console.log("valid");
        errortxt.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}
function Submit()
{
    if(! Fnm() || !Lnm() || ! Email() || ! Num() || ! Bdate() || ! Atime() || !Cpick() || ! Radio() || ! Age())
    {
        alert("Something Went wrong");
        return false;
    }
    else
    {
        return true;
    }
}