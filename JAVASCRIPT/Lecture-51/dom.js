document.addEventListener('DOMContentLoaded', () => {
    let container = document.querySelector(".container");

    if (container) {
        let newElement = document.createElement('p');
        newElement.textContent = "Hello, World!";
        container.appendChild(newElement);
    } else {
        console.error("Container not found");
    }
});
