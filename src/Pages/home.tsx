

import Header from "../components/header";
import Hero from "../components/hero";
import HowItWorks from "../components/howitworks";
import DebtType from "../components/debttype";
import Testimonials from "../components/testimonials";
import Footer from "../components/footer";
import UTMTracker from "../components/utmtracker";

const Home = () => {
  return (
    <>
      <UTMTracker />

      <Header />

      <Hero />


      <HowItWorks />

      <DebtType />

      <Testimonials />

      <Footer />
    </>
  );
};

export default Home;