import Slider from "react-slick";
import { sliderProps } from "../sliderProps";
const Partners = () => {
  return (
    <section className="partners-section">
      <div className="container">
        {/*=== Partners Slider ===*/}
        <Slider
          {...sliderProps.partnerSliderOne}
          className="partner-slider-one pt-80 pb-70 border-top-1 wow fadeInDown"
        >
          <div className="single-partner-item">
            <div className="partner-img">
              <a href="https://fcat.org.uk/" target="_blank">
                <img
                  src="assets/images/partners/FCAT_blackpool.png"
                  alt="Partner Image"
                />
              </a>
            </div>
          </div>
          <div className="single-partner-item">
            <div className="partner-img">
              <a href="https://www.blackpoolpiers.co.uk/" target="_blank">
                <img
                  src="assets/images/partners/north_pier_blackpool.png"
                  alt="Logo of North Pier, Blackpool"
                />
              </a>
            </div>
          </div>
          <div className="single-partner-item">
            <div className="partner-img">
              <a
                href="https://www.inclusion-group.org.uk/inclusion-housing/"
                target="_blank"
              >
                <img
                  src="assets/images/partners/inclusion_housing.png"
                  alt="Partner Image"
                />
              </a>
            </div>
          </div>
          <div className="single-partner-item">
            <div className="partner-img">
              <a href="https://michildnurseries.co.uk/" target="_blank">
                <img
                  src="assets/images/partners/Michild_nursery.png"
                  alt="Michild nurseries Blackpool"
                />
              </a>
            </div>
          </div>
          <div className="single-partner-item">
            <div className="partner-img">
              <a href="https://www.tigerestates.co.uk/" target="_blank">
                <img
                  src="assets/images/partners/Tiger_estates.png"
                  alt="Tyger Estates Blackpool"
                />
              </a>
            </div>
          </div>
          <div className="single-partner-item">
            <div className="partner-img">
              <a href="https://coralisland.co.uk/" target="_blank">
                <img
                  src="assets/images/partners/coral_island.jpg"
                  alt="Partner Image"
                />
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};
export default Partners;
