

import React from 'react';
import { Card, Row, Col} from 'antd';
import '../css/ad.css';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


const Adventure = () => {
    const navigate= useNavigate();
    
    const backbutton=()=>{
        navigate('/');
    }
  return (
    <div className='cont'>
      
     
       
     
     
      <div className='t'><b onClick={backbutton}> <ArrowLeftOutlined  />Books/Adventure</b> </div>


      <Row gutter={[16, 16]} className='cd' justify="center" style={{marginLeft:'50px'}}>
      

<Col xs={24} sm={12} md={8} lg={8} xl={8}>
  <Card style={{ width: '90%', height: 320 }} className='img'>
    <div className="card-content">
      <div className="icon">
        {/* Image */}
      </div>
      <div className="text-content">
      <a href="https://www.gutenberg.org/files/120/120-h/120-h.htm" target="_blank" rel="noopener noreferrer" className="link">
          

        <p style={{ marginLeft: '100px', marginTop:'-45px' }} className='p'><u>Treasure Island</u></p>
        </a>
        <p style={{ fontSize: 12 }} className='p1'>
          Written by Scottish author Robert Louis Stevenson, this story of “buccaneers and buried gold” launched a million tropes of treasure maps, sea chests, Black Spots, and deserted islands.
        </p>
      </div>
    </div>
  </Card>
</Col>



        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <Card style={{ width: '90%', height: 320}} className='img'>
          <div className="card-content">
      <div className="icon2">
        {/* Image */}
      </div>
      <a href='https://www.gutenberg.org/files/2701/2701-h/2701-h.htm' target="_blank" rel="noopener noreferrer" className="link">
          <p className='p' style={{ marginLeft: '100px', marginTop:'-50px' }} ><u>Moby Dick</u></p>
          </a>  
          <p style={{fontSize:12}} className='p1'>Moby-Dick; or, The Whale is an 1851 novel by American writer Herman Melville.
           The book is the sailor Ishmael's narrative of the maniacal quest of Ahab,
            captain of the whaling ship Pequod, for vengeance against Moby Dick. 
           </p>
         </div>
          </Card>
        </Col>


        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <Card style={{ width: '90%', height: 320 }} className='img'>
          <div className="card-content">
      <div className="icon3">
        {/* Image */}
      </div>
<a href='https://www.ssgopalganj.in/online/E-Books/CLASS%20VIII/Life%20of%20Pi%20by%20Yann%20Martel.pdf' target="_blank" rel="noopener noreferrer" className="link">
         <p className='p' style={{ marginLeft: '100px', marginTop:'-50px' }}><u>Life of Pi</u></p></a>
         <p style={{fontSize:12}} className='p1'>Life of Pi is a Canadian philosophical novel by Yann Martel published in 2001. The protagonist is Piscine Molitor "Pi" Patel, an Indian boy from Pondicherry, India, who explores issues of spirituality and metaphysics from an early age.</p>
          
          </div>
          </Card>
        </Col>
        
        {/* Second Row */}
        <Col xs={24} sm={12} md={8} lg={8} xl={8} style={{marginTop:'30px'}}>
          <Card style={{ width: '90%', height: 320 }} className='img'>
          <div className="card-content">
      <div className="icon4">
        {/* Image */}
      </div>
      <a href='https://www.theatlantic.com/magazine/archive/1951/08/the-cruel-sea/639546/'  target="_blank" rel="noopener noreferrer" className="link" >
          <p className='p' style={{ marginLeft: '100px', marginTop:'-50px' }}><u>The Alchemist</u></p></a>
<p style={{fontSize:12}} className='p1'>The Alchemist is a novel by Brazilian author Paulo Coelho which was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller.

</p>
</div>
          </Card>
        </Col>


         <Col xs={24} sm={12} md={8} lg={8} xl={8} style={{marginTop:'30px'}}>
          <Card style={{ width: '90%', height: 320 }} className='img'>
          <div className="card-content">
      <div className="icon5">
        {/* Image */}
      </div>
      <a href='https://www.gutenberg.org/files/236/236-h/236-h.htm'  target="_blank" rel="noopener noreferrer" className="link">
          <p className='p'  style={{ marginLeft: '100px', marginTop:'-50px' }}><u>The Jungle Book</u></p></a>
          <p style={{fontSize:12}} className='p1'>Rudyard Kipling published this book in 1894 as a collection of stories about a 
            “man-cub” Mowgli who grows up with wolves in the forest.

             </p>
             </div>
          </Card>
        </Col> 


        <Col xs={24} sm={12} md={8} lg={8} xl={8} style={{marginTop:'30px'}}>
          <Card style={{ width: '90%', height: 320 }}className='img'>
          <div className="card-content">
      <div className="icon6">
        {/* Image */}
      </div>
      <a href='https://www.gutenberg.org/files/910/910-h/910-h.htm'  target="_blank" rel="noopener noreferrer" className="link">
          <p className='p' style={{ marginLeft: '100px', marginTop:'-50px' }}><u>White Fang</u></p></a>
          <p style={{fontSize:12}} className='p1'>White Fang is a novel by American author Jack London — and the name of the book's eponymous character, a wild wolfdog. First serialized in Outing magazine between May and October 1906, it was published in book form in October 1906.</p>
         </div>
          </Card>
        </Col>
       
      </Row>
   
    </div>
  );
};

export default Adventure;


