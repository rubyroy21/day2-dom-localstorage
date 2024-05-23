const hairCareItems = [
  // Example items, replace with real data
  {
    img: "image1.jpg",
    name: "Hair Care 1",
    originalPrice: 100,
    discountedPrice: 80,
  },
  {
    img: "image2.jpg",
    name: "Hair Care 2",
    originalPrice: 120,
    discountedPrice: 90,
  },
  {
    img: "image3.jpg",
    name: "Hair Care 3",
    originalPrice: 140,
    discountedPrice: 110,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("hairCareContainer");
  hairCareItems.map((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <p>Name: ${item.name}</p>
            <p>Original Price: ${item.originalPrice}</p>
            <p>Discounted Price: ${item.discountedPrice}</p>
            <button class="addToCart">Add to Cart</button>
        `;
    container.appendChild(itemDiv);

    itemDiv.querySelector(".addToCart").addEventListener("click", function () {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));
      document.getElementById("cartCount").textContent = cart.length;
    });
  });
});
