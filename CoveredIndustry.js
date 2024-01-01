import './CoveredIndustry.css';

import Industrypic1 from '../images/fashion-apparel.png';
import Industrypic2 from '../images/gemsjewllery.png';
import Industrypic3 from '../images/homedecor.png';
import Industrypic4 from '../images/healthbeauty.png';
import Industrypic5 from '../images/automativetechnology.png';
import Industrypic6 from '../images/consumergoods.png';

let CoveredIndustry = () => {
    return(
      <div>  
        <section className="industries">
        <div className="container">
            <div className="row justify-content-center align-items-center text-center page-title-heading">
                <div className="col-md-6">
                    <h2>Covered industries</h2>
                    </div>
                </div>
            </div>
            <div className="row text-center">
            
<div className="d-none d-md-block d-lg-block d-xl-block">
                
    <ul className="industrie-lists">
        <li>
            <a href="#">
                <div className="industrie-item">
                    <div className="effect-image-1 grayscale-effect">
                        <div className='col-md-2'>
                        <img src= { Industrypic1 } alt=""/>
                        </div>
                        </div>
                        <h6 className="industrie-item-title">fashion & apparel</h6>
                        </div>
                        </a>
                        </li>
        <li>
            <a href="#"><div className="industrie-item">
                <div className="effect-image-1 grayscale-effect">
                <div className='col-md-2'>
                    <img src= { Industrypic2 } alt=""/>
                    </div>
                    </div>
                    <h6 className="industrie-item-title">Germs & Jewelery</h6>
                    </div>
                    </a>
                    </li>
        <li>
            <a href="#">
                <div className="industrie-item">
                    <div className="effect-image-1 grayscale-effect">
                    <div className='col-md-2'>
                        <img src={ Industrypic3 } alt=""/>
                        </div>
                        </div>
                        <h6 className="industrie-item-title">Home & Decor</h6>
                        </div>
                        </a>
                        </li>
        <li>
            <a href="#">
                <div className="industrie-item">
                    <div className="effect-image-1 grayscale-effect">
                    <div className='col-md-2'>
                        <img src= { Industrypic4 } alt=""/>
                        </div>
                        </div>
                        <h6 className="industrie-item-title">Health & Beauty</h6>
                        </div>
                        </a>
                        </li>
    <li>
        <a href="#">
            <div className="industrie-item">
                <div className="effect-image-1 grayscale-effect">
                <div className='col-md-2'>
                    <img src= { Industrypic5 } alt=""/>
                    </div>
                    </div>
                    <h6 className="industrie-item-title">Automative Technology</h6>
                    </div>
                    </a>
                    </li>
        <li>
            <a href="#">
                <div className="industrie-item">
                    <div className="effect-image-1 grayscale-effect">
                    <div className='col-md-2'>
                        <img src= { Industrypic6 } alt=""/>
                        </div>
                        </div>
                        <h6 className="industrie-item-title">Consumer Goods</h6>
                        </div>
                        </a>
                        </li>
    
    </ul>
    
                
                
                

            </div>
        </div>
    </section>


       <div className="image-wrapper d-md-none d-lg-none">
        <div className="container">
            <div className="row">
        <div className="simple-effet-image clearfix " style={{textAlign: "center" }}>
        
        <div className="col-sm-2">
            
<div className="effect-image-1 grayscale-effect">
<img style={{height: "247px"}} src= { Industrypic1 } alt="" />
<h5 className="ourteam-name" style={{fontSize: "16px" }}>fashion & apparel</h5>
</div>
</div>

<div className="col-sm-2">
<div className="effect-image-1 grayscale-effect">
<img style={{height: "247px"}} src={ Industrypic2 } alt="" />
<h5 className="ourteam-name" style={{fontSize:"16px" }}>Gems & Jewelery</h5>
</div>
</div>

<div className="col-sm-2">
    <div className="effect-image-1 grayscale-effect">
        <img style={{height: "247px"}} src={ Industrypic3 } alt="" />
   <h5 className="ourteam-name" style={{fontSize: "16px"}} >Home & Decor</h5>
   </div>
</div>

    <div className="col-sm-2">
       <div className="effect-image-1 grayscale-effect">
            <img style={{height: "247px"}} src={ Industrypic4 } alt="" />
            <h5 className="ourteam-name" style={{fontSize:"16px"}}>Health & Beauty</h5>
           </div>
    </div>
    <div className="col-sm-2">
        <div className="effect-image-1 grayscale-effect">
            <img style={{height: "247px"}} src={ Industrypic5 } alt="" />
            <h5 className="ourteam-name" style={{fontSize:"16px"}}>Automative Technology</h5>
        </div>
    </div>
    <div className="col-sm-2">
        <div className="effect-image-1 grayscale-effect">
            <img style={{height: "247px"}} src={ Industrypic6 } alt="" />
             <h5 className="ourteam-name" style={{fontSize:"16px"}}>Consumer Goods</h5>

        </div>      
    </div>
          </div>
          </div>
          </div>
          </div>
          </div>
                

          
    );
}

export default CoveredIndustry;



           
                  
                         
