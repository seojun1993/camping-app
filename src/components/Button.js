// Button.js

import React from 'react';
import styled, { css } from 'styled-components';

const SIZES = {
  sm: css`
    font-size: 1.2rem;
    padding: 8px 12px;
  `,
  md: css`
    font-size: 1.6rem;
    padding: 12px 16px;
  `,
  lg: css`
    width: 100%;
    max-width:300px;
    min-height:45px;
    font-size: 2rem;
    font-weight:bold;
  `,
};

const BACKGROUND = {
  blue : css`
    color:var(--main-white);
    background-color:var(--main-blue);
  `,
  
  rblue : css`
  color:var(--main-blue);
  border:2px solid var(--main-blue);
  `,

  white : css`
    color:var(--main-blue);
    background-color:var(--main-white);
  `,

  yellow : css`
    color:var(--main-black);
    background-color:var(--main-yellow);
  `,

  red : css`
    color:var(--main-white);
    background-color:var(--main-red);
  `,

  black : css`
    color:var(--main-white);
    background-color:var(--main-black);
  `,

  gray : css`
  color:var(--main-black);
  background-color:var(--main-greyL);
  `,
}

const RADIUS = {
    square : css`border-radius:0;`,
    circle : css`border-radius:50%;`,
    sm : css`border-radius:5px;`, 
    md : css`border-radius:15px;`,
    lg : css`border-radius:23px;`,
}

const SHADOW = {
  y : css`box-shadow:0 3px 6px rgba(0, 0, 0, .16);`,
  n : css`box-shadow:none;`
}

const getButtonStyle = ({ size, bg, radius, shadow }) => css`
  ${SIZES[size]}
  ${BACKGROUND[bg]}
  ${RADIUS[radius]}
  ${SHADOW[shadow]}
  
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  cursor: pointer;
  font-weight:bold;
`;

const Button = ({ disabled = false, size, bg, radius, txt, shadow, event }) => {
  const buttonStyle = getButtonStyle({ size, bg, radius, shadow });

  return (
    <StyledButton disabled={disabled} css={buttonStyle} onClick={event}>
      {txt}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  ${(v) => v.css}
`;

export default Button;