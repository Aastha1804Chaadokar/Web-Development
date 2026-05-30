const country1 = document.getElementById("country1");
const country2 = document.getElementById("country2");

const flag1 = document.getElementById("flag1");
const flag2 = document.getElementById("flag2");

const amount = document.getElementById("amount");

const result = document.getElementById("result");

const convertBtn = document.getElementById("convertBtn");


// LOAD JSON DATA
fetch("codes.json")
.then((response) => response.json())

.then((data) => {

  data.forEach((country) => {

    let option1 = document.createElement("option");

    option1.value =
    `${country.currency_code},${country.country_code}`;

    option1.textContent = country.country;

    country1.appendChild(option1);



    let option2 = document.createElement("option");

    option2.value =
    `${country.currency_code},${country.country_code}`;

    option2.textContent = country.country;

    country2.appendChild(option2);

  });

  // DEFAULT VALUES
  country1.value = "inr,IN";
  country2.value = "usd,US";

});


// UPDATE FLAGS
country1.addEventListener("change", () => {

  let code =
  country1.value.split(",")[1];

  flag1.src =
  `https://flagsapi.com/${code}/flat/64.png`;

});


country2.addEventListener("change", () => {

  let code =
  country2.value.split(",")[1];

  flag2.src =
  `https://flagsapi.com/${code}/flat/64.png`;

});


// CONVERT
convertBtn.addEventListener("click", async () => {

  let fromCurrency =
  country1.value.split(",")[0];

  let toCurrency =
  country2.value.split(",")[0];

  let money = amount.value;

  if(money == "" || money <= 0){

    result.innerHTML =
    "Please Enter Valid Amount";

    return;
  }

  let response = await fetch(
    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`
  );

  let data = await response.json();

  let rate =
  data[fromCurrency][toCurrency];

  let finalAmount =
  money * rate;

  result.innerHTML =
  `Converted Amount : ${finalAmount.toFixed(2)} ${toCurrency.toUpperCase()}`;

});