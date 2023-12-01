import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import './CategorySection.css';

const CategorySection = () => {

  const owlOptions = {
    loop: true,
    margin: 50,
    nav: true,
    items: 2,
    autoplay:false,
    autoplayTimeout:3000,
  };

  return (
    <div className="categories-section">
      <div className="container">
        <div className="row">
          <p className="heading">Discover Diverse Sentiments Across Categories</p>
        </div>
        <OwlCarousel className="owl-theme" {...owlOptions}>
          {/* Card 1 */}
          <div className="item">
            <div className="card card-section-1 mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="images/image-entertainment.png" className="mx-auto d-block img-fluid" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Entertainment</h5>
                    <p className="card-text">
                      Analyze sentiment in YouTube videos, songs, and jokes. Discover the emotional impact of your favorite entertainment content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="item">
            <div className="card card-section-2 mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="images/image-networking.png" className="d-block img-fluid" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Networking Updates</h5>
                    <p className="card-text">
                      Explore sentiment in news, LinkedIn updates, and company-related content. Stay informed about the emotional context of current affairs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

                      {/* Card 3 */}
                      <div className="row">
              <div className="card card-section-1 mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="/images/image-hospital.png" className="mx-auto d-block img-fluid" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Wellness and Hospitality</h5>
                      <p className="card-text">
                      Understand sentiment in hotel reviews and mental health-related content. Gain insights into the emotional aspects of wellness and hospitality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* Card 4 */}
            <div className="row">
              <div className="card card-section-1 mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="/images/image-ecommerce.png" className="mx-auto d-block img-fluid" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">E-commerce and Weather</h5>
                      <p className="card-text">
                      Explore sentiments in Amazon reviews and weather updates for insightful e-commerce and weather-related emotional analysis.   
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              /</div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default CategorySection;
