


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
    if(!e.match(/^[^A-Z]*[a-z]\._\-[0-9]*[@][^A-Z][a-z]*[\.][a-z]{2,4}$/))
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

function Phone()
{
   
    let phone = document.getElementById("p-number");
    let p = phone.value;
    if(p.length == 0)
    {
        alert("enter name");
        return false;
    }
    if(!p.match(/^[A-Za-z]+$/))
    {
        console.log("sfgd");
        alert("enter value");
        return  false;
    }
    else
    {
        alert("done");
    }
}

function Bdate()
{
   
    let date = document.getElementById("b-date");
    let b = date.value;
    if(b.length == 0)
    {
        alert("enter name");
        return false;
    }
    if(!b.match(/^[A-Za-z]+$/))
    {
        console.log("sfgd");
        alert("enter value");
        return  false;
    }
    else
    {
        alert("done");
    }
}

function Stime()
{
   
    let time = document.getElementById("a-time");
    let t = time.value;
    if(t.length == 0)
    {
        alert("enter name");
        return false;
    }
    if(!t.match(/^[A-Za-z]+$/))
    {
        console.log("sfgd");
        alert("enter value");
        return  false;
    }
    else
    {
        alert("done");
    }
}

function Cpick()
{
   
    let color = document.getElementById("f-color");
    let c = color.value;
    if(c.length == 0)
    {
        alert("enter name");
        return false;
    }
    if(!c.match(/^[A-Za-z]+$/))
    {
        console.log("sfgd");
        alert("enter value");
        return  false;
    }
    else
    {
        alert("done");
    }
}   