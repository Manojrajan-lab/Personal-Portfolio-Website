// Product Data
const products = [
    { name: "Laptop", category: "electronics", price: 800, rating: 4.5 },
    { name: "Phone", category: "electronics", price: 500, rating: 4.2 },
    { name: "T-Shirt", category: "clothing", price: 25, rating: 4.8 },
    { name: "Jeans", category: "clothing", price: 60, rating: 4.3 }
  ];
  
  // Main Render Function
  function renderProducts() {
    const category = document.getElementById("categoryFilter").value;
    const maxPrice = document.getElementById("priceFilter").value;
    const sortOption = document.getElementById("sortOption").value;
  
    let filtered = [...products];
  
    // Filter by category
    if (category !== "all") {
      filtered = filtered.filter(product => product.category === category);
    }
  
    // Filter by price
    if (maxPrice !== "") {
      filtered = filtered.filter(product => product.price <= Number(maxPrice));
    }
  
    // Sorting
    if (sortOption === "priceLow") {
      filtered.sort((a, b) => a.price - b.price);
    } 
    else if (sortOption === "priceHigh") {
      filtered.sort((a, b) => b.price - a.price);
    } 
    else if (sortOption === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    }
  
    const container = document.getElementById("productList");
  
    // If no products match
    if (filtered.length === 0) {
      container.innerHTML = "<p>No products found.</p>";
      return;
    }
  
    // Build HTML first (better performance)
    let html = "";
  
    filtered.forEach(product => {
      html += `
        <div class="product">
          <h3>${product.name}</h3>
          <p>Category: ${product.category}</p>
          <p class="price">$${product.price}</p>
          <p class="rating">Rating: ${product.rating}</p>
        </div>
      `;
    });
  
    container.innerHTML = html;
  }
  
  // Initial Load
  renderProducts();