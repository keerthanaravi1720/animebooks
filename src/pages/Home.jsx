


import React, { useEffect } from 'react';
import '../css/home.css';
import { Button, Input } from 'antd';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick'; // Import react-slick
import 'slick-carousel/slick/slick.css'; // Import slick-carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick-carousel theme styles

const Home = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
     console.log("clicked");
    navigate('/sign-in'); // Navigate to the '/sign-in' path
  };

  const handleSignUp=() =>{
    navigate('/sign-up');
  }


  const advent=() =>{
    navigate('/ad');
  }

  const horror=()=>{
    navigate('/hr')
  }

  const sof=() =>{
    navigate('/sof')
  }

const r=()=>{
  navigate('/r')
}

const gothic=()=>{
  navigate('/g');
}

const Fantasy=()=>{
  navigate('/f');
}
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000, // Set the animation duration
    });
  }, []);

  const carouselSettings = {
    // dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
  autoplaySpeed: 3000, 
  };

  
  // Settings for the carousel
 
  return (
    <>
    <div className='div'>
      <div className='header'>
      <div className='heading'>  Home</div>
        <div className='buttons'>
          <Button className='button' 

onClick={handleSignInClick}         >Sign in</Button>
          <Button className='button2' onClick={handleSignUp}>Sign up</Button>
 
        </div>
        {/* onClick={()=>alert('hsh') */}
    
      </div>

                       
   

  
  

      <div class="image-container">
        <div class="image" data-aos="flip-up"></div>
        <p class="overlay-text"><b>An Imaginary Reality </b>


        <div class="search-container">
          <Input type="text" placeholder="Search..." />
          <Button>Search</Button>
        </div>
        </p>

      </div>


      

 



      <div className='dropdown'>
    <label for='genre'>Books:</label>
    <select id='genre' name='Books'>

    <option value='novel'>Novel</option>
      <option value='manhwa'>Manhwa</option>
      <option value='manhua'>Manhua</option>
      <option value='manga'>Manga</option>
      
    </select>
  </div> 




   
    </div>



      {/* Carousel */}
      <div className='carousel-container'>
        <Slider {...carouselSettings}>
          <div className='bg-i'>
            <img
              src="d.jpg"
              alt="Horror Book Cover"
              className='bg-image'
              style={{display:'inline-block'}}
            />
         
        
            <img
              src="fb.jpg"
              alt="fruit basket Book Cover"
              className='bg-image'
              style={{display:'inline-block'}}
            />
        
         
            <img
              src="hl.jpg"
              alt="Slice of life book"
              className='bg-image'
              style={{display:'inline-block'}}
            />
       
         
            <img
              src="g.jpg"
              alt="Fantasy Book Cover"
 
              className='bg-image'
              style={{display:'inline-block'}}
            />
          </div>
          <div className='bg-i'>
            <img
              src="a.jpg"
            alt="Adventure Book Cover"
              className='bg-image'
              style={{display:'inline-block'}}
            />
       
         
            <img
              src="c.jpg"
              alt="Gothic novel"
              className='bg-image'
              style={{display:'inline-block'}}
            />
       
     
            <img
              src="md.jpg"
              alt="Adventure Novel"
              className='bg-image'
              style={{display:'inline-block'}}
            />
        
         
            <img
              src="p.jpg"
              alt="Romance novel"
              className='bg-image'
              style={{display:'inline-block'}}
            />
          </div>
          {/* Add more images as needed */}
        </Slider>
      </div>




    
    <div className='bg'>





    <div className='card' onClick={advent} >Adventure
    <p style={{color:'black', fontSize: 15, marginTop:35}} className='ptag'>
    Adventure fiction is a type of fiction that usually presents danger,
     or gives the reader a sense of excitement.
     Some adventure fiction also satisfies the literary definition of romance fiction.</p>
    </div>

  <div className='card' onClick={horror} >Horror
  <p style={{color:'black', fontSize: 15, marginTop:35}} className='ptag'>
  Horror is a genre of fiction that is intended to disturb, frighten or scare.
   Horror is often divided into the sub-genres of psychological horror and supernatural horror,
    which are in the realm of speculative fiction.</p>
  </div>

  <div className='card' onClick={sof} >Slice Of Life
  <p style={{color:'black', fontSize: 15, marginTop:35}} className='ptag'>
   A storytelling technique that presents a seemingly arbitrary sample of a character's life,
   which often lacks a coherent plot, conflict, or ending.</p>
  </div>

  <div className='card'onClick={r} >Romance
  <p style={{color:'black', fontSize: 15, marginTop:35}} className='ptag'>
  The romance genre is defined by two aspects that can be found in every romance book or novel: 
  a central love story between characters. an emotionally satisfying, happy ending.</p>
  </div>

  <div className='card'   onClick={gothic}  >Gothic Novel
  <p style={{color:'black', fontSize: 15, marginTop:35}} className='ptag'>
  Gothic fiction is characterized by an environment of fear, 
  the threat of supernatural events, and the intrusion of the past upon the present.</p>
  </div>

  <div className='card' onClick={Fantasy}>Fantasy
  <p style={{color:'black', fontSize: 15, marginTop:35}} className='ptag'>
  Fantasy literature is literature set in an imaginary universe, 
  often but not always without any locations, events, or people from the real world.</p>
  </div>




 </div>


 <div className='bg1'>

  

 </div>
    </>
  );
};

export default Home;

