import AboutUs from '../features/homepage/AboutUs';
import Facilities from '../features/homepage/Facilities';
import Footer from '../features/homepage/Footer';
import HandPickedRooms from '../features/homepage/HandPickedRooms';
import Header from '../features/homepage/Header';
import Intro from '../features/homepage/Intro';
import Menu from '../features/homepage/Menu';

function HomePage() {
  return (
    <div>
      <Header />
      <AboutUs />
      <HandPickedRooms />
      <Menu />
      <Intro />
      <Facilities />
      <Footer />
    </div>
  );
}

export default HomePage;
