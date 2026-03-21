import { useEffect, useState } from "react";
import "../styles/Products.css";

const categories = [
  "Whole Chicken",
  "Double Breast Chicken",
  "Bulk Products",
  "Gas Flushed Products",
  "Flash Fry Products",
  "Free Range Chicken",
];

const categoryProducts = Object.fromEntries(
  categories.map((category) => [
    category,
    Array.from({ length: 10 }, (_, index) => `Produto ${index + 1}`),
  ]),
);

function CategoryList({ items, onSelectCategory }) {
  return (
    <div className="products-modal-grid">
      {items.map((category) => (
        <button
          key={category}
          type="button"
          className="products-category-card"
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

function ProductList({ category, products }) {
  return (
    <div className="products-modal-body">
      <h3>{category}</h3>
      <ul className="products-list">
        {products.map((product) => (
          <li key={product} className="products-list-item">
            {product}
          </li>
        ))}
      </ul>
      <a
        className="button button-large products-order-button"
        href="mailto:orders@shvfoods.com?subject=Order%20Inquiry"
      >
        Order Now
      </a>
    </div>
  );
}

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    if (!isModalOpen) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
    setSelectedCategory(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  const showCategories = () => {
    setSelectedCategory(null);
  };

  return (
    <section id="products" className="section products">
      <div className="container reveal products-intro">
        <p className="eyebrow">Our Products</p>
        <h2>Explore our product catalog</h2>
        <p className="section-intro">
          Open the catalog to browse our main categories and view the available
          products inside each one.
        </p>
        <button
          type="button"
          className="button button-large"
          onClick={openModal}
        >
          Products
        </button>
      </div>

      {isModalOpen && (
        <div
          className="products-modal-overlay"
          onClick={closeModal}
          role="presentation"
        >
          <div
            className="products-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="products-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="products-modal-header">
              {selectedCategory ? (
                <button
                  type="button"
                  className="products-back-button"
                  onClick={showCategories}
                >
                  Voltar
                </button>
              ) : (
                <span />
              )}

              <button
                type="button"
                className="products-close-button"
                onClick={closeModal}
                aria-label="Close products modal"
              >
                X
              </button>
            </div>

            <div className="products-modal-content">
              <p className="eyebrow">Products</p>
              <h2 id="products-modal-title">
                {selectedCategory || "Choose a category"}
              </h2>

              {selectedCategory ? (
                <ProductList
                  category={selectedCategory}
                  products={categoryProducts[selectedCategory]}
                />
              ) : (
                <CategoryList
                  items={categories}
                  onSelectCategory={setSelectedCategory}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
