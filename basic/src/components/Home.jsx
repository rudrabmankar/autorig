import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Products from "../components/Products";

export function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section id="search" className="search-section">

        <h2>Search Products</h2>

        <input className="searchbar"
          type="text"
          placeholder="Search Motorcycle Parts..."
        />

      </section>

      <Categories />

      <Products />
    </>
  );
}