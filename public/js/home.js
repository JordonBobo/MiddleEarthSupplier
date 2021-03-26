$(".add-to-cart").on("click", function(event) {
    event.preventDefault();
    // let quantity = document.getElementById("quantity").previousSibling.innerHTML;
    const item = {
        title: event.target.getAttribute("data-title"),
        quantity: this.previousElementSibling.value,
        price: event.target.getAttribute("data-price")
    }
    console.log(item);
})

// const item = {
//     title: event.target.getAttribute("data-title"),
//     quantity: event.target.previousElementSibling.getAttribute("input"),
//     price: event.target.getAttribute("data-price")
// }