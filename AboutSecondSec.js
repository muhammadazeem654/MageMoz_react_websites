import './AboutBanner.css';
import Vision1 from '../images/cohesion-icon.png';
import Vision2 from '../images/focus_iocn.png';
import Vision3 from '../images/excellence icon.png';
import Vision4 from '../images/team work-icon.png';
let AboutSecondSec = () => {
    return(
        <section className="about-secondfold">
     <div className="container">
         <div className="row justify-content-center align-items-center text-center inner-title-heading">
            <div className="col-md-10 col-lg-6 mb-4">
                <h2>Our Values & Commetment <br />to Excellence</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
             </div>
         </div>
         <div className="row">
             <div className="col-lg-3 col-md-6">
                <div className="icon-box">
                 <img style={{width:'100px', height:'100px'}} src={Vision1}></img>
                    <h5 className='mb-5'>Cahesion</h5>
                </div>
             </div>
             <div className="col-lg-3 col-md-6">
                 <div className="icon-box">
                 <img style={{width:'100px', height:'100px'}} src={Vision2}></img>
                    <h5 className='mb-4'>Focus</h5>
                 </div>
             </div>
             
             <div className="col-lg-3 col-md-6">
                 <div className="icon-box">
                 <img style={{width:'100px', height:'100px'}} src={Vision3}></img>
                     <h5 className='mb-5'>Excellence</h5>
                 
                 </div>
             </div>
             
             <div className="col-lg-3 col-md-6">
                 <div className="icon-box">
                 <img style={{width:'100px', height:'100px'}} src={Vision4}></img>
                     <h5>Team Work</h5>
                 </div>
             </div>

         </div>
     </div>
 </section>
    );
}

export default AboutSecondSec;