import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CardsSlider.css'; 
const CardsSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="cards-slider" style={{width: '100%', textAlign: 'center'}}>
      <h1>Featured Cards</h1>
      <Slider {...sliderSettings}>
        <div className="cards-slider-item">
          <h2>Card 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <img src="images/ROPWWFI.jpg" alt="Card 1" />
        </div>
        <div className="cards-slider-item">
          <h2>Card 2</h2>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <img src="images/IOT1.jpg" alt="Card 2" />
        </div>
        <div className="cards-slider-item">
          <h2>Card 3</h2>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <img src="images/ROPWWFI.jpg" alt="Card 3" />
        </div>
      </Slider>
    </div>
  );
};
export default CardsSlider;

// import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// // import ExampleCarouselImage from './ExampleCarouselImage';
// import ActionAreaCard from './ActionAreaCard';
// function CardsSlider() {
//   return (
//     <Carousel>
//       {/* <Carousel.Item>
// <ActionAreaCard/>
//       </Carousel.Item> */}
//       <Carousel.Item>
//       <ActionAreaCard/>
//         {/* <ExampleCarouselImage text="Second slide" /> */}
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <ActionAreaCard/>
//         {/* <ExampleCarouselImage text="Third slide" /> */}
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default CardsSlider;
// import reactRouterDom from 'react-router-dom';
// import React, { useState } from 'react';
// import './CardsSlider.css'; // Make sure to have your CSS file imported

// const CardsSlider = () => {
//     const [active, setActive] = useState(3); // Initial active slide index

//     const items = document.querySelectorAll('.slider .item');

//     const loadShow = () => {
//         let stt = 0;
//         items[active].style.transform = `none`;
//         items[active].style.zIndex = 1;
//         items[active].style.filter = 'none';
//         items[active].style.opacity = 1;
//         for (let i = active + 1; i < items.length; i++) {
//             stt++;
//             items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
//             items[i].style.zIndex = -stt;
//             items[i].style.filter = 'blur(5px)';
//             items[i].style.opacity = stt > 2 ? 0 : 0.6;
//         }
//         stt = 0;
//         for (let i = active - 1; i >= 0; i--) {
//             stt++;
//             items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
//             items[i].style.zIndex = -stt;
//             items[i].style.filter = 'blur(5px)';
//             items[i].style.opacity = stt > 2 ? 0 : 0.6;
//         }
//     };

//     const handleNext = () => {
//         setActive(prevActive => (prevActive + 1 < items.length ? prevActive + 1 : prevActive));
//         loadShow();
//     };

//     const handlePrev = () => {
//         setActive(prevActive => (prevActive - 1 >= 0 ? prevActive - 1 : prevActive));
//         loadShow();
//     };

//     // Run loadShow initially (similar to componentDidMount in class components)
//     React.useEffect(() => {
//         loadShow();
//     }, []); // Empty dependency array means this effect runs once after the component mounts

//     return (
//         <div className="slider">
//             <div className="item">
//                 <h1>Slide 1</h1>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni magnam unde ipsam repudiandae explicabo expedita labore, sequi minus neque beatae voluptatum, quasi accusamus quia quis voluptas laborum ad! Ab totam doloribus, excepturi possimus rem vel quia fugit molestiae officiis!
//             </div>
//             {/* Add more slide items as needed */}
//             <button id="prev" onClick={handlePrev}>Previous</button>
//             <button id="next" onClick={handleNext}>Next</button>
//         </div>
//     );
// };

// export default CardsSlider;