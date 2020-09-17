import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <section id="showcase">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item carousel-image-1 active">
          <div class="container">
            <div class="carousel-caption d-none d-sm-block text-right mb-5">
              <h1 class="display-3">Make Reservation quickly .....</h1>
              <p class="lead">Chilling out on the bed in your hotel room watching television, while wearing your own pajamas, is sometimes the best part of a vacation..</p>
              <Link to="/register" class="btn btn-danger btn-lg">Sign Up Now</Link>
            </div>
          </div>
        </div>

        <div class="carousel-item carousel-image-2">
          <div class="container">
            <div class="carousel-caption d-none d-sm-block mb-5">
  
              <p class="lead">All good hotels tend to lead people to do things they wouldn't necessarily do at home.</p>
          
            </div>
          </div>
        </div>

        <div class="carousel-item carousel-image-1">
          <div class="container">
            <div class="carousel-caption d-none d-sm-block text-right mb-5">
 
              <p class="lead">Of course great hotels have always been social ideas, flawless mirrors to the particular societies they service.   </p>
             
            </div>
          </div>
        </div>
      </div>

      <a href="#myCarousel" data-slide="prev" class="carousel-control-prev">
        <span class="carousel-control-prev-icon"></span>
      </a>

      <a href="#myCarousel" data-slide="next" class="carousel-control-next">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>
  </section>
  );
};

export default Carousel;
