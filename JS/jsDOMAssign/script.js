let btn=document.getElementById("btn");
let result=document.getElementById("result");

btn.addEventListener("click",function()
{
  let name=document.getElementById("name").value;
  let name=document.getElementById("city").value;

  result.style.display="block";
  result.innerHTML="Name:" + name + "<br>City:" + city;
});

    let btn = document.getElementById("btn");
    let result2 = document.getElementById("result2");

    
    btn.addEventListener("click", function () {
      let name = document.getElementById("name").value;
      let city = document.getElementById("city").value;

      result2.style.display = "block";
      result2.innerHTML = "Name: " + name + "<br>City: " + city;
    });

 
    let btn = document.getElementById("submitBtn");
    let result3 = document.getElementById("result");

    
    btn.addEventListener("click", function () {
      let first = document.getElementById("firstName").value;
      let last = document.getElementById("lastName").value;

      let fullName = first + " " + last;

      result3.style.display = "block";
      result3.innerHTML = "Full Name: " + fullName;
    });










 
