import { useState } from "react";
import '../App.css'
import Footer from "./Footer";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const allProducts = [
  {
    id: 1,
    name: 'Premium Watch',
    price: 299,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1670177257750-9b47927f68eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaHxlbnwxfHx8fDE3NjQ0NjEwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    name: 'Designer Bag',
    price: 449,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1559563458-527698bf5295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGJhZ3xlbnwxfHx8fDE3NjQ1MTg5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    name: 'Classic Sneakers',
    price: 189,
    category: 'shoes',
    image: 'https://images.unsplash.com/photo-1656944227480-98180d2a5155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc2NDQyNTE4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 4,
    name: 'Sunglasses',
    price: 159,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5nbGFzc2VzfGVufDF8fHx8MTc2NDM5ODAyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 5,
    name: 'Leather Jacket',
    price: 599,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwamFja2V0JTIwZmFzaGlvbnxlbnwxfHx8fDE3NjQ0MzUwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 6,
    name: 'White Sneakers',
    price: 149,
    category: 'shoes',
    image: 'https://images.unsplash.com/photo-1597350584914-55bb62285896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNuZWFrZXJzfGVufDF8fHx8MTc2NDQ3OTM3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 7,
    name: 'Premium Denim',
    price: 179,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1658910453954-6ca847bb7470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW5pbSUyMGplYW5zfGVufDF8fHx8MTc2NDQwNDgxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 8,
    name: 'Leather Backpack',
    price: 329,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1549943872-f7ff0b2b51be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrcGFjayUyMGxlYXRoZXJ8ZW58MXx8fHwxNzY0NDQ2OTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 9,
    name: 'Designer T-Shirt',
    price: 89,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1685883518316-355533810d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0c2hpcnQlMjBmYXNoaW9ufGVufDF8fHx8MTc2NDUyMDU0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 10,
    name: 'Elegant Dress',
    price: 399,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1764265148862-7ee72a4fb367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmVzcyUyMGVsZWdhbnR8ZW58MXx8fHwxNzY0NTIwNTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 11,
    name: 'Fashion Boots',
    price: 279,
    category: 'shoes',
    image: 'https://images.unsplash.com/photo-1761052720710-32349209f6b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib290cyUyMGZhc2hpb258ZW58MXx8fHwxNzY0NDk0MDAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 12,
    name: 'Classic Hat',
    price: 129,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1676451918112-ba36fa1dba39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXQlMjBmYXNoaW9ufGVufDF8fHx8MTc2NDQzMzMxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];


  const categories = ["all", "clothing", "shoes", "accessories"];

  const filteredProducts = allProducts.filter(
    (p) => selectedCategory === "all" || p.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "low") return a.price - b.price;
    if (sortBy === "high") return b.price - a.price;
    return 0;
  });

  return (
    <>
    <section className="shop-section">
      {/* Header */}
      <div className="shop-header">
        <h1>Shop All Products</h1>
        <p>Discover premium fashion curated for you</p>
      </div>

      {/* Filters */}
      <div className="shop-filters">
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.toUpperCase()}
            </option>
          ))}
        </select>

        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="featured">Featured</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      {/* Products */}
      <div className="shop-grid">
        {sortedProducts.map((product) => (
          <div key={product.id} className="shop-card">
            <img src={product.image} alt={product.name} />
            <div className="shop-info">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <Footer/>
    </>
  );
}
