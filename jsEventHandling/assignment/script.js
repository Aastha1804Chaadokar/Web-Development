document.getElementById("bgcolor").addEventListener("change",changebilbcolor1);
function changebilbcolor1()
{
    const color =document.getElementById("bgcolor").value;
    document.getElementById("mainbc").style.backgroundColor=color;
}
document.getElementById("headingcolor").addEventListener("change",changebilbcolor2);
function changebilbcolor2()
{
    const color =document.getElementById("headingcolor").value;
    document.getElementById("heading").style.color=color;
}
document.getElementById("paragraphcolor").addEventListener("change",changebilbcolor3);
function changebilbcolor3()
{
    const color =document.getElementById("paragraphcolor").value;
    document.getElementById("para").style.color=color;
}
function reset()
{
    window.location.reload();
}