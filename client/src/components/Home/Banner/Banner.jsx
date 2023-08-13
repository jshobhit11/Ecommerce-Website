import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Convallis interdum purus adipiscing dis parturient posuere as a quam
            eleifend montes parturient poseure curae tempor
          </p>
          <div className="ctas">
            {/* cta= call to action */}
            <div className="banner-cta">Read More </div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt=""></img>
      </div>
    </div>
  );
};

export default Banner;
