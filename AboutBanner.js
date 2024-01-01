import './AboutBanner.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Aboutpic1 from '../images/aboutImage1.png';
import Aboutpic2 from '../images/aboutImage2.png';

let AboutBanner = () => {
    return(
        <section className="about-firstfold">
     <div className="container">
        <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12">
            <div className="fold-group-image">
                <img className="img-fluid image-first d-block d-sm-none" src={ Aboutpic1 } alt=""/>
             </div>
                <div className="fold-content  d-none d-md-block d-lg-block d-xl-block">
                    <h1>Impassioned<br />about<br />eCommerce</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                </div>

                <div className="fold-content d-block d-sm-none pt-5">
                    <h1 style={{textAlign:'center' }}>Impassioned<br />about<br />eCommerce</h1>
                    <p style={{textAlign:'center' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                </div>

            </div>
            <div className="col-lg-6 col-md-10">

                <div className="fold-group-image">
                    <img className="img-fluid image-first d-none d-md-block d-lg-block d-xl-block" src= { Aboutpic1 } alt=""/>
                    <img className="img-fluid image-second shadow d-none d-md-block d-lg-block d-xl-block" src= { Aboutpic2} alt=""/>
                </div>
            </div>
         </div>
     </div>
 </section>
 
    );
}

export default AboutBanner;
