
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
    }
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
        let data= Setdata();
        let readdata = readingDataFromLocalStorage(data);
        insert(readdata);
        return true;
    }
}
function insert(readdata)
{
    console.log("dsfdjks");
    let table = document.getElementById("table2");
    let row = table.insertRow();
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);
    let c5 = row.insertCell(4);
    let c6 = row.insertCell(5);
    let c7 = row.insertCell(6);
    let c8 = row.insertCell(7);
    let c9 = row.insertCell(8);
    let c10 = row.insertCell(9);
    c1.innerHTML = data[0];
    c2.innerHTML = data[1];
    c3.innerHTML = data[2];
    c4.innerHTML = data[3];
    c5.innerHTML = data[4];
    c6.innerHTML = data[5];
    c7.innerHTML = data[6];
    c8.innerHTML = data[7];
    c9.innerHTML = data[8];
    c10.innerHTML = data[9];
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
    // let cash = document.getElementById("r1").value;
    // let card = document.getElementById("r2").value;
    // let upi = document.getElementById("r3").value;

    var arr = [name,lastname,email,number,birthdate,time,color,age,photo,tc];
    return arr;
}
function readingDataFromLocalStorage(data)
{


    let n1 = localStorage.setItem("First Name", data[0]);
    let n2 = localStorage.setItem("Last Name",  data[1]);
    let n3 = localStorage.setItem("E-mail",  data[2]);
    let n4 = localStorage.setItem("Phone NUmber",  data[3]);
    let n5 = localStorage.setItem("Birth date",  data[4]);
    let n6 = localStorage.setItem("Application Time",  data[5]);
    let n7 = localStorage.setItem("Favorite color",  data[6]);
    let n8 = localStorage.setItem("Age",  data[7]);
    let n9 = localStorage.setItem("Photo",  data[8]);
    let n10 = localStorage.setItem("Terms&COndition",  data[9]);
    // let n11 = localStorage.setItem("Payment Metod", cash);
    // let n12 = localStorage.setItem("Payment Metod", card);
    // let n13 = localStorage.setItem("Payment Metod", upi);


    let a1 = localStorage.setItem("First Name", n1);
    let a2 = localStorage.setItem("Last Name", n2);
    let a3 = localStorage.setItem("E-mail", n3);
    let a4 = localStorage.setItem("Phone NUmber", n4);
    let a5 = localStorage.setItem("Birth date", n5);
    let a6 = localStorage.setItem("Application Time", n6);
    let a7 = localStorage.setItem("Favorite color", n7);
    let a8 = localStorage.setItem("Age", n8);
    let a9 = localStorage.setItem("Photo", n9);
    let a10 = localStorage.setItem("Terms&COndition", n10);
    // let a11 = localStorage.setItem("Payment Metod", n11);
    // let a12 = localStorage.setItem("Payment Metod", n12);
    // let a13 = localStorage.setItem("Payment Metod", 13);

    let arr =[a1,a2,a3,a4,a5,a6,a7,a8,a9,a10];
    return arr;
}