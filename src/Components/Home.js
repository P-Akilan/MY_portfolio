import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import ResumeDownload from './ResumeDownload'

class Home extends Component {
  render() {
    return (
      <div>
      <Col lg="12" >
        <div id="Home_background" className='col-lg-12 d-grid'>
          <div id='centered-container'>
            <div id='centered-text'>
              <h1 id='home_name'>Hello,I'm AKILAN</h1>
              <h1  id='Text_home'>Web Developer...</h1>
            </div>
          </div>
       <ResumeDownload/>
        </div>
      </Col>
      </div>
    )
  }
}

export default Home