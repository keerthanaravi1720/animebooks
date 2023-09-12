import React from 'react';
import '../css/r.css';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col } from 'antd';

const Romance = () => {
    const navigate=useNavigate();

    const button=()=>{
        navigate('/');
    }
  return (
  <div className='r-container'>
    <div className='r'onClick={button}>
        <ArrowLeftOutlined/>Books/Romance</div>

        <div className='r-card'>
        <Row gutter={16} style={{ marginTop: 15 }}>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Card style={{ height: 260, marginTop: 80 }} className='r-c'>
              <div className="r-content">
                <p className='p-r'>Pride & Prejudice</p>
                <div className="r-icon">
                 
                </div>
                <div className="r-tag">
      Pride and Prejudice follows the turbulent relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner.
    </div>
              
              </div>

             
            </Card>
          </Col>


          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Card style={{ height: 260, marginTop: 80 }} className='r-c'>
              <div className="r-content">
                <p className='p-r'>OutLander</p>
                <div className="r-icon2">
                 
                </div>

                <div className="r-tag">
                Outlander is a historical fantasy novel by American writer Diana Gabaldon, first published in 1991.
    </div>
              </div>
            </Card>
          </Col>


          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Card style={{ height: 260, marginTop: 80 }} className='r-c'>
              <div className="r-content">
                <p className='p-r'>Wuthering Heights</p>
                <div className="r-icon3">
                 
                </div>

                <div className="r-tag">
                Wuthering Heights is an 1847 novel by Emily Brontë, initially published under her pen name "Ellis Bell". 
                The main themes of this novel are love, passion, and vengeance. 
    </div>
              </div>
            </Card>
          </Col>


        </Row>


        <Row gutter={16} style={{ marginTop: 15 }}>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Card style={{ height: 260, marginTop: 80 }} className='r-c'>
              <div className="r-content">
                <p className='p-r'>Twilight Saga</p>
                <div className="r-icon4">
                 
                </div>
                <div className="r-tag">
                The series explores the unorthodox romance between human Bella and vampire Edward, as well as the love triangle between Bella, Edward, and Jacob, a werewolf. 
    </div>
           

              </div>
            </Card>
          </Col>


          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Card style={{ height: 260, marginTop: 80 }} className='r-c'>
              <div className="r-content">
                <p className='p-r'>Happy Place</p>
                <div className="r-icon5">
                 
                </div>
                <div className="r-tag">
             <p>  A couple who broke up months ago make a pact to pretend to still be together for their annual weeklong vacation with their best friends in this glittering and wise new novel from  New York Times bestselling author Emily Henry.</p> 
    </div>
           

              </div>
            </Card>
          </Col>


          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Card style={{ height: 260, marginTop: 80 }} className='r-c'>
              <div className="r-content">
                <p className='p-r'>Jane Eyre</p>
                <div className="r-icon6">
                 
                </div>
                <div className="r-tag">
             <p> Charlotte Brontë's (1816 – 1855) iconic novel of 1847 is subtitled 'An Autobiography'. It is an example of a Bildungsroman: a work that traces the education and development of its heroine, and follows her journey through life.</p> 
    </div>

              </div>
            </Card>
          </Col>


        </Row>

        </div>
    </div>
  )
}

export default Romance






















// <Row gutter={16} style={{marginTop:15}}>
// {/* Second Row */}
// <Col xs={24} sm={12} md={8} lg={8} xl={8}>
//   <Card style={{ height: 260 , marginTop:80}} className='r-c'>
//   <div className="r-content">
// <p className='p-r'>Howl's Moving castle </p>
// <div className="r-icon4" ></div>
// </div>    

//   </Card>
// </Col>


// <Col xs={24} sm={12} md={8} lg={8} xl={8}>
//   <Card style={{ height: 260, marginTop:80 }} className='r-c'>
//   <div className="r-content">
// <p className='p-r'>The Traveling Cat Chronicles</p>
// <div className="r-icon5" style={{marginLeft:'10px'}} ></div>
// </div>    
 
//   </Card>
// </Col>


// <Col xs={24} sm={12} md={8} lg={8} xl={8}>
//   <Card style={{ height: 260 , marginTop:80}} className='r-c'>
//   <div className="r-content">
// <p className='p-r'>A Whole Life </p>
// <div className="r-icon6" style={{marginLeft:'100px'}}></div>
// </div>    
 
//   </Card>
// </Col>


// </Row>