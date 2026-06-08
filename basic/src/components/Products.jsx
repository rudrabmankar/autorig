function Products() {
  const products = [
    {
      name: "NGK Spark Plug",
      price: "₹299",
    },
    {
      name: "Disc Brake Set",
      price: "₹1499",
    },
    {
      name: "Sport Winglets",
      price: "₹999",
    },
    {
      name: "Bike Mirrors",
      price: "₹699",
    },
    {
      name: "Brake Pads",
      price: "₹499",
    },
    {
      name: "Air Filter",
      price: "₹399",
    },
  ];

  return (
    <section id="products">

      <h2 className="section-title">
        Products
      </h2>

      <div className="products">

        {products.map((product, index) => (
          <div className="product-card" key={index}>

            <h3>{product.name}</h3>

            <p>{product.price}</p>

            <button>Buy Now</button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Products;