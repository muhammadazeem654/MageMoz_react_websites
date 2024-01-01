import Header from "../Components/header";
import Banner from "../Components/Homebanner";
import Images from "../Components/Sliderdata";
import WorkProcess from "../Components/WorkProcess";
import BrandSlider from "../Components/WebSlider";
// import Industries from "../Components/Industries";
import CoveredIndustry from "../Components/CoveredIndustry";
import PartnerUs from "../Components/PartnerUs";
import HomeFooter from "../Components/Footer";

let Home = () => {
    return(
     <div>
        <Header/>
        <Banner />
        <WorkProcess />
        <BrandSlider Images={Images} />
        {/* <Industries /> */}
        <CoveredIndustry />
        <PartnerUs />
        <HomeFooter />
     </div>
    );
}

export default Home;