const About = () => {
  const aboutItems = [
    {
      title: "Our Mission",
      description: "To provide nutritious and affordable food to all families, promoting health and well-being within our community",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "Our Vision",
      description: "To be the first choice for families seeking quality and value in food products.",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "Our Values",
      description: "Quality, transparency, accessibility, and a strong commitment to customer satisfaction.",
      image: "https://via.placeholder.com/300x200"
    }
  ];

  return (
    <section id="about" className="products">
      <div className="container">
        <div className="section-title">
          <h2>About US</h2>
          <p>Shannon Vale Foods is committed to providing high-quality food at accessible prices for families and communities.</p>
        </div>
        <div className="products-grid">
          {aboutItems.map((item, index) => (
            <div key={index} className="product-card">
              <div className="product-img">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="product-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;