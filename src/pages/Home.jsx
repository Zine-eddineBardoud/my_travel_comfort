import React from 'react';
import Header from '../components/header';
import Content from '../components/homeComponents/content';
import Section1 from '../components/homeComponents/section1';
import NosServices from '../components/homeComponents/nosServices';
import AboutUs from '../components/homeComponents/aboutUs';
import Testimonials from '../components/homeComponents/testimonials';
import Footer from '../components/footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Content />
            <Section1 />
            <NosServices />
            <AboutUs />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default Home;