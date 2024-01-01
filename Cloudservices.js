import './Cloudservices.css';
import cloudpic1 from '../images/implement-icon.png';
import cloudpic2 from '../images/manage-icon.png';
import cloudpic3 from '../images/cloud migration-icon.png';
import cloudpic4 from '../images/security-icon.png';
import circlemainpic from '../images/cloudservice-icon.png';
import circlepic1 from '../images/migrate-icon.png';
import circlepic2 from '../images/improve-icon.png';
import circlepic3 from '../images/optimize-icon.png';
import circlepic4 from '../images/manage&maintain_icon.png';
import circlepic5 from '../images/manage&maintain_icon.png';

let CloudService = () =>{
    return(
        <div>

<section className="cloud_fold">
      <div className="container">
        <div className='row'>
          <div className="col-md-12 col-lg-6">
            <div className="Cloud-content">
              <h1>Efficient & scalable cloud solutions for your business</h1>
              <div className='pt-4'>
              <p>Magemoz Cloud Services help you achieve improved scalability, efficiency, and reliability across all of your environments. Take advantage of our expertise and experience to amplify your business advancement and thrust your company ahead.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className='pt-5'>
        <div className='col-md-12'>
<h1 style={{textAlign: "center", textTransform: "initial", fontFamily: 'Lexend', fontSize: "50px", fontWeight: "900"}}>Magemoz cloud services</h1>
</div>
</div>

<div className="container pt-5">
      <div className="center-circle">
        <div className='col-md-12 text-center pt-5'>
        <img src={circlemainpic}></img>
        </div>
      </div>
      
    </div>

<div className="container">
<div className="row">
<div className="col-md-4 col-lg-4">
<div className="service-box">
<div className="service-box-icon"><img src={cloudpic1} alt="" /></div>
<div className="col_full clearfix">
<h3 style={{textAlign: "center", textTransform: "initial", fontFamily: 'Lexend', fontSize: "25px", fontWeight: "900"}}>Cloud development &amp; implementation</h3>
<p style={{textAlign: "center", textTransform: "initial", fontFamily: 'Lexend', fontSize: "14px", fontWeight: "400"}}><br />Drive scalability and efficiency to your business with fast, simple, and secure i95Dev’s cloud migration services.</p>
</div>
</div>
</div>
<div className="col-md-4 col-lg-4">
<div className="border-dashed"></div>
</div>
<div className="col-md-4 col-lg-4">
<div className="service-box">
<div className="service-box-icon"><img src={cloudpic2} alt="" /></div>
<div className="col_full clearfix">
<h3 style={{textAlign: "center", textTransform: "initial", fontFamily: 'Lexend', fontSize: "25px", fontWeight: "900"}}>Manage &amp; Maintain</h3>
<p style={{textAlign: "center", textTransform: "initial", fontFamily: 'Lexend', fontSize: "14px", fontWeight: "400"}}><br />Secure and scale your applications and infrastructure in the Cloud.</p>
<p style={{fontSize: "14px", lineHeight: "22px"}}></p>
</div>
</div>
</div>
<div className="col-md-4 col-lg-4">
<div className="service-box">
<div className="service-box-icon"><img src={cloudpic3} alt="" /></div>
<div className="col_full clearfix">
<h3 style={{textAlign: "center", textTransform: "initial", fontFamily: 'Lexend', fontSize: "25px", fontWeight: "900"}}>Cloud migration</h3>
<p style={{textAlign: "center", textTransform: "initial", fontFamily: 'Lexend', fontSize: "14px", fontWeight: "400"}}><br />Effectively monitor, control, and secure your infrastructure and processes with i95Dev services.</p>
</div>
</div>
</div>
<div className="col-md-4 col-lg-4">
<div className="border-dashed"></div>
</div>
<div className="col-md-4 col-lg-4">
<div className="service-box">
<div className="service-box-icon"><img src={cloudpic4} alt="" /></div>
<div className="col_full clearfix">
<h3 style={{textAlign: "center", textTransform: "initial", fontFamily: 'Lexend', fontSize: "25px", fontWeight: "900"}}>Security &amp; Governance</h3>
<p style={{textAlign: "center", textTransform: "initial", fontFamily: 'Lexend', fontSize: "14px", fontWeight: "400"}}><br />Secure and scale your applications and infrastructure in the Cloud.</p>
</div>
</div>
</div>
</div>
</div>


        </div>
    )
}

export default CloudService;