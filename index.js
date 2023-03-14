
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
    let a = age.value;
    if(a == "")
    {
        errortxt.innerHTML = "Please Select Age";
        return false;
    }0
    errortxt.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function File1()
{
    let file = document.getElementById("file");
    let errortxt = document.getElementById("errorfile");
    let a = file.value;
    if(a == "")
    {
        errortxt.innerHTML = "Please Select photo";
        return false;
    }
    errortxt.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function Check()
{
    let file = document.getElementById("checkbox");
    let errortxt = document.getElementById("errorcheck");
    if(file.checked == true)
    {
        errortxt.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
    errortxt.innerHTML = "Please Check";
    return false;
}
function Submit()
{
    
    if(! Fnm() || !Lnm() || ! Email() || ! Num() || ! Bdate() || ! Atime() || !Cpick() || ! Radio() || !Age() || !File1() || ! Check())
    {
        alert("Something Went wrong");
        return false;
    }
    else
    {
        console.log("sdjhsdgs");
        Setdata();
        return true;
    }
}
function Setdata()
{
    console.log("adf");
    let name = document.getElementById("First-name").value;
    let lastname = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("p-number").value;
    let birthdate = document.getElementById("b-date").value;
    let time = document.getElementById("a-time").value;
    let color = document.getElementById("f-color").value;
    let age = document.getElementById("age").value;
    let photo = document.getElementById("file").value;
    let tc = document.getElementById("checkbox").value;
    let cash = document.getElementById("r1").value;
    let card = document.getElementById("r2").value;
    let upi = document.getElementById("r3").value;



    let n1 = localStorage.setItem("First Name", name);
    let n2 = localStorage.setItem("Last Name", lastname);
    let n3 = localStorage.setItem("E-mail", email);
    let n4 = localStorage.setItem("Phone NUmber", number);
    let n5 = localStorage.setItem("Birth date", birthdate);
    let n6 = localStorage.setItem("Application Time", time);
    let n7 = localStorage.setItem("Favorite color", color);
    let n8 = localStorage.setItem("Age", age);
    let n9 = localStorage.setItem("Photo", photo);
    let n10 = localStorage.setItem("Terms&COndition", tc);
    let n11 = localStorage.setItem("Payment Metod", cash);
    let n12 = localStorage.setItem("Payment Metod", card);
    let n13 = localStorage.setItem("Payment Metod", upi);


    let a1 = localStorage.getItem("First Name", n1);
    let a2 = localStorage.getItem("Last Name", n2);
    let a3 = localStorage.getItem("E-mail", n3);
    let a4 = localStorage.getItem("Phone NUmber", n4);
    let a5 = localStorage.getItem("Birth date", n5);
    let a6 = localStorage.getItem("Application Time", n6);
    let a7 = localStorage.getItem("Favorite color", n7);
    let a8 = localStorage.getItem("Age", n8);
    let a9 = localStorage.getItem("Photo", n9);
    let a10 = localStorage.getItem("Terms&COndition", n10);
    let a11 = localStorage.getItem("Payment Metod", n11);
    let a12 = localStorage.getItem("Payment Metod", n12);
    let a13 = localStorage.getItem("Payment Metod", n13);

    let  table = document.getElementById("table");
    let row1 = table.insertRow();
    let row2 = table.insertRow();
    let row3 = table.insertRow();
    let row4 = table.insertRow();
    let row5 = table.insertRow();
    let row6 = table.insertRow();
    let row7 = table.insertRow();
    let row8 = table.insertRow();
    let row9 = table.insertRow();
    let row10 = table.insertRow();
    let row11 = table.insertRow();
    let row12 = table.insertRow();
    let row13 = table.insertRow();
    let c1 = row1.insertCell();
    let c2 = row1.insertCell();
    let c3 = row2.insertCell();
    let c4 = row2.insertCell();
    let c5 = row3.insertCell();
    let c6 = row3.insertCell();
    let c7 = row4.insertCell();
    let c8 = row4.insertCell();
    let c9 = row5.insertCell();
    let c10 = row5.insertCell();
    let c11 = row6.insertCell();
    let c12 = row6.insertCell();
    let c13 = row7.insertCell();
    let c14 = row7.insertCell();
    let c15 = row8.insertCell();
    let c16 = row8.insertCell();
    let c17 = row9.insertCell();
    let c18 = row9.insertCell();
    let c19 = row10.insertCell();
    let c20 = row10.insertCell();
    let c21 = row11.insertCell();
    let c22 = row11.insertCell();
    let c23 = row12.insertCell();
    let c24 = row12.insertCell();
    let c25 = row13.insertCell();
    let c26 = row13.insertCell();
    
    console.log("hioi");
    c1.innerHTML = "First Name";
    c2.innerHTML = a1;
    c3.innerHTML = "Last Name";
    c4.innerHTML = a2;
    c5.innerHTML = "E-mail";
    c6.innerHTML = a3;
    c7.innerHTML = "Phone NUmber";
    c8.innerHTML = a4;
    c9.innerHTML = "Birth date";
    c10.innerHTML =a5;
    c11.innerHTML ="Application Time";
    c12.innerHTML =a6;
    c13.innerHTML ="Favorite color";
    c14.innerHTML =a7;
    c15.innerHTML ="Age";
    c16.innerHTML =a8;
    c17.innerHTML ="Photo";
    c18.innerHTML =a9;
    c19.innerHTML ="Terms&COndition";
    c20.innerHTML =a10;
    c21.innerHTML ="Payment Metod";
    c22.innerHTML =a11;
    c23.innerHTML ="Payment Metod";
    c24.innerHTML =a12;
    c25.innerHTML ="Payment Metod";
    c26.innerHTML =a13;
}