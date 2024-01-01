import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

import './Footer.css';


let HomeFooter = () => {
    return(
        <footer>
    <div className="container">
            <div className="footer-container">
        <div className="row">
            <div className="col-md-6">
                <ul className="footer-nav">
                    <li><a href="#">@2022. Magemoz Technologies</a></li>
                    
                </ul>
            </div>
          
        </div>
</div>

    </div>
</footer>
    );
}

export default HomeFooter;