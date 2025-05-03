// src/components/Snowfall.js
import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const snowAnimation = keyframes`
  to {
    transform: translateY(80vh);
  }
`;

const Snowflake = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: #fff;
  border-radius: 50%;
  animation: ${snowAnimation} linear infinite;
`;

class Snowfall extends Component {
  renderSnowflakes() {
    return [...Array(30)].map((_, index) => (
      <Snowflake
        key={index}
        style={{ left: `${Math.random() * 100}vw`, animationDuration: `${Math.random() * 10 + 1}s` }}
      />
    ));
  }

  render() {
    return <div>{this.renderSnowflakes()}</div>;
  }
}

export default Snowfall;
