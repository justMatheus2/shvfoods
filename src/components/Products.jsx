import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const products = [
  {
    title: "Free‑range chicken breast",
    price: "$12.99 / kg",
    description:
      "Lean, tender fillets sourced from trusted farms with full traceability.",
    image:
      "https://images.unsplash.com/photo-1543353071-087092ec3939?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Heritage roast chicken",
    price: "$18.50 each",
    description:
      "Slow-roasted flavor profile with consistent quality for premium menus.",
    image:
      "https://images.unsplash.com/photo-1514516870922-21a30b668d4a?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Butcher-cut portions",
    price: "$10.75 / kg",
    description:
      "Custom portioning with strict cold-chain control for food service.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Premium poultry stock",
    price: "$7.25 / L",
    description:
      "Rich, clarified stock for sauces and soups, prepared in small batches.",
    image:
      "https://images.unsplash.com/photo-1512058564366-c9e0d2d0f434?auto=format&fit=crop&w=900&q=80",
  },
];

const Products = () => (
  <section id="products" className="section products">
    <div className="container reveal">
      <p className="eyebrow">Our Products</p>
      <h2>Premium ingredients for culinary excellence</h2>
      <p className="section-intro">
        Discover a curated selection of proteins and preparations designed for
        high-volume kitchens, retail partners, and food service operators.
      </p>

      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
        spaceBetween={18}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          900: { slidesPerView: 2 },
          1180: { slidesPerView: 3 },
        }}
      >
        {products.map((item) => (
          <SwiperSlide key={item.title}>
            <article className="product-card">
              <div
                className="product-image"
                style={{ backgroundImage: `url(${item.image})` }}
                aria-hidden="true"
              />
              <div className="product-overlay">
                <div className="product-meta">
                  <h3>{item.title}</h3>
                  <p className="product-price">{item.price}</p>
                </div>
                <p>{item.description}</p>
                <a className="button button-small" href="#contact-form">
                  More info
                </a>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default Products;
