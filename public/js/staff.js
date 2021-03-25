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
        product: product.val().trim(),
        description: description.val().trim(),
        image: image.val().trim(),
        price: price.val().trim(),
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
  $.post('/api/products', {productData}).then(console.log(productData))
  .catch(err => {
      console.log(err)
  })
}



  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });
}); 