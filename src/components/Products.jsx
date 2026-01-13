const Products = () => {
  const products = [
    {
      id: 'Chicken',
      name: 'Whole Chicken',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti amet aperiam eius soluta consequatur exercitationem, architecto quae! Repudiandae placeat tempora quidem inventore, possimus sit maiores at minus porro. Neque?',
      price: 12.90,
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 'Product-2',
      name: 'Product 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, vero! Temporibus, illo iure provident quae id inventore omnis quod optio perspiciatis quia eaque nostrum unde ea ratione excepturi exercitationem maiores.',
      price: 8.50,
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 'Product-3',
      name: 'Product 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque omnis, quidem aspernatur, quia, animi possimus ipsum itaque sint nostrum esse modi. Veritatis voluptatem laudantium sit enim nobis quos consequuntur dolorem.',
      price: 7.90,
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 'Product-4',
      name: 'Product 4',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, assumenda accusamus! Aspernatur molestias beatae veniam possimus ipsa amet voluptates aut minus quibusdam, tenetur saepe ducimus, libero, expedita mollitia iure at!',
      price: 5.90,
      image: 'https://via.placeholder.com/300x200'
    }
  ];

  return (
    <section id="products" className="products" style={{ backgroundColor: 'var(--light)' }}>
      <div className="container">
        <div className="section-title">
          <h2>Our Products</h2>
          <p>Discover our range of high-quality foods, carefully selected to meet your needs.</p>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-img">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-price">€ {product.price.toFixed(2).replace('.', ',')}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;