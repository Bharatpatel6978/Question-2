function Fnm()
{
    let firstnm = document.getElementById("first-name").value;

    if(firstnm.length == 0)
    {
        alert("enter name");
        return false;
    }
    if(!firstnm.match(/^[A-Za-z]+$/))
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