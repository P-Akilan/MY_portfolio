import React, { Component } from 'react';
import Graduation from './../Others/graduate.png';
import Book from './../Others/open-book.png';
import GraduateBoy from './../Others/GraduateBoy.png'
import Schoolboy from './../Others/Schoolboy.png'
import { Card, Avatar, Row, Col, Badge } from 'antd';
import { CheckCircle } from 'react-bootstrap-icons'; // You can use any icon library you prefer

const { Meta } = Card;

class Education extends Component {
  render() {
    const educationItems = [
      {
        title: 'Stella Mary\'s College of Engineering',
        degree: 'BE-ECE',
        cgpa: '7.5',
        period: '2018-2022',
        icon: GraduateBoy,
      },
      {
        title: 'Nadar Higher Secondary School',
        degree: 'HSC',
        cgpa: '7.2',
        period: '2017-2018',
        icon: Schoolboy,
      },
      // {
      //   title: 'Nadar Higher Secondary School',
      //   degree: 'SSLC',
      //   cgpa: '8.4',
      //   period: '2015-2016',
      //   icon: Book,
      // },
    ];

    return (
      <div style={{ padding: '20px' }}>
        <Row gutter={[16, 16]}>
          {educationItems.map((item, index) => (
            <Col
              key={index}
              xs={24} sm={12} md={8} lg={6} xl={6} xxl={4} // Responsive grid breakpoints
            >
              <Card
              className='edu_card'
                hoverable
                style={{
                  width: '100%',
                  textAlign: 'center',
                  position: 'relative',
                }}
                cover={<div><img  className="edu_hover_image img-fluid" alt="icon" src={item.icon}/></div>}
              >
                {/* Tick icon in the corner */}
                <div style={{
                  position: 'absolute',
                  top: -10,
                  right: -10,
                  zIndex: 1,
                }}>
                  <CheckCircle color="green" size={40} />
                </div>

                <Meta
                  avatar={<Avatar src={item.icon} />}
                  title={item.title}
                  description={`${item.degree}`}
                />
                <div style={{ marginTop: 10, marginLeft:20 }}>
                  <strong>CGPA:</strong> {item.cgpa}
                  <br />
                  <strong>Period:</strong> {item.period}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Education;
