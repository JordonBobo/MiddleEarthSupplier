$(document).ready(() => {

// const tl = gsap.timeline( {defaults: {ease: 'power1.out'} })
const basket = JSON.parse(localStorage.getItem("basket")) || [];

function localStore() {
    var localPush = JSON.stringify(basket);
    localStorage.setItem ("basket", localPush);
}

$(".add-to-cart").on("click", function(event) {
    event.preventDefault();
    // let quantity = document.getElementById("quantity").previousSibling.innerHTML;
    const item = {
        title: event.target.getAttribute("data-title"),
        quantity: this.previousElementSibling.value,
        price: event.target.getAttribute("data-price")
    }
    this.previousElementSibling.value = ''
    basket.push(item)
    localStore()
    // console.log(basket)
})



    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
  const button = $('#submitOrder')
  // console.log(button)
  const shippingName =$('#shippingName')
  const shippingAddress =$('#shippingAddress')
  button.on('click',event=>{
      event.preventDefault();
      const shippingInfo = {
        shippingName: shippingName.val().trim(),
        shippingAddress: shippingAddress.val().trim(),
        shippingItems: JSON.stringify(basket),
        totalPrice: price
      }
    //   console.log(productData)
      // if(!productData.product || !productData.description || !productData.image || !productData.price){
      //     return;
      // }
      addOrder(shippingInfo)
      shippingName.val('');
      shippingAddress.val('');
      localStorage.removeItem("basket");
      $('#cartInfo').empty();
      $('#orderPrice').empty();
      // displaySuccess();
  })
  function addOrder(shippingInfo) {
    $.post('/api/orders', shippingInfo).then(console.log(shippingInfo))
    .catch(err => {
        console.log(err)
    })
  }
  // function displaySuccess() {
  //   tl.to('.orderSuccess', {x:'100%', duration: 1} );
  //   tl.fromTo('.orderSuccess', {opacity: 1}, {opacity: 0, duration: 1, delay: 2} );
  //   tl.to('.orderSuccess', {x:'-100%', duration: 1} );
  // }




let price = 0
for (let i = 0; i < basket.length; i++) {
  // console.log(i)
  // var stuff = basket[i].title + ": " + basket[i].quantity;
  // var newTag = '<p>' + stuff + '</p>'
  // console.log(newTag)
  var tRow = $('<tr>');
  var item = $('<td>').text(basket[i].title);
  var quantity = $('<td>').text(basket[i].quantity);
  var unitPrice = $('<td>').text('₡' + basket[i].price);
  tRow.append(item, quantity, unitPrice);
  $('#cartInfo').append(tRow);
  price = price + basket[i].quantity * basket[i].price
  $('#orderPrice').text('₡' + price)
}

}); 


