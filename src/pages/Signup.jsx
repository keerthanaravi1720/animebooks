
import { useEffect } from 'react';
import { Button, Card,  Space } from 'antd'; // Import the Card and Input components
import '../css/signup.css';
import { FacebookOutlined, TwitterOutlined } from '@ant-design/icons'; // Import the Facebook and Twitter icons
import { useNavigate } from 'react-router-dom';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import { ArrowLeftOutlined } from '@ant-design/icons';



const Signup = () => {

  const navigate= useNavigate();

  const signin=()=>{
    navigate('/sign-in');
  }

  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000, // Set the animation duration
    });
  }, []);



  return (
    <div className="container1">
 <Button
        className="back-button"
        onClick={() => {
          // Handle the back button click
          // You can use the "navigate" function to navigate back
          navigate('/'); // This will go back to the previous page
        }}
      >
        <ArrowLeftOutlined />
      </Button>


      <Card className="signin-card1"  data-aos="flip-right">
        <div className="top-right" onClick={signin}>Sign in</div>
        <div className="left-content">
          <div className='text'><b>Sign Up</b></div>
          
          <div className="input-wrapper">
            <input type="text" className="input" placeholder="Your Email" />
            <div className="divider"></div>
          </div>

          <div className="input-wrapper">
            <input type="Name" className="input" placeholder="Name" />
            <div className="divider"></div>
          </div>


          {/* Password input with divider */}
          <div className="input-wrapper">
            <input type="password" className="input" placeholder="Password" />
            <div className="divider">Forgot password?</div>
          </div>


          <Button className='but'>Sign Up</Button>
     <p className='s'>Or sign up with social account!</p>

    
           
            </div>
            {/* <div >
      <Button className='ft'>Facebook</Button>
      <Button className='ft'>Twitter</Button>
     </div> */}


<Space>
      <Button className='ft' icon={<FacebookOutlined />}>
        Facebook
      </Button>
      <Button className='ft' icon={<TwitterOutlined />}>
        Twitter
      </Button>
    </Space>
      

            </Card>
          </div>
       
       
     
  
  );
};

export default Signup;
