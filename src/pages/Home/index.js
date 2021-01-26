import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import About from '../../components/About';
import OpeningHours from '../../components/OpeningHours';
import ContactUs from '../../components/ContactUs';

import { Hero } from './styles';

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <About />
      <OpeningHours />
      <ContactUs />
    </>
  );
};

export default Home;
