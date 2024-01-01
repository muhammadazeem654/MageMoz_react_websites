import AboutBanner from '../Components/AboutBanner';
import Aboutlogo from '../Components/aboutlogo';
import AboutSecondSec from '../Components/AboutSecondSec';
import Header from '../Components/header';
import AboutVision from '../Components/AboutVision';
import Aboutfourthfold from '../Components/Aboutfourthfold';
import HomeFooter from '../Components/Footer';
let About = () => {
    return(
        <div>
            <Header />
            <AboutBanner />
            <AboutSecondSec />
            <Aboutlogo />
            <AboutVision />
            <Aboutfourthfold />
            <HomeFooter />

        </div>
    );
}

export default About;