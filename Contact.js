import Header from '../Components/header';
import ContactBanner from '../Components/ContactBanner';
import ContactSecondfold from '../Components/ContactSecondfold';
import HomeFooter from '../Components/Footer'; 
import ContactForm from '../Components/ContactForm';

let Contact = () => {
    return(
        <div>
            <Header />
            <ContactBanner />
            <ContactSecondfold />
            <ContactForm />
            <HomeFooter />
        </div>
    );
}

export default Contact;