import React from 'react'
import '../css/f.css';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col } from 'antd';

const Fantasy = () => {
    const navigate=useNavigate();

    const button=()=>{
        navigate('/');
    }
  return (
    <div className='f-conatiner'>
    <div className='f'onClick={button}><ArrowLeftOutlined/>Books/Fantasy</div>
<div className='f-card'>


<Row gutter={16} style={{marginTop:15}}>
{/* Second Row */}
<Col xs={24} sm={12} md={8} lg={8} xl={8}>
  <Card style={{ height: 260 , marginTop:80}} className='f-c'>
  <div className="f-content">
<p className='p-f'>The Last Unicorn</p>
<div className="f-icon" ></div>

<div className="f-tag">
<p>The Last Unicorn is a classic of the genre; a beautiful piece of fairy tale-inspired fiction, and one of the best fantasy novels ever written.</p>
    </div>

</div>    

  </Card>
</Col>


<Col xs={24} sm={12} md={8} lg={8} xl={8}>
  <Card style={{ height: 260, marginTop:80 }} className='f-c'>
  <div className="r-content">
<p className='p-f'>The Once and Future King</p>
<div className="f-icon2" style={{marginLeft:'10px'}} ></div>

<div className="f-tag">
<p>The Once and Future King is a collection of fantasy novels by T. H. White about the legend of King Arthur. It is loosely based upon the 1485 work Le Morte d'Arthur by Sir Thomas Malory.</p>
    </div>
</div>    
 
  </Card>
</Col>


<Col xs={24} sm={12} md={8} lg={8} xl={8}>
  <Card style={{ height: 260 , marginTop:80}} className='f-c'>
  <div className="f-content">
<p className='p-f'>A Game of Thrones</p>
<div className="f-icon3" style={{marginLeft:'100px'}}></div>


<div className="f-tag">
<p>A Game of Thrones is the first novel in A Song of Ice and Fire, a series of fantasy novels by American author George R. R. Martin. It was first published on August 1, 1996.</p>
    </div>
</div>    
 
  </Card>
</Col>


</Row>




<Row gutter={16} style={{marginTop:15}}>
{/* Second Row */}
<Col xs={24} sm={12} md={8} lg={8} xl={8}>
  <Card style={{ height: 260 , marginTop:80}} className='f-c'>
  <div className="f-content">
<p className='p-f'>The Buried Giant </p>
<div className="f-icon4" ></div>


<div className="f-tag">
<p>The Buried Giant is a fantasy novel by the Nobel Prize-winning British writer Kazuo Ishiguro, published in March 2015. </p>
    </div>
</div>    

  </Card>
</Col>


<Col xs={24} sm={12} md={8} lg={8} xl={8}>
  <Card style={{ height: 260, marginTop:80 }} className='f-c'>
  <div className="r-content">
<p className='p-f'>Garden of Moon</p>
<div className="f-icon5" style={{marginLeft:'10px'}} ></div>

<div className="f-tag">
<p>Gardens of the Moon is the first of ten novels in Canadian author Steven Erikson's high fantasy series the Malazan Book of the Fallen. The novel details the various struggles for power on an intercontinental region dominated by the Malazan Empire. </p>
    </div>

</div>    
 
  </Card>
</Col>


<Col xs={24} sm={12} md={8} lg={8} xl={8}>
  <Card style={{ height: 260 , marginTop:80}} className='f-c'>
  <div className="f-content">
<p className='p-f'>An Ember in Ashes </p>
<div className="f-icon6" style={{marginLeft:'100px'}}></div>

<div className="f-tag">
<p>An Ember in the Ashes is a fantasy novel written by American author Sabaa Tahir. It was published on April 28, 2015 by Razorbill, an imprint of Penguin Random House.  </p>
    </div>
</div>    
 
  </Card>
</Col>


</Row>



</div>

    </div>
  )
}

export default Fantasy