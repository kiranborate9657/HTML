// Select button
let button = document.getElementById("color_button");

// Add click event
button.addEventListener("click", function () {

    // Create random RGB values
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    // Make RGB color
    let randomColor = "rgb(" + r + "," + g + "," + b + ")";

    // Select div
    let page = document.querySelector(".front_page");

    // Change background color
    page.style.backgroundColor = randomColor;

});
