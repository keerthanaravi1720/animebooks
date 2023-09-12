


import { useEffect } from 'react';
import { Button, Card,  Space } from 'antd'; // Import the Card and Input components
import '../css/sign.css';
import { FacebookOutlined, TwitterOutlined } from '@ant-design/icons'; // Import the Facebook and Twitter icons
import { useNavigate } from 'react-router-dom';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import { ArrowLeftOutlined } from '@ant-design/icons';



const Signin = () => {

  const navigate= useNavigate();

  const signup=()=>{
    navigate('/sign-up');
  }

  useEffect(() => {
  
    AOS.init({
      duration: 1000, 
    });
  }, []);



  return (
    <div className="container">
 <Button
        className="back-button"
        onClick={() => {
        
          navigate('/'); 
        }}
      >
        <ArrowLeftOutlined />
      </Button>


      <Card className="signin-card"  data-aos="flip-left">
        <div className="top-right" onClick={signup}>Sign up</div>
        <div className="left-content">
          <div className='text'><b>Log in</b></div>
          
          <div className="input-wrapper">
            <input type="text" className="input" placeholder="Your Email" />
            <div className="divider"></div>
          </div>

          {/* Password input with divider */}
          <div className="input-wrapper">
            <input type="password" className="input" placeholder="Password" />
            <div className="divider">Forgot password?</div>
          </div>


          <Button className='but'>Log In</Button>
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

export default Signin;
