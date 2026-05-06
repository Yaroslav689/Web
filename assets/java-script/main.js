const products = [ 
    {
        title: 'frame-1',
        image: 'assets/img/product/frame-1.png',
        plantType: 'Natural Plant',
        plantPrice: '$14.00'
    },
    {
        title: 'frame-2',
        image: 'assets/img/product/frame-2.png',
        plantType: 'Artificial Plant',
        plantPrice: '$9.00'
    },
    {
        title: 'frame-3',
        image: 'assets/img/product/frame-3.png',
        plantType: 'Natural Plant',
        plantPrice: '$35.00'
    }
];

const container = document.querySelector('.product__content');

products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product__media';
    card.innerHTML = `
      <a href="#"><img src="${product.image}" alt="${product.title}"></a>
      <small class="product__plant-name">${product.plantType}</small>
      <small class="product__plant-price">${product.plantPrice}</small>
    `;
    container.appendChild(card);
});
/* html
            div class="product__content">  
                <div class="product__media">
                    <a href="#"><img src="assets/img/product/frame-1.png" alt="frame-1"></a>
                    <small class="product__plant-name">Natural Plant</small>
                    <small class="product__plant-price">$14.00</small>
                </div>
                <div class="product__media">
                    <a href="#"><img src="assets/img/product/frame-2.png" alt="frame-2"></a>
                    <small class="product__plant-name">Artificial Plant</small>
                    <small class="product__plant-price">$9.00</small>
                </div>
                <div class="product__media">
                    <a href="#"><img src="assets/img/product/frame-3.png" alt="frame-3"></a>
                    <small class="product__plant-name">Natural Plant</small>
                    <small class="product__plant-price">$35.00</small>
                </div>
            </div> */ 