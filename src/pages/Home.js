import React from "react";
import CategorySection from "../components/CategorySection";
import MainBanner from "../components/MainBanner";
import DealsSection from "../components/DealsSection";
import RecommendedItems from "../components/RecommendedItems";
import SupplierInquiry from "../components/SupplierInquiry";
import SuppliersByRegion from "../components/SuppliersByRegion";
import NewsletterSubscription from "../components/NewsletterSubscription";
import HeroBanner from "../components/HeroBanner";
import ProductCategories from "../components/ProductCategories";

import "../styles/global.css";

import softChairs from "../assets/images/home-soft-chairs.png";
import sofaChair from "../assets/images/sofa-chair.png";
import kitchenDishes from "../assets/images/kitchen-dishes.png";
import smartwatch from "../assets/images/deal-smartwatch.png";
import kitchenMixer from "../assets/images/kitchen-mixer.png";
import blender from "../assets/images/home-blender.png";
import homeAppliance from "../assets/images/home-appliance.png";
import coffeeMaker from "../assets/images/coffee-maker.png";

import camera from "../assets/images/deal-camera.png";
import headphones from "../assets/images/electronics-headphones.png";
import gamingSet from "../assets/images/gaming-set.png";
import laptop from "../assets/images/electronics-laptop.png";
import smartphone from "../assets/images/smartphone.png";
import electricKettle from "../assets/images/kettle.png";

const homeOutdoorProducts = [
  { name: "Soft chairs", price: 19, image: softChairs },
  { name: "Sofa & chair", price: 19, image: sofaChair },
  { name: "Kitchen dishes", price: 19, image: kitchenDishes },
  { name: "Smart watches", price: 19, image: smartwatch },
  { name: "Kitchen mixer", price: 100, image: kitchenMixer },
  { name: "Blenders", price: 39, image: blender },
  { name: "Home appliance", price: 19, image: homeAppliance },
  { name: "Coffee maker", price: 10, image: coffeeMaker },
];

const electronicsProducts = [
  { name: "Smart watches", price: 89, image: smartwatch },
  { name: "Cameras", price: 89, image: camera },
  { name: "Headphones", price: 10, image: headphones },
  { name: "Gaming set", price: 35, image: gamingSet },
  { name: "Laptops & PC", price: 340, image: laptop },
  { name: "Smartphones", price: 19, image: smartphone },
  { name: "Electric kettle", price: 240, image: electricKettle },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <MainBanner />
      <HeroBanner />
      <ProductCategories />

      {/* Deals Section */}
      <DealsSection />

      {/* Home & Outdoor Products */}
      <CategorySection title="Home and Outdoor" products={homeOutdoorProducts} />

      {/* Consumer Electronics */}
      <CategorySection title="Consumer Electronics and Gadgets" products={electronicsProducts} />

      {/* Recommended Items */}
      <RecommendedItems />

      {/* Supplier Inquiry Form */}
      <SupplierInquiry />

      {/* Suppliers by Region */}
      <SuppliersByRegion />

      {/* Newsletter Subscription */}
      <NewsletterSubscription />
    </div>
  );
};

export default Home;
