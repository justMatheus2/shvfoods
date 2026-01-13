import { useState, useEffect } from 'react';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const [quantities, setQuantities] = useState({
    oil: 0,
    rice: 0,
    beans: 0,
    pasta: 0
  });

  const [orderSummary, setOrderSummary] = useState({
    items: [],
    total: 0
  });

  const products = [
    { id: 'Chicken', name: 'Whole Chicken', price: 12.90 },
    { id: 'Product-2', name: 'Product 2', price: 8.50 },
    { id: 'Product-3', name: 'Product 3', price: 7.90 },
    { id: 'Product-4', name: 'Product 4', price: 5.90 }
  ];

  const updateQuantity = (productId, change) => {
    setQuantities(prev => {
      const newQuantity = prev[productId] + change;
      return {
        ...prev,
        [productId]: newQuantity >= 0 ? newQuantity : 0
      };
    });
  };

  const calculateSubtotal = (productId) => {
    const product = products.find(p => p.id === productId);
    return quantities[productId] * product.price;
  };

  const updateOrderSummary = () => {
    const items = products
      .filter(product => quantities[product.id] > 0)
      .map(product => ({
        name: product.name,
        quantity: quantities[product.id],
        subtotal: calculateSubtotal(product.id)
      }));

    const total = items.reduce((sum, item) => sum + item.subtotal, 0);

    setOrderSummary({ items, total });
  };

  useEffect(() => {
    updateOrderSummary();
  }, [quantities]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleQuantityChange = (productId, value) => {
    const numValue = parseInt(value) || 0;
    setQuantities(prev => ({
      ...prev,
      [productId]: numValue >= 0 ? numValue : 0
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (orderSummary.total === 0) {
      alert('Please select at least one product to order.');
      return;
    }

    // EmailJS
    console.log('Dados do pedido:', { ...formData, quantities, orderSummary });
    
    alert(`Pedido enviado com sucesso!\nTotal: € ${orderSummary.total.toFixed(2).replace('.', ',')}\nEntraremos em contato em breve para confirmar.`);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      message: ''
    });
    setQuantities({
      oil: 0,
      rice: 0,
      beans: 0,
      pasta: 0
    });
  };

  return (
    <section id="order" className="order-form">
      <div className="container">
        <div className="form-container">
          <h2 className="form-title">Make an Order</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name / Company</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="form-control"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label>Select your Products</label>
              
              {products.map(product => (
                <div key={product.id} className="product-quantity" data-price={product.price}>
                  <div className="product-row">
                    <div className="product-details">
                      <span className="product-name">{product.name}</span>
                      <span className="product-price-form">€ {product.price.toFixed(2).replace('.', ',')} / Each</span>
                    </div>
                    <div className="quantity-controls">
                      <button 
                        type="button" 
                        className="quantity-btn minus"
                        onClick={() => updateQuantity(product.id, -1)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        className="quantity-input"
                        id={`${product.id}-qty`}
                        value={quantities[product.id]}
                        onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                        min="0"
                        max="199"
                      />
                      <button 
                        type="button" 
                        className="quantity-btn plus"
                        onClick={() => updateQuantity(product.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="subtotal" id={`${product.id}-subtotal`}>
                    total: € {calculateSubtotal(product.id).toFixed(2).replace('.', ',')}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Resumo do Pedido */}
            <div className="order-summary">
              <div className="summary-title">Order summary</div>
              <div id="summary-items">
                {orderSummary.items.length > 0 ? (
                  orderSummary.items.map((item, index) => (
                    <div key={index} className="summary-item">
                      <span>{item.name} ({item.quantity}x)</span>
                      <span>€ {item.subtotal.toFixed(2).replace('.', ',')}</span>
                    </div>
                  ))
                ) : (
                  <div className="summary-item">Select at least one item.</div>
                )}
              </div>
              <div className="summary-total">
                <span>Total:</span>
                <span id="order-total">€ {orderSummary.total.toFixed(2).replace('.', ',')}</span>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Order Details</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button type="submit" className="btn" style={{ width: '100%' }}>
              SEND ORDER
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;