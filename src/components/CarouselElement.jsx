import React, { useEffect, useState } from "react";
import { Carousel, Form, FormGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDragons } from "../store/dragonSlice";

function CarouselElement() {
  const dispatch = useDispatch();

  const [dragon, setDragon] = useState("");

  const dragons = useSelector((state) => state.dragons.dragons);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchDragons());
  },[]);

  useEffect(() => {
    let findDragon = dragons.filter((e) => e.id === id);
    setDragon(findDragon[0]);
  }, [dragons, id]);
  const images = dragon && dragon.flickr_images;

  localStorage.setItem("draconItem", JSON.stringify(dragon));

  return (
    <div className="container__grid">
      <div className="сarouselElement__infoContainer">
        <Form>
          <Form.Label>
            <h1>{dragon && dragon.name}</h1>
          </Form.Label>
          <br />
          <Form.Text>
            <article>
              {dragon && dragon.description}
              <a href={dragon && dragon.wikipedia}>SpaceX_Dragon</a>
            </article>
          </Form.Text>
          <br />
          <br />
          <FormGroup>
            <Form.Label>
              <b>Parameters</b>
            </Form.Label>
            <Form.Text>
              <div>
                {" "}
                <b>mass, kg:</b> {dragon && dragon.dry_mass_kg}
              </div>
              <div>
                <b>height, m:</b> {dragon && dragon.height_w_trunk.meters}
              </div>
              <div>
                <b>first flight:</b> {dragon && dragon.first_flight}
              </div>
            </Form.Text>
          </FormGroup>
        </Form>
      </div>

      <div className="carouselElement">
        <div className="active">
          <Carousel fade className="container" interval={2000} variant="dark">
            {images && images.length
              ? images.map((image) => {
                  return (
                    <Carousel.Item
                      key={image}
                      className="carouselElement__container"
                    >
                      <img
                        className="carouselElement__img"
                        src={image}
                        alt="slide"
                      />
                    </Carousel.Item>
                  );
                })
              : ""}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default CarouselElement;
