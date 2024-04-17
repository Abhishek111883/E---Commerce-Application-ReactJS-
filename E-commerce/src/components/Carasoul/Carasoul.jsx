// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Carasoul.css";
import pro1 from "../assets/carasoul1.jpg";
import pro2 from "../assets/carasoul2.jpg";
import pro3 from "../assets/carasoul3.jpg";

const Carasoul = () => {
  return (
    <div>
      <section className="container">
        <div className="slider-wrapper">
          <div className="slider">
            <img id="slide-1" src={pro2} alt="" />
            <img id="slide-2" src={pro1} />
            <img id="slide-3" src={pro3} />
          </div>
          <div className="slider-nav">
            <a href="#slide-1"></a>
            <a href="#slide-2"></a>
            <a href="#slide-3"></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carasoul;
