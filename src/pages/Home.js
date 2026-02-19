import { useState } from "react";
import foodData from "../data/foodData";
import FoodCard from "../components/FoodCard";

const Home = ({ addToCart }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  let filteredData = foodData.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  if (category !== "All") {
    filteredData = filteredData.filter(item => item.category === category);
  }

  if (sort === "low") {
    filteredData.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredData.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="container">
      {/* Centered Controls */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
          <option value="Dessert">Dessert</option>
          <option value="Drinks">Drinks</option>
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div className="grid">
        {filteredData.map(item => (
          <FoodCard key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
