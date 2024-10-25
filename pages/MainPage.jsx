import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/GalleryCard';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Intro from '../components/Intro';

const MainPage = () => {
  return (
    <div className="Homepage">
      <Navbar /><hr width='99%'/>
      <Intro/>
      <HeroSection/>
      <Gallery />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default MainPage;
