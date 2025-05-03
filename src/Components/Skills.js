import React, { Component } from 'react';
import { Progress, Space } from 'antd';
import { Container,Col,Card } from 'react-bootstrap';
import { Flex } from 'antd';


class Skills extends Component {
  state = {
    loading: true,
    progress: [], // Initialize progress as an empty array
  };
  skillsData = [
    {
      skillText: 'HTML',
      Known: '80%',
      TECH: 'FRONTEND'
    },
    {
      skillText: 'CSS',
      Known: '70%',
      TECH: 'FRONTEND'
    },
    {
      skillText: 'JavaScript',
      Known: '60%',
      TECH: 'FRONTEND'
    },
    {
      skillText: 'JQuery',
      Known: '50%',
      TECH: 'FRONTEND'
    },
    {
      skillText: 'Bootstrap',
      Known: '80%',
      TECH: 'FRONTEND'
    },
    {
      skillText: 'React JS',
      Known: '65%',
      TECH: 'FRONTEND'
    },
    {
      skillText: 'ASP.NET Web API',
      Known: '75%',
      TECH: 'BACKEND'
    },
    {
      skillText: 'C#',
      Known: '60%',
      TECH: 'BACKEND'
    },
    {
      skillText: 'MSSQL',
      Known: '75%',
      TECH: 'DB'
    },
    {
      skillText: 'SSMS',
      Known: '70%',
      TECH: 'IDE TOOLS'
    },
    {
      skillText: 'VS 2010',
      Known: '60%',
      TECH: 'IDE TOOLS'
    },
    {
      skillText: 'POWER BUILDER',
      Known: '70%',
      TECH: 'IDE TOOLS & DEVELOPMENT'
    },
  ];

  componentDidMount() {
    this.setState({ progress: new Array(this.skillsData.length).fill(0) });

    this.skillsData.forEach((skill, index) => {
      setTimeout(() => {
        const newProgress = [...this.state.progress];
        newProgress[index] = parseInt(skill.Known, 10);
        this.setState({ progress: newProgress });
      }, 400 + index * 200); // Adjust the delay based on your needs
    });
  }

  render() {
    const conicColors = { '0%': '#8ec7ed', '100%': '#3498db' };
    const twoColors = {
      '0%': '#108ee9',
      '100%': '#87d068',
    };

    return (
      <div className="Skills_Main">
        <h2>Skills</h2>
        <Flex vertical gap="middle">
          <Flex gap="large" wrap>
            {this.skillsData.map((skill, index) => (
              <Progress
                key={`circle-${index}`}
                type="circle"
                percent={this.state.progress[index]}
                strokeColor={{
                  '0%': '#5aa4e0',
                  '50%': '#69bec7',
                  '100%': '#5a80e0',
                }}
                format={(percent) => (
                  <div style={{ fontSize: '18px' }}>
                    {skill.skillText}<br />
                    {percent}%
                  </div>
                )}
                size={[150, 300]}
              />
            ))}
          </Flex>
        </Flex>

        {/* <Container>
          <Col lg={12}>
        <Space wrap>
          {this.skillsData.map((skill, index) => (
            <Col lg={12}>
            <Card id='Card' className='ms-3' key={index}>
              <Card.Header>
                <Flex gap="small" wrap>
                  <Progress type="circle" strokeWidth={10} size={[150]} percent={this.state.progress[index]} strokeColor={twoColors} />
                </Flex>
              </Card.Header>
              <Card.Body>
                <Card.Title className='Title_card'>{skill.skillText}</Card.Title>
              </Card.Body>
            </Card>
            </Col>
          ))}
        </Space>
        </Col>
        </Container> */}
      </div>
    );
  }
}

export default Skills;
