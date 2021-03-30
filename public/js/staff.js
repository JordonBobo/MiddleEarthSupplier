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


// fetch('/api/orders', {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log('Successful GET all orders:', data);
//     data.map(({ shippingItems }) => {
//       const orderItems = JSON.parse(shippingItems);
      
//       for (let i = 0; i < orderItems.length; i++) {
//           var tRow = $('<tr>');
//           var title = $('<td>').text(orderItems[i].title);
//           var quantity = $('<td>').text(orderItems[i].quantity);
//           tRow.append(title, quantity);
//           $('#orderItems').append(tRow);
//       }
        
//       // const row = document.createElement('div');
//       // const chirpArea = document.getElementById('chirp-area');
//       // row.classList.add('chirp');
//       // console.log(items);
//       // console.log(shippingItems);
//       // console.log(shippingItem);

//     //   const chirpAuthor = document.createElement('p');
//     //   const chirpBody = document.createElement('p');
//     //   const chirpDate = document.createElement('p');
//     //   chirpAuthor.textContent = `${author} chirped: `;
//     //   chirpBody.textContent = `${body}`;
//     //   chirpDate.textContent = `At ${new Date(created_at).toLocaleDateString()}`;

//     //   row.appendChild(chirpAuthor);
//     //   row.appendChild(chirpBody);
//     //   row.appendChild(chirpDate);

//     //   chirpArea.prepend(row);
//     });
//   })
  // .catch((err) => console.error(err));


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

  

}); 