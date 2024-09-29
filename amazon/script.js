// Dark Mode Toggle Feature
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};
document.querySelector('header').addEventListener('dblclick', toggleDarkMode);

// Quick View Feature
const openModal = (productName) => {
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal-content');
    
    // Example product details (You can load this from an API later)
    const productDetails = {
        "boAt": {
            "name": "boAt Headphones",
            "price": "₹249",
            "description": "High-quality sound and great build."
        },
        "Boult": {
            "name": "Boult Headphones",
            "price": "₹349",
            "description": "Superior sound with noise cancellation."
        },
        "Noise": {
            "name": "Noise Headphones",
            "price": "₹649",
            "description": "Wireless and great sound."
        },
        "Zebronics": {
            "name": "Zebronics Headphones",
            "price": "₹149",
            "description": "Affordable and durable."
        }
    };

    const productInfo = productDetails[productName];

    // Populate the modal content
    modalContent.innerHTML = `
        <span class="close">&times;</span>
        <h2>${productInfo.name}</h2>
        <p>Price: ${productInfo.price}</p>
        <p>Description: ${productInfo.description}</p>
    `;

    // Display the modal
    modal.style.display = "block";

    // Close the modal when the close button is clicked
    document.querySelector('.close').onclick = () => {
        modal.style.display = "none";
    };

    // Close the modal when clicking outside the modal content
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
};

// Add event listeners to all Quick View buttons
document.querySelectorAll('.quick-view-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const product = event.target.getAttribute('data-product');
        openModal(product);
    });
});
