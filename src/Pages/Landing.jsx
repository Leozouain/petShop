import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Mobile from "../Components/Mobile";
import Service from "../Components/Service";
import SquishyCard from "../Components/SquishyCard";
import Testimonials from "../Components/Testimonials";
import Work from "../Components/Work";

const Landing = () => {
  return (
    <div
      className="  w-screen  flex justify-center overflow-x-hidden
    "
    >
      <div className="bg-white min-w-[90%] px-5">
        <div className="h-[10vh] bg-green-700 text-white">MENU</div>
        <Hero />
        <Service />
        <Mobile />
        <Work />
        <Testimonials />
        <SquishyCard />
        <Footer />
      </div>
    </div>
  );
};
export default Landing;
