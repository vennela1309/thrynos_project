import React, { useState } from 'react';
import '../App.css'
import { Award, Truck, RotateCcw } from 'lucide-react';
import { ChevronLeft, ChevronRight, Star , Mail} from "lucide-react";
import Footer from './Footer';

const Home = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [email,setEmail] = useState("")
   const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };
  const nextReview = () => {
    setCurrentIndex((prev) =>
      (prev + 1) % reviews.length
    )
  }
  const previosReview = () => {
    setCurrentIndex((prev) =>
      (prev - 1 + reviews.length) % reviews.length
    )
  }
  

  const collections = [
    {
      id: 1,
      title: 'Men',
      image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwZmFzaGlvbnxlbnwxfHx8fDE3NjQ1MDA5ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 2,
      title: 'Women',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbnMlMjBmYXNoaW9ufGVufDF8fHx8MTc2NDUwMDk4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 3,
      title: 'Accessories',
      image: 'https://images.unsplash.com/photo-1569388330292-79cc1ec67270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXN8ZW58MXx8fHwxNzY0NTE3NDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 4,
      title: 'Best Sellers',
      image: 'https://images.unsplash.com/photo-1656944227480-98180d2a5155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc2NDQyNTE4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];
  const products = [
    {
      id: 1,
      name: 'Premium Watch',
      price: '$299',
      image: 'https://images.unsplash.com/photo-1670177257750-9b47927f68eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaHxlbnwxfHx8fDE3NjQ0NjEwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 2,
      name: 'Designer Bag',
      price: '$449',
      image: 'https://images.unsplash.com/photo-1559563458-527698bf5295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGJhZ3xlbnwxfHx8fDE3NjQ1MTg5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 3,
      name: 'Classic Sneakers',
      price: '$189',
      image: 'https://images.unsplash.com/photo-1656944227480-98180d2a5155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc2NDQyNTE4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 4,
      name: 'Sunglasses',
      price: '$159',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5nbGFzc2VzfGVufDF8fHx8MTc2NDM5ODAyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 5,
      name: 'Leather Jacket',
      price: '$599',
      image: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwamFja2V0JTIwZmFzaGlvbnxlbnwxfHx8fDE3NjQ0MzUwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 6,
      name: 'White Sneakers',
      price: '$149',
      image: 'https://images.unsplash.com/photo-1597350584914-55bb62285896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNuZWFrZXJzfGVufDF8fHx8MTc2NDQ3OTM3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 7,
      name: 'Premium Denim',
      price: '$179',
      image: 'https://images.unsplash.com/photo-1658910453954-6ca847bb7470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW5pbSUyMGplYW5zfGVufDF8fHx8MTc2NDQwNDgxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 8,
      name: 'Leather Backpack',
      price: '$329',
      image: 'https://images.unsplash.com/photo-1549943872-f7ff0b2b51be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrcGFjayUyMGxlYXRoZXJ8ZW58MXx8fHwxNzY0NDQ2OTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];
  const trending = [
    {
      id: 1,
      name: 'Designer T-Shirt',
      price: '$89',
      badge: 'Trending',
      image: 'https://images.unsplash.com/photo-1685883518316-355533810d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0c2hpcnQlMjBmYXNoaW9ufGVufDF8fHx8MTc2NDUyMDU0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 2,
      name: 'Elegant Dress',
      price: '$399',
      badge: 'Hot',
      image: 'https://images.unsplash.com/photo-1764265148862-7ee72a4fb367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmVzcyUyMGVsZWdhbnR8ZW58MXx8fHwxNzY0NTIwNTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 3,
      name: 'Fashion Boots',
      price: '$279',
      badge: 'New',
      image: 'https://images.unsplash.com/photo-1761052720710-32349209f6b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib290cyUyMGZhc2hpb258ZW58MXx8fHwxNzY0NDk0MDAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 4,
      name: 'Classic Hat',
      price: '$129',
      badge: 'Popular',
      image: 'https://images.unsplash.com/photo-1676451918112-ba36fa1dba39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXQlMjBmYXNoaW9ufGVufDF8fHx8MTc2NDQzMzMxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];
  const features = [
    {
      id: 1,
      icon: Award,
      title: 'Premium Quality',
      description: 'Handpicked products from the finest materials',
    },
    {
      id: 2,
      icon: Truck,
      title: 'Fast Shipping',
      description: 'Free delivery on orders over $100',
    },
    {
      id: 3,
      icon: RotateCcw,
      title: 'Easy Returns',
      description: '30-day hassle-free return policy',
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      text:
        "Absolutely love the quality! The attention to detail in every piece is remarkable. Will definitely shop here again.",
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      text:
        "Fast shipping and excellent customer service. The products exceeded my expectations in every way.",
    },
    {
      id: 3,
      name: "Emma Williams",
      rating: 5,
      text:
        "Best online shopping experience I've had. The premium quality is worth every penny. Highly recommend!",
    },
  ];



  return (
    <>
      <div className='homeimage'>
        <div className='homeContant'>
          <span className='para1'> NEW COLLECTION 2025</span>
          <h1 className='para2'> Elevate Your Style</h1>
          <p className='para3'>Discover the latest trends in premium fashion.
            Timeless pieces for the modern wardrobe.</p>
          <div className='homebuttons'> <button className='button1'>Shop Now</button>
            <button className='button2'>Learn More</button></div>

        </div>
        <div></div>
      </div>
      <div className='shopSection'>
        <h1 className='shopheading'>Shop by Collection</h1>

        <div className='shopcards'>
          {collections.map((item, index) => (
            <div key={item.id} className='shopcard'>
              <img src={item.image} alt={item.title} />

              <h1 className='nav-link'>{item.title}</h1>

            </div>
          ))}
        </div>
        <div className='salesSecontion'>
          <div className='winterimg'> <p style={{ color: 'white', fontSize: '16px' }}>WINTER SALE</p>
            <span className='para2'>Up to 50% Off</span>
            <button className='button1'>Shop Sale</button>
          </div>
          <div className='newarraivalimg'>
            <p style={{ color: 'white', fontSize: '16px' }}>NEW ARRIVAL</p>
            <span className='para2'>Spring 2025</span>
            <button className='button1'>Discover Now</button>
          </div>
        </div>
        <div className='featured-section'>
          <h1 className='featured-title'>Featured Products</h1>
          <div className='featured-grid'>
            {products.map((item, index) => (
              <div key={item.id} className='product-card'>
                <img src={item.image} alt={item.name} className='product-image'/>
                <div className='product-info'>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </div>

              </div>
            ))}
          </div>

        </div>
        <div className='toptrends'>
          <h1>Trending Now</h1>
          <div className='topcard'>
            {trending.map((item, id) => (
              <div key={item.id} className='cards'>
                <img src={item.image} />
                <div className='detailscard'>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </div>

              </div>
            ))}
          </div>
        </div>


        <div className='whyThrynos'>
          <h2 style={{ paddingTop: '60px' }}>Why Thrynos?</h2>
          <div className='whyThryCards'>
            {features.map((item, id) => (
              <div className='whycards' key={item.id}>
                <div className='iconCard'>
                  <item.icon size={52} />
                </div>

                <h2 className='whytitle'>{item.title}</h2>
                <p style={{ color: '#515a6a' }}>{item.description}</p>
              </div>

            ))}

          </div>

        </div>
        <div className='reviewSection'>
          <div className='reviewContainer'>
            <h2 className='review-title'>What Our Customers Say</h2>

            <div className='review-card'>
              <div className='stars'>
                {Array.from({ length: reviews[currentIndex].rating }).map((_, i) => (
                  <Star key={i} className="star" />
                ))}
              </div>

              <p className='review-text'>
                {reviews[currentIndex].text}
              </p>

              <p className='review-name'>
                {reviews[currentIndex].name}
              </p>

              <button
                className='nav-button left'
                onClick={previosReview}
                aria-label="Previous review"
              >
                <ChevronLeft />
              </button>

              <button
                className='nav-button right'
                onClick={nextReview}
                aria-label="Next review"
              >
                <ChevronRight />
              </button>
            </div>

            <div className='dots'>
              {reviews.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentIndex ? "active" : ""}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
       <section className="newsletter">
      <div className="newsletter-blur blur-one"></div>
      <div className="newsletter-blur blur-two"></div>

      <div className="newsletter-container">
        <Mail className="newsletter-icon" />

        <h2 className="newsletter-title">Join Our Newsletter</h2>

        <p className="newsletter-text">
          Subscribe to get special offers, free giveaways, and exclusive deals
          delivered to your inbox.
        </p>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
                <Footer/>
      </div>



    </>
  )
}

export default Home
