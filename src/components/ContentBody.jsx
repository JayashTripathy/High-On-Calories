import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import "swiper/css/bundle";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../components/ContentBody.css";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export const ContentBody = ({ items, setItems }) => {
  const bodyItems = useRef(null);
  if (items.length != 0) {
    console.log(items[0].recipe.label);
  }
  return (
    <>
      <div className="recipeContent" ref={bodyItems}>
        <Swiper
          loop={true}
          speed={100}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          initialSlide="6"
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 4,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          mous
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <div className="itemsContainer">
            {items.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="recipeItem">
                    <div className="image-container">
                      <img
                        src={item["recipe"]["image"]}
                        alt=""
                        className="recipeImg"
                      />
                    </div>

                    <div className="recipeTitle">
                      {item["recipe"]["label"].substr(0, 20)}
                      
                    </div>
                    <h5 className="calorieCount">1342 Calories</h5>
                    {/* <div className="calories">320kacl</div> */}
                    <div className="nutrition-content">
                      <div className="carbs">
                        Carbs -<span className="carb-values"> 120G</span>
                      </div>
                      <div className="protien">
                        Proteins -<span className="protien-values"> 12G</span>
                      </div>
                      <div className="fats">
                        Fats -<span className="fats-values"> 24G</span>
                      </div>
                    </div>
                    <div className="key-ingredients">
                      <h5>Key-ingredients</h5>
                      
                      <div className="key-ingredients-list">
                        <div className="key-ingredient">tomato </div>
                        <div className="key-ingredient">potato </div>
                        <div className="key-ingredient">cauliflower </div>
                        <div className="key-ingredient">beans </div>
                        <div className="key-ingredient">carrot </div>
                        <div className="key-ingredient" id="more-elements">+6 more</div>
                        
                      </div>
                    </div>
                    <button className="recipe-button">Full Recipe</button>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </>
  );
};
 