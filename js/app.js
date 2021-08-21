// global variables
const totalPrice = document.getElementById("total-price");
const memoryCost = document.getElementById("extra-memory-cost");
const storageCost = document.getElementById("extra-storage-cost");
const deliveryCost = document.getElementById("delivery-cost");
const finalPrice = document.getElementById("final-price");

// total & final product price update
function updateTotalPrice(price) {
  totalPrice.innerText = price;
  finalPrice.innerText = price;
}

// individual product price update
function updateProductPrice(type, setCost, setTotalCost) {
  const productCost = document.getElementById(type + "-cost");
  productCost.innerText = setCost;
  const updatePrice = parseInt(totalPrice.innerText) + setTotalCost;
  updateTotalPrice(updatePrice);
}

// handle memory 8gb
document.getElementById("memory-8gb").addEventListener("click", function () {
  if (parseInt(memoryCost.innerText) == 180) {
    updateProductPrice("extra-memory", 0, -180);
  }
});

// handle memory 16gb
document.getElementById("memory-16gb").addEventListener("click", function () {
  if (parseInt(memoryCost.innerText) == 0) {
    updateProductPrice("extra-memory", 180, 180);
  }
});

// handle storage 256gb
document.getElementById("ssd-256gb").addEventListener("click", function () {
  if (parseInt(storageCost.innerText) == 100) {
    updateProductPrice("extra-storage", 0, -100);
  } else if (parseInt(storageCost.innerText) == 180) {
    updateProductPrice("extra-storage", 0, -180);
  }
});

// handle storage 512gb
document.getElementById("ssd-512gb").addEventListener("click", function () {
  if (parseInt(storageCost.innerText) == 0) {
    updateProductPrice("extra-storage", 100, 100);
  } else if (parseInt(storageCost.innerText) == 180) {
    updateProductPrice("extra-storage", 100, -80);
  }
});

// handle storage 1tb
document.getElementById("ssd-1tb").addEventListener("click", function () {
  if (parseInt(storageCost.innerText) == 0) {
    updateProductPrice("extra-storage", 180, 180);
  } else if (parseInt(storageCost.innerText) == 100) {
    updateProductPrice("extra-storage", 180, 80);
  }
});

// handle free delivery
document.getElementById("free-delivery").addEventListener("click", function () {
  if (parseInt(deliveryCost.innerText) == 20) {
    updateProductPrice("delivery", 0, -20);
  }
});

// handle paid delivery
document.getElementById("paid-delivery").addEventListener("click", function () {
  if (parseInt(deliveryCost.innerText) == 0) {
    updateProductPrice("delivery", 20, 20);
  }
});

// handle promo code
document.getElementById("apply-button").addEventListener("click", function () {
  const promoCode = document.getElementById("promo-code");
  if (promoCode.value == "stevekaku") {
    console.log(finalPrice.innerText);
    finalPrice.innerText = parseInt(finalPrice.innerText) * 0.8;
    promoCode.value = "";
  }
});
