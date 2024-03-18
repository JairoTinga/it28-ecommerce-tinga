fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const productListcontainer = document.getElementById('productList');

    data.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('card', 'mb-3', 'mx-auto', 'w-75');


      const productNameWithoutSpaces = product.Name.replace(/\s/g, ''); // Remove spaces from product name

      card.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${product.Name}</h5>
          <ul class="list-group">
            <li class="list-group-item">Description: ${product.Description}</li>
            <li class="list-group-item">Price: ${product.Stocks}</li>
          </ul>

        </div>
      `;

      productListcontainer.appendChild(card);
    });

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });