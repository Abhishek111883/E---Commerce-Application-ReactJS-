import Carasoul from "../components/Carasoul/Carasoul";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Newcollections from "../components/newcollections/Newcollections";
import Offers from "../components/offers/Offers";
import Popular from "../components/popular/Popular";
import Subscribe from "../components/subscribebox/Subscribe";

const Home = () => {
  return (
    <div>
      <Carasoul />
      <Hero />
      <Popular />
      <Offers />
      <Newcollections />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
