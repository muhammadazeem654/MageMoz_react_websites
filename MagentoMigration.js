import HomeFooter from "../Components/Footer";
import Header from "../Components/header";
import MigrationBanner from "../Components/MigrationBanner";
import ContactForm from '../Components/ContactForm';
let MagentoMigration = () => {
    return(
        <div>
            <Header />
            <MigrationBanner />
            <ContactForm />
            <HomeFooter />
        </div>
    );
}

export default MagentoMigration;
