import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-bootstrap/Carousel";

function CarouselImages() {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons.dragons);

  return (
    <div className="carouselImages__container">
      <Carousel className="carouselImages__box">
        {dragons.map((dragon) => {
          return (
            <Carousel.Item className="">
              <img
                className="carouselImages__img"
                src={dragon.flickr_images}
                alt="img_spaseX"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselImages;
