function Categories() {
  const categories = [
    {
      name: "Spark Plug",
      image: "sparkplug.png",
    },
    {
      name: "Disc Brakes",
      image: "/discbrake.png",
    },
    {
      name: "Winglets",
      image: "/winglets.png",
    },
    {
      name: "Mirrors",
      image: "mirror.png",
    },
    {
      name: "Brake Pads",
      image: "/brakepads.png",
    },
    {
      name: "Filters",
      image: "/filters.png",
    },
  ];

  return (
    <>
      <h2 className="section-title">
        Top Categories
      </h2>

      <div className="categories">

        {categories.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>

            <button className="showbutton">Show More</button>
          </div>
        ))}

      </div>
    </>
  );
}

export default Categories;