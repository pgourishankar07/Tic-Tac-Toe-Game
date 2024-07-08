import React from 'react';
import './styles.css'; // Assuming this contains global styles
import Board from './components/Board';
import styled, { keyframes } from 'styled-components';

// Define keyframes for the animation
const nebulahero = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(-360deg);
  }
`;

// Styled component for the hero background
const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #5b22e8, #ff2362);
  animation: ${nebulahero} 20s infinite linear;
`;

// Styled component for the content container
const ContentContainer = styled.div`
  position: relative;
  z-index: 1; /* Ensure content is above the background */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Full viewport height */
`;

function App() {
  return (
    <div className="app">
      {/* Hero background with animation */}
      <HeroBackground className="herobgcolor" />

      {/* Content container */}
      <ContentContainer>
        <h1 className="text-green">
          TIC <span className="text-orange">TAC</span> TOE{' '}
        </h1>
        <Board />
      </ContentContainer>
    </div>
  );
}

export default App;
