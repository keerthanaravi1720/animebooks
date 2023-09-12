// import React from 'react';
// import { ArrowLeftOutlined } from '@ant-design/icons';
// import { useNavigate } from 'react-router-dom';
// import { Card, Row, Col } from 'antd';
// import '../css/h.css';

// const Horror = () => {
//   const navigate = useNavigate();

//   const backbutton = () => {
//     navigate('/');
//   }

//   return (
//     <>
//       <div className='hr'>
//         <div className='hr2'>
//           <ArrowLeftOutlined onClick={backbutton} />Books/Horror
//         </div>
   

//       <div className="card-container">
//         <Row gutter={16}>
//           <Col xs={24} sm={12} md={8} lg={8} xl={8}>
//             <Card style={{ height: 260 , width: "80%"}}>
//               {/* Card content for the first card */}
//             </Card>
//           </Col>
//           <Col xs={24} sm={12} md={8} lg={8} xl={8}>
//             <Card style={{ height: 260 , width: "80%" }}>
//               {/* Card content for the second card */}
//             </Card>
//           </Col>
//           <Col xs={24} sm={12} md={8} lg={8} xl={8}>
//             <Card style={{ height: 260, width: "80%" }}>
//               {/* Card content for the third card */}
//             </Card>
//           </Col>
//         </Row>
//         </div>

//         <div className="card-container">
//         <Row gutter={16}>
//           <Col xs={24} sm={12} md={8} lg={8} xl={8}>
//             <Card style={{ height: 260, width: "80%" }}>
//               {/* Card content for the fourth card */}
//             </Card>
//           </Col>
//           <Col xs={24} sm={12} md={8} lg={8} xl={8}>
//             <Card style={{ height: 260 , width: "80%"}}>
//               {/* Card content for the fifth card */}
//             </Card>
//           </Col>
//           <Col xs={24} sm={12} md={8} lg={8} xl={8}>
//             <Card style={{ height: 260, width: "80%" }}>
//               {/* Card content for the sixth card */}
//             </Card>
//           </Col>
//         </Row>
//       </div>
//       </div>
//     </>
//   );
// }

// export default Horror;




import React from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col } from 'antd';
import '../css/h.css';

const Horror = () => {
  const navigate = useNavigate();

  const backbutton = () => {
    navigate('/');
  }

  return (
    <>
      <div className='hr'>
        <div className='hr2' onClick={backbutton}>
          <ArrowLeftOutlined  />Books/Horror
        </div>
     

      <div className="card-container">
        <Row gutter={[16, 16]} > {/* Adjust the gutter values to control the spacing */}
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Card style={{ height: 299, width: "89%" }}  className='cantd' >
            <div className="hr-icon">
        {/* Image */}
      </div>
      <a href='https://www.gutenberg.org/files/345/345-h/345-h.htm' target="_blank" rel="noopener noreferrer" className="link" >
     <p style={{ marginLeft: '100px', marginTop:'-39px' }} className='hr-p'>Dracula</p>
     </a>
            <p style={{fontSize:13}} className='tag'>Dracula is a novel by Bram Stoker, published in 1897. An epistolary novel, the narrative is related through letters, diary entries, and newspaper articles. It has no single protagonist, but opens with solicitor Jonathan Harker taking a business trip to stay at the castle of a Transylvanian nobleman, Count Dracula.</p>
          
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Card style={{ height: 299, width: "89%" }} className='cantd'>
            <div className="hr-icon1">
        {/* Image */}
      </div>
      <a href='https://freenovelread.com/william-peter-blatty/p,20,36169-the_exorcist' target="_blank" rel="noopener noreferrer" className="link">
     <p style={{ marginLeft: '100px', marginTop:'-39px' }} className='hr-p'>The Exorcist</p></a>
       <p style={{fontSize:13}} className='tag'>The Exorcist is a 1971 horror novel written by American writer William Peter Blatty and published by Harper & Row. The book details the demonic possession of eleven-year-old Regan MacNeil, the daughter of a famous actress, and the two priests who attempt to exorcise the demon. </p>    
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Card style={{ height: 299, width: "89%" }}  className='cantd'>
            <div className="hr-icon2">
        {/* Image */}
      </div>
      <a href='http://englishonlineclub.com/pdf/Stephen%20King%20-%20It%20%5BEnglishOnlineClub.com%5D.pdf'  target="_blank" rel="noopener noreferrer" className="link">
     <p style={{ marginLeft: '100px', marginTop:'-39px' }} className='hr-p'>It</p></a>
     <p style={{fontSize:13}} className='tag'>It is a 1986 horror novel by American author Stephen King. It was his 22nd book and his 17th novel written under his own name. The story follows the experiences of seven children as they are terrorized by an evil entity that exploits the fears of its victims to disguise itself while hunting its prey.</p>
         
            </Card>
          </Col>
        </Row>
      </div>

      <div className="card-container">
        <Row gutter={[16, 16]}> {/* Adjust the gutter values to control the spacing */}
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Card style={{ height: 299, width: "89%" }}  className='cantd1'>
           
             
            <div className="hr-icon4">
        {/* Image */}
      </div>
      <a href='https://ia802506.us.archive.org/10/items/house-of-leaves-by-mark-z.-danielewski/House%20of%20Leaves%20by%20Mark%20Z.%20Danielewski.pdf' target="_blank" rel="noopener noreferrer" className="link">
     <p style={{ marginLeft: '100px', marginTop:'-39px' }} className='hr-p1'>Houses of Leaves</p></a>
      <p style={{fontSize:13, }} className='tag2'>House of Leaves is the debut novel by American author Mark Z. Danielewski, published in March 2000 by Pantheon Books. A bestseller, it has been translated into a number of languages, and is followed by a companion piece, The Whalestoe Letters.</p>     
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Card style={{ height: 299, width: "89%" }}  className='cantd1'>
            <div className="hr-icon5">
        {/* Image */}
      </div>
      <a href='http://havenner.weebly.com/uploads/2/0/5/7/20575006/jackson-shirley-the-haunting-of-hill-house.pdf' target="_blank" rel="noopener noreferrer" className="link">
     <p style={{ marginLeft: '100px', marginTop:'-39px' }} className='hr-p1'>The Haunting of Hil House</p></a>
            <p  style={{fontSize:13, }} className='tag2'>The Haunting of Hill House is a 1959 gothic horror novel by American author Shirley Jackson. A finalist for the National Book Award and considered one of the best literary ghost stories published during the 20th century, it has been made into two feature films and a play, and is the basis of a Netflix series.</p>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Card style={{ height: 299, width: "89%" }}  className='cantd1'>
            <div className="hr-icon6">
        {/* Image */}
      </div>

      < a href='http://englishprofi.com.ua/wp-content/uploads/Stephen-King-The-Shining.pdf' target="_blank" rel="noopener noreferrer" className="link" >
     <p style={{ marginLeft: '100px', marginTop:'-39px' }} className='hr-p1'>The Shining</p></a>
          
          <p style={{fontSize:13, }} className='tag2'>The Shining is a 1977 horror novel by American author Stephen King. It is King's third published novel and first hardback bestseller; its success firmly established King as a preeminent author in the horror genre.</p>  </Card>
          </Col>
        </Row>
      </div>
      </div>
    </>
  );
}

export default Horror;
