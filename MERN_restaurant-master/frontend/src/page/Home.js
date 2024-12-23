import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CardFeature from "../component/CardFeature";
import HomeCard from "../component/HomeCard";
import { GrPrevious, GrNext } from "react-icons/gr";
import FilterProduct from "../component/FilterProduct";
import AllProduct from "../component/AllProduct";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  const homeProductCartList = productData.slice(20, 25);
  const homeProductCartListVegetables = productData.filter(
    (el) => el.category === "vegetable",
    []
  );
  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
          
          <h2 className="text-4xl md:text-7xl font-bold py-3">
          Experience the Authentic Taste –{" "}
            <span className="text-red-600 text-"> with Warmth and Tradition!"</span>
          </h2>
          <p className="py-3 text-base ">
          Effortless Dining Experience: Our intuitive platform ensures a smooth  ordering. With clear navigation, vibrant menu displays, and secure transactions, we make savoring authentic Maharashtrian cuisine simple and delightful.
          </p>
          
        </div>

        

      </div>

      
      <AllProduct heading={"Your Product"} />
    </div>
  );
};

export default Home;
