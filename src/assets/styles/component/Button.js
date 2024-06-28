// Button.js

import React from 'react';
import styled, { css } from 'styled-components';

const SIZES = {
  sm: css`
    font-size: 0.875rem;
    padding: 8px 12px;
    border-radius: 4px;
  `,
  md: css`
    font-size: 1rem;
    padding: 12px 16px;
    border-radius: 8px;
  `,
  lg: css`
    width: 100%;
    max-width:300px;
    font-size: 2rem;
    border-radius: 12px;
  `,
};

const VARIANTS = {
  success: css`
    color: #ffffff;
    background-color: #28a745;
    &:hover {
      background-color: #218838;
    }
  `,
  error: css`
    color: #ffffff;
    background-color: #dc3545;
    &:hover {
      background-color: #c82333;
    }
  `,
  warning: css`
    color: #212529;
    background-color: #ffc107;
    &:hover {
      background-color: #e0a800;
    }
  `,
};

const Button = ({ disabled, size, variant, children }) => {
  const sizeStyle = SIZES[size];
  const variantStyle = VARIANTS[variant];

  return (
    <StyledButton disabled={disabled} sizeStyle={sizeStyle} variantStyle={variantStyle}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  ${(p) => p.sizeStyle}
  ${(p) => p.variantStyle}
  
  display:flex;
  justify-content:center;
  align-items:center;
  margin: 0;
  border: none;
  cursor: pointer;
`;

export default Button;