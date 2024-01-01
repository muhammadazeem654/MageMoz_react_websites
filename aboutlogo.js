import './aboutlogo.css';

import Aboutlogo1 from '../images/primetech.png';
import Aboutlogo2 from '../images/snaptLogo.png';
import Aboutlogo3 from '../images/ividenceLogo.png';
import Aboutlogo4 from '../images/marvelltechnologyLogo.png';
import Aboutlogo5 from '../images/mtechBlackLogoTransparent.png';
import Aboutlogo6 from '../images/blixtLogo.png';
import Aboutlogo7 from '../images/ezoicLogo.png';
import Aboutlogo8 from '../images/livestreamLogo.png';



let Aboutlogo = () => {
    return(
        <div className="container">
            <div className='row text-center'>
            <div className='col-md-12'>
                <h2>Our Clients</h2>
            </div>
            </div>
            <div className="row">
	<div className="col-md-3">
    
		<img src={ Aboutlogo5 } className="about-img" width="324px" alt="logo" />
        </div>
        <div className="col-md-3">
		<img src={ Aboutlogo6 } className="about-img" width="324px" alt="logo" />
        </div>
        <div className="col-md-3">
		<img src={ Aboutlogo7 } className="about-img" width="324px" alt="logo" />
        </div>
        <div className="col-md-3">
		<img src={ Aboutlogo8 } className="about-img" width="324px" alt="logo" />
	</div>
	</div>
            <div className="row ">
	<div className="col-md-3">
		<img src={ Aboutlogo1 } className="about-img" width="324px" alt="logo" />
        </div>
        <div className="col-md-3">
		<img src={ Aboutlogo2 } className="about-img" width="324px" alt="logo" />
        </div>
        <div className="col-md-3">
		<img src={ Aboutlogo3 } className="about-img" width="324px" alt="logo" />
        </div>
        <div className="col-md-3">
		<img src={ Aboutlogo4 } className="about-img" width="324px" alt="logo" />
	</div>
	</div>
        </div>
    );
}

export default Aboutlogo;