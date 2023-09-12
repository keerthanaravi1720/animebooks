// import React, { useEffect } from 'react';
import React from 'react';
import '../css/sof.css';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col } from 'antd';
// import AOS from 'aos'; // Import AOS library
// import 'aos/dist/aos.css'; // Import AOS styles

const Sof = () => {
const navigate=useNavigate();
    const backbutton=()=>{
        navigate('/');
    }

    // useEffect(() => {
    //     // Initialize AOS when the component mounts
    //     AOS.init({
    //       duration: 1000, // Set the animation duration
    //     });
    //   }, []); data-aos="flip-up"
  return (
    <div className="page-container">
   <div className='sof' onClick={backbutton}><b><ArrowLeftOutlined/>Books/Slice of Life</b></div>
    <div className='card-sof' >

        <Row gutter={16} style={{marginTop:15}}>
          {/* First Row */}

 

<Col xs={24} sm={12} md={8} lg={8} xl={8}>
<Card className='sof-c'>
            <div className='sof-content'>
             
              <p className='p-sof'>The Faults in Our Stars SOL     </p>
              <div className='sof-icon2'></div>
            </div>
            <p className='sof-p'>
            'The Fault in our Stars' is a typical teenage romance where a boy meets girl, fall in love and then spends his life exploring answers to quench girl's quest for the ending of a fictional story she adores.
            </p>
          </Card>

</Col>

          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <Card className='sof-c'>
            <div className='sof-content'>
            
              <p className='p-sof'>Fruits Basket or Fruba Manga</p>
              <div className='sof-icon'></div>
            </div>
            <p className='sof-p'>
            Fruits Basket, The series tells the story of Tohru Honda, an orphan girl who, after meeting Yuki, Kyo, and Shigure Sohma, learns that thirteen members of the Sohma family are possessed by the animals of the Chinese zodiac.
            </p>
          </Card>

</Col>


          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <Card className='sof-c'>
            <div className='sof-content'>
           
              <p className='p-sof'>Horimiya Janpanese Manga</p>
              <div className='sof-icon3'></div>
            </div>
            <p className='sof-p'>Hori-san to Miyamura-kun is a Japanese manga series written and illustrated by Hiroki Adachi, under the pseudonym Hero.
            </p>
          </Card>

</Col>


        </Row>

        <Row gutter={16} style={{marginTop:15}}>
          {/* Second Row */}
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <Card className='sof-c'>
            <div className='sof-content'>
            
              <p className='p-sof'>Howl's Moving Castle Series</p>
              <div className='sof-icon4'></div>
            </div>
            <p className='sof-p'>
            The Witch lays a curse on her, turning Sophie into a creaky old woman. Sophie knows she has to leave town, and soon finds herself taking shelter in the moving castle of the dread wizard Howl… who is rumored to eat women's hearts!
            </p>
          </Card>

          </Col>

{/* 
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Card style={{ height: 260, marginTop:80 }} className='sof-c'>
            <div className="sof-content">
      <p className='p-sof'>The Traveling Cat Chronicles</p>
      <div className="sof-icon5"  ></div>
    </div> 
    <p>This is a story of a man and his cat, and what they will do to stay together for as long as is possible. It speaks of Satoru, his life, his friends and, above all else, his unbreakable bond with the wise and committed Nana. </p>   
           
            </Card>
          </Col> */}
           <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <Card className='sof-c'>
            <div className='sof-content'>
             
              <p className='p-sof'>The Traveling Cat Chronicles</p>
              <div className='sof-icon5'></div>
            </div>
            <p className='sof-p'>
              This is a story of a man and his cat, and what they will do to stay together for as long as possible. It speaks of Satoru, his life, his friends, and, above all else, his unbreakable bond with the wise and committed Nana.
            </p>
          </Card>
        </Col>


          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <Card className='sof-c'>
            <div className='sof-content'>
            
              <p className='p-sof'>A Whole Life Novel </p>
              <div className='sof-icon6'></div>
            </div>
            <p className='sof-p'>
            An international bestsellerAndreas Egger knows every path and peak of his mountain valley, the source of his sustenance, his livelihood--his home.
            </p>
          </Card>
          </Col>


        </Row>
      </div>









 </div>
    
    
   
  );
};

export default Sof;
