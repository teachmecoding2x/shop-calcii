const categories = {
    "amazon": {
        "Electronics": ["Laptops", "Mobile Phones", "Tablets"],
        "Home Appliances": ["Vacuum Cleaners", "Refrigerators", "Air Conditioners"],
        "Fashion": ["Men's Clothing", "Women's Clothing", "Kids' Wear"]
    },
    "walmart": {
        "Groceries": ["Fruits", "Vegetables", "Beverages"],
        "Furniture": ["Beds", "Sofas", "Dining Tables"],
        "Fitness": ["Treadmills", "Dumbbells", "Exercise Bikes"]
    },
    "ebay": {
        "Automotive": ["Car Accessories", "Bike Parts", "Tires"],
        "Toys": ["Action Figures", "Board Games", "Dolls"]
    },
    "torrid": {
        "Women's Clothing": ["Dresses", "Tops", "Bras", "Corsets", "Pants"],
        "Accessories": ["Bags", "Shoes", "Jewelry"]
    }
};

document.getElementById('store').addEventListener('change', function() {
    const store = this.value;
    const categoryDropdown = document.getElementById('category');
    const subcategoryDropdown = document.getElementById('subcategory');
    const specificItemDropdown = document.getElementById('specific-item');
    
    categoryDropdown.innerHTML = '<option value="" disabled selected>Select a category</option>';
    subcategoryDropdown.innerHTML = '<option value="" disabled selected>Select a subcategory</option>';
    specificItemDropdown.innerHTML = '<option value="" disabled selected>Select an item</option>';

    if (categories[store]) {
        for (const category in categories[store]) {
            categoryDropdown.innerHTML += `<option value="${category}">${category}</option>`;
        }
    }
});

document.getElementById('category').addEventListener('change', function() {
    const store = document.getElementById('store').value;
    const category = this.value;
    const subcategoryDropdown = document.getElementById('subcategory');

    subcategoryDropdown.innerHTML = '<option value="" disabled selected>Select a subcategory</option>';
    if (categories[store] && categories[store][category]) {
        categories[store][category].forEach(subcategory => {
            subcategoryDropdown.innerHTML += `<option value="${subcategory}">${subcategory}</option>`;
        });
    }
});

document.getElementById('calculate-btn').addEventListener('click', function() {
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);
    const summary = document.getElementById('summary');
    const summaryText = document.getElementById('summary-text');

    if (!isNaN(price) && !isNaN(quantity)) {
        const total = price * quantity;
        summary.style.display = 'block';
        summaryText.textContent = `Total cost for ${quantity} item(s): $${total.toFixed(2)}`;
    } else {
        alert('Please enter valid price and quantity.');
    }
});
