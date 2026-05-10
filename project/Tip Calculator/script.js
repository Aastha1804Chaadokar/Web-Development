 document
      .querySelector("form")
      .addEventListener("submit", (event) => {

        event.preventDefault();

        const billAmount =
          document.getElementById("billAmount").value;

        const service =
          document.getElementById("service").value;

        const people =
          document.getElementById("people").value;

        // Tip

        const tip =
          Number(billAmount) * Number(service);

        // Total Bill

        const totalBill =
          Number(billAmount) + tip;

        // Per Person

        const perPerson =
          totalBill / Number(people);

        // Display Result

        document.getElementById("result").style.display =
          "block";

        document.getElementById("amount").innerText =
          perPerson.toFixed(2);

        // Clear Inputs

        document.getElementById("billAmount").value = "";

        document.getElementById("people").value = "";

      });