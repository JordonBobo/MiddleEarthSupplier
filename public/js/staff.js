 $(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
const product =$('#productName')
const description =$('#productDescription')
const image =$('#productImage')
const price =$('#productPrice')
const button =$('#newProductForm')
button.on('submit',event=>{
    event.preventDefault();
    const productData = {
        name: product.val().trim(),
        description: description.val().trim(),
        img_filename: image.val().trim(),
        list_price: price.val().trim(),
    }
    console.log(productData)
    // if(!productData.product || !productData.description || !productData.image || !productData.price){
    //     return;
    // }
    addProduct(productData)
    product.val('');
    description.val('');
    image.val('');
    price.val('');
})

function addProduct(productData) {
  console.log("test")
  $.post('/api/products', productData).then(console.log(productData))
  .catch(err => {
      console.log(err)
  })
}

// *** MODIFY HERE ***
const shipBtns = document.querySelectorAll('.ship');
if (shipBtns) {
  shipBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
      const id = e.target.getAttribute('data-id');
      const shipState = {
        shipped: true,
      };
      fetch(`/api/orders/${id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(shipState),
      }).then((response) => {
        if (response.ok) {
          console.log('changed to shipped');
        } else {
          alert('something went wrong!');
        }
        location.reload();
      });
    });
  });
}

  // $.get("/api/user_data").then(data => {
  //   $(".member-name").text(data.email);
  // });

  // for (let i = 0; i < dbOrder.shippingItems.length; i++) {
  //   // console.log(i)
  //   // var stuff = basket[i].title + ": " + basket[i].quantity;
  //   // var newTag = '<p>' + stuff + '</p>'
  //   // console.log(newTag)
  //   var tRow = $('<tr>');
  //   var item = $('<td>').text(basket[i].title);
  //   var quantity = $('<td>').text(basket[i].quantity);
  //   var unitPrice = $('<td>').text(basket[i].price);
  //   tRow.append(item, quantity, unitPrice);
  //   $('#cartInfo').append(tRow);
  //   price = price + basket[i].quantity * basket[i].price
  //   $('#orderPrice').text(price)
  // }

}); 