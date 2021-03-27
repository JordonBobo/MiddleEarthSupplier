$(document).ready(() => {


// console.log(basket2)


const basket = []


$(".add-to-cart").on("click", function(event) {
    event.preventDefault();
    // let quantity = document.getElementById("quantity").previousSibling.innerHTML;
    const item = {
        title: event.target.getAttribute("data-title"),
        quantity: this.previousElementSibling.value,
        price: event.target.getAttribute("data-price")
    }
    console.log(item);
    basket.push(JSON.stringify(item))
    console.log(basket)
})



    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
  const button = $('#submitOrder')
  console.log(button)
  const shippingName =$('#shippingName')
  const shippingAddress =$('#shippingAddress')
  button.on('click',event=>{
      alert('submit worked')
      event.preventDefault();
      const shippingInfo = {
        shippingName: shippingName.val().trim(),
        shippingAddress: shippingAddress.val().trim(),
        shippingItems: basket,
        totalPrice: 100
      }
    //   console.log(productData)
      // if(!productData.product || !productData.description || !productData.image || !productData.price){
      //     return;
      // }
      addOrder(shippingInfo)
      shippingName.val('');
      shippingAddress.val('');
  })
  function addOrder(shippingInfo) {
    $.post('/api/orders', shippingInfo).then(console.log(shippingInfo))
    .catch(err => {
        console.log(err)
    })
  }
  
    // $.get("/api/user_data").then(data => {
    //   $(".member-name").text(data.email);
    // });
  }); 
