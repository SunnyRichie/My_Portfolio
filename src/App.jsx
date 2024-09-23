import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Mywork from './components/Mywork/Mywork';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Loader from './components/loader/Loader'; // Import the loader

const App = () => {
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Simulate loading for 3 seconds (adjust as needed)
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 3 seconds
    }, 6000); // You can modify the timeout duration based on your requirements

    // Cleanup the timer when component unmounts
    return () => clearTimeout(timer);
  }, []);

  // Show the loader if still loading, otherwise display the full page content
  return (
    <div>
      {loading ? (
        <Loader />  // Show loader when loading is true
      ) : (
        // Render the entire page content after loading is finished
        <>
          <NavBar />
          <Hero />
          <About />
          <Services />
          <Mywork />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
