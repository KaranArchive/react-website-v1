import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ActionAreaCard from './ActionAreaCard';
import './Cars.css';

const Cars = () => {
  return (
    <div className="carousel-wrapper"> {/* Wrapper div */}
    <Carousel>
      <div>
      <ActionAreaCard
        image="images/img-2.jpg"
        title="Quality Assurance"
        description="The state of art nature of our production process is certified with ISO 9001:2015 Quality Management System by British Standards Institution."
      />
      </div>
      <div>
      <ActionAreaCard
        image="images/img-9.jpg"
        title="Our Team"
        description="Our Team has total 7+ years Industrial Automation Experience in Projects, Customer Support and Marketing. Other members also have Versatile experience in Dairy, Machine Tool and Process Controls"
      />
      </div>
      <div>
      <ActionAreaCard
        image="images/img-8.jpg"
        title="Mission & Vision"
        description="Our Mission, Vision and Strategy is to provide Need based highly Reliable, Automation Solutions. We wish to build Long term Business relationship based on Trust and Transparency."
      />
      </div>
      <div>
      <ActionAreaCard
        image="images/img-4.jpg"
        title="Mission & Vision"
        description="Our Mission, Vision and Strategy is to provide Need based highly Reliable, Automation Solutions. We wish to build Long term Business relationship based on Trust and Transparency."
      />
      </div>
      <div>
      <ActionAreaCard
        image="images/img-8.jpg"
        title="Mission & Vision"
        description="Our Mission, Vision and Strategy is to provide Need based highly Reliable, Automation Solutions. We wish to build Long term Business relationship based on Trust and Transparency."
      />
      </div>
    </Carousel>
    </div>
  );
};

export default Cars;