import React from 'react'
import '../css/g.css';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col } from 'antd';

const Gothic = () => {
    const navigate=useNavigate();

    const button=()=>{
        navigate('/')
    }
  return (
    <div className='g-container'>
    <div className='g'onClick={button}><ArrowLeftOutlined/>Books/Gothic</div>
<div className='g-card'>

    
<Row gutter={16} style={{marginTop:15}}>
{/* Second Row */}
<Col xs={24} sm={12} md={8} lg={8} xl={8}>
  <Card style={{ height: 260 , marginTop:80}} className='g-c'>
  <div className="g-content">
<p className='p-g'>The Castle of Otranto </p>
<div className="g-icon" ></div>

<div className="g-tag">
<p>The Castle of Otranto is a novel by Horace Walpole.First published in 1764, 
The Castle of Otranto is widely considered the "first" Gothic novel.</p>
    </div>
              

</div>    

  </Card>
</Col>


<Col xs={24} sm={12} md={8} lg={8} xl={8}>
  <Card style={{ height: 260, marginTop:80 }} className='g-c'>
  <div className="g-content">
<p className='p-g'>The Turn of the Screw</p>
<div className="g-icon2" style={{marginLeft:'10px'}} ></div>
<div className="g-tag">
<p>The Turn of the Screw is an 1898 horror novella by Henry James which first appeared in serial format in Collier's Weekly. </p>
    </div>

</div>    
 
  </Card>
</Col>


<Col xs={24} sm={12} md={8} lg={8} xl={8}>
  <Card style={{ height: 260 , marginTop:80}} className='g-c'>
  <div className="g-content">
<p className='p-g'>Rebecca </p>
<div className="g-icon3" style={{marginLeft:'100px'}}></div>

<div className="g-tag">
<p>Rebecca is a 1938 Gothic novel written by English author Daphne du Maurier.These are the best Gothic novels.</p>
    </div>
</div>    
 
  </Card>
</Col>


</Row>

   
<Row gutter={16} style={{marginTop:15}}>
{/* Second Row */}
<Col xs={24} sm={12} md={8} lg={8} xl={8}>
  <Card style={{ height: 260 , marginTop:80}} className='g-c'>
  <div className="g-content">
<p className='p-g'>The Little Stranger </p>
<div className="g-icon4" ></div>
<div className="g-tag">
<p>The Little Stranger is a 2009 gothic novel written by Sarah Waters. It is a ghost story set in a dilapidated mansion in Warwickshire, England in the 1940s.</p>
    </div>

</div>    

  </Card>
</Col>


<Col xs={24} sm={12} md={8} lg={8} xl={8}>
  <Card style={{ height: 260, marginTop:80 }} className='g-c'>
  <div className="g-content">
<p className='p-g'>The Phantom of the Opera</p>
<div className="g-icon5" style={{marginLeft:'10px'}} ></div>

<div className="g-tag">
<p>The Phantom of the Opera is a novel by French author Gaston Leroux. It was first published as a serial in Le Gaulois from 23 September 1909 to 8 January 1910, and was released in volume form in late March 1910 by Pierre Lafitte.</p>
    </div>

</div>    
 
  </Card>
</Col>


<Col xs={24} sm={12} md={8} lg={8} xl={8}>
  <Card style={{ height: 260 , marginTop:80}} className='g-c'>
  <div className="g-content">
<p className='p-g'>The Vampyre </p>
<div className="g-icon6" style={{marginLeft:'100px'}}></div>

<div className="g-tag">
<p>"The Vampyre" is a short work of prose fiction written in 1819 by John William Polidori taken from the story Lord Byron told as part of a contest among Polidori, Mary Shelley, Lord Byron, and Percy Shelley.</p>
    </div>



</div>    
 
  </Card>
</Col>


</Row>

</div>




    </div>
  )
}

export default Gothic