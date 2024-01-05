function updatePrice() {
    let s = document.getElementsByName("prodType");
    let select = s[0];
    let price = 0;
    let prices = getPrices();
    let priceIndex = parseInt(select.value) - 1;
    if (priceIndex >= 0) {
      price = prices.prodTypes[priceIndex];
    }
    
    if (select.value === "1") {
      document.getElementById("checkboxes").style.display = "none";
      document.getElementById("radios").style.display = "none";
    } else if (select.value === "2") {
      document.getElementById("checkboxes").style.display = "none";
      document.getElementById("radios").style.display = "block";
    } else if (select.value === "3") {
      document.getElementById("checkboxes").style.display = "block";
      document.getElementById("radios").style.display = "none";
    }
  
    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function(radio) {
      if (radio.checked) {
        let optionPrice = prices.prodOptions[radio.value];
        if (optionPrice !== undefined) {
          price += optionPrice;
        }
      }
    });
  
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        let propPrice = prices.prodProperties[checkbox.name];
        if (propPrice !== undefined) {
          price += propPrice;
        }
      }
    });
    
    let prodPrice = document.getElementById("prodPrice");
    prodPrice.innerHTML = price + " рублей";
  }
  
  function getPrices() {
    return {
      prodTypes: [1000, 42, 74],
      prodOptions: {
        option2: 9,
        option3: 8,
      },
      prodProperties: {
        prop1: 10,
        prop2: 5,
      }
    };
  }
  
  window.addEventListener('DOMContentLoaded', function (event) {
    
    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = "none";
    let s = document.getElementsByName("prodType");
    let select = s[0];
    select.addEventListener("change", function(event) {
      let target = event.target;
      console.log(target.value);
      updatePrice();
    });
      
    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function(radio) {
      radio.addEventListener("change", function(event) {
        let r = event.target;
        console.log(r.value);
        updatePrice();
      });
    });
    
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener("change", function(event) {
        let c = event.target;
        console.log(c.name);
        console.log(c.value);
        updatePrice();
      });
    });
  
    updatePrice();
  });
  