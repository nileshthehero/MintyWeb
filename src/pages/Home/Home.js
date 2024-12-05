import MyNavbar from '../../components/navbar/MyNavbar';
import MYAnimatedImage from '../../components/animatedimage/animatedimage';
import Products from '../../components/products/ourproducts';
import FormPage from '../../components/Form/form';
import Footer from '../../components/Footer/footer';
import Service from '../../components/Services/service';
import './Home.css';

const Home = () => {

    return(
        <div className='bgcolor' id='mainpage'>

        <MyNavbar/>
        <MYAnimatedImage/>
        <Products />
        <Service />
        <FormPage />
        <Footer />
         
        </div>
    );
}

export default Home;