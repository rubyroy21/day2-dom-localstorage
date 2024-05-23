document.addEventListener("DOMContentLoaded", function () {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cartContainer");
  const totalItems = document.getElementById("totalItems");
  const totalAmount = document.getElementById("totalAmount");
  const billAmount = document.getElementById("billAmount");
  const cartCount = document.getElementById("cartCount");
  const applyCouponButton = document.getElementById("applyCoupon");

  function updateCart() {
    container.innerHTML = "";
    let total = 0;
    cart.map((item, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <p>Name: ${item.name}</p>
                <p>Original Price: ${item.originalPrice}</p>
                <p>Discounted Price: ${item.discountedPrice}</p>
                <button class="removeFromCart">Remove from Cart</button>
            `;
      container.appendChild(itemDiv);

      itemDiv
        .querySelector(".removeFromCart")
        .addEventListener("click", function () {
          cart.splice(index, 1);
          localStorage.setItem("cart", JSON.stringify(cart));
          updateCart();
        });

      total += item.discountedPrice;
    });
    totalItems.textContent = `Total items in cart: ${cart.length}`;
    totalAmount.textContent = `Total Amount: ${total}`;
    billAmount.textContent = `Bill Amount: ${total}`;
    cartCount.textContent = cart.length;
  }

  updateCart();

  applyCouponButton.addEventListener("click", function () {
    const couponCode = document.getElementById("couponCode").value;
    if (couponCode === "Masai15") {
      const total = parseFloat(totalAmount.textContent.split(": ")[1]);
      const discountedTotal = (total * 0.85).toFixed(2);
      billAmount.textContent = `Bill Amount: ${discountedTotal}`;
    } else {
      alert("Invalid coupon code!");
    }
  });
});
