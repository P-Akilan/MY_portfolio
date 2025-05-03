import React from 'react';
import { Container, Col } from 'react-bootstrap';
import { SendOutlined } from '@ant-design/icons';
import { Collapse, Row, theme } from 'antd';
import { Avatar, List } from 'antd';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaDatabase } from 'react-icons/fa';
import { DiDotnet, DiJqueryLogo, DiVisualstudio } from 'react-icons/di';
import Csharp from './../Others/Csharp.png';
import PbIcon from './../Others/PBIcon.png';

const iconsize = 25;

const Experience = () => {
  const experienceData = [
    {
      title: 'ASP.NET Web Application Developer',
      company: 'Larch Technologies, Madurai',
      date: 'November 2022 - November 2023',
      description:
        'Worked on developing and maintaining ERP Web Application software and provided Application solutions for clients.',
      technologiesUsed: [
        { name: 'ASP.NET', icon: <DiDotnet color='violet' size={iconsize} />,Description:"ASP.Net Web Forms" },
        { name: 'C#', icon: <img src={Csharp} alt="C#" width={iconsize} height={iconsize} />, Description:"Itext sharp,Json Data's Handling,Microsoft SQL Client Package" },
        { name: 'SQL Server', icon: <FaDatabase color='#3F88FA' size={iconsize}  />,Description:"Stored Procedures, Joins, trigger handling, DB Backup and Restore, Functions" },
        { name: 'HTML', icon: <FaHtml5 color='red' size={iconsize} />,Description:"Forms, Web Page spliting with Div elements" },
        { name: 'CSS', icon: <FaCss3Alt color='blue' size={iconsize} />, Description:"Animations, Professional Designs"},
        { name: 'Bootstrap', icon: <FaBootstrap color='#7082F1' size={iconsize} />, Description:"Creating responsive Contents"},
        { name: 'JavaScript', icon: <FaJs color='#FFDD1E' size={iconsize} />,Description:"Handling Events, using local storages, Create Json data send to backend" },
        { name: 'jQuery', icon: <DiJqueryLogo color='#319ED3' size={iconsize} />,Description:"JQ widgets, Get the data from backend pass the data's to JQ widget controls" },
        { name: 'Visual Studio', icon: <DiVisualstudio color='#8F31D3' size={iconsize} />, Description:"IDE" },
      ],
    },
    {
      title: 'Power Builder Windows Application Developer',
      company: 'Abundant AI OPC Private Limited, Chennai',
      date: 'February 2024 - April 2025',
      description: 'Worked on developing and maintaining software solutions for clients.',
      technologiesUsed: [
        { name: 'Power Builder 11.5', icon: <img src={PbIcon} alt="Power Builder" width={iconsize} height={iconsize} />,Description:" " },
        { name: 'SQL Server', icon: <FaDatabase color='#3F88FA' size={iconsize} /> },
      ],
    },
  ];

  const { token } = theme.useToken();

  // const panelStyle = {
  //   marginBottom: 10,
  //   background: token.colorFillAlter,
  //   borderRadius: token.borderRadiusLG,
  //   border: 'none',
  // };

  // Function to generate items for Collapse
  const getItems = () => {
    return experienceData.map((experience, index) => ({
      key: index.toString(),
      label: (
        <div className="d-flex align-items-center">
          <h4>{experience.title} at {experience.company}</h4>
        </div>
      ),
      children: (
        <div>
          <Row className="d-block justify-content-center">
            <p><strong>Date:</strong> {experience.date}</p>
            <p>{experience.description}</p>

            <div>
              <strong>Technologies Used:</strong>
              <Row className="mt-3">
                {experience.technologiesUsed.map((tech, idx) => (
                  <Col key={idx} lg={6} md={3} sm={4} xs={6} className="text-center">
                    {/* Corrected List component usage */}
                    <List
                      itemLayout="horizontal"
                      dataSource={[tech]} 
                      renderItem={item => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={<Avatar src={item.icon} />} 
                            title={<h5>{item.name}</h5>}
                          />
                          {item.Description}
                        </List.Item>
                      )}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </Row>
        </div>
      ),
    }));
  };

  return (
    <Container className="experience-container">
      <h2 className="experience-header">Work Experience</h2>
      <Col lg={12} md={12} sm={12}>
        <Collapse
          bordered={false}
          defaultActiveKey={['1']}
          expandIcon={({ isActive }) => (
            <SendOutlined style={{ fontSize: '24px' }} rotate={isActive ? 90 : 0} />
          )}
          style={{
            background: token.colorBgContainer,
          }}
          items={getItems()}
        />
      </Col>
    </Container>
  );
};

export default Experience;
