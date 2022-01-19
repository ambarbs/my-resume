import styled, { keyframes } from 'styled-components';

export const ToggleButtonWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0.5rem;
  top: 1rem;

  @media only screen and (max-width: 360px) {
    top: 0.75rem;
    right: 4rem;
    zoom: 0.75;
  }

  @media print {
    display: none;
  }
`;

export const StyledLabel = styled.label`
  width: 3rem;
  height: 1rem;
  background-color: #111;
  display: flex;
  border-radius: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  transform: scale(1.5);
  cursor: pointer;
  @media only screen and (max-width: 360px) {
    width: 3rem;
    height: 0.75rem;
  }
`;

export const Circle = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: white;
  position: relative;
  left: -4.25rem;
  border-radius: 50%;
  transition: transform 0.2s linear;
  @media only screen and (max-width: 360px) {
    width: 1.85rem;
    height: 1.85rem;
    left: -4.2rem;
  }
`;

const changeColorOfLabel = keyframes`
  from {
    background-color: #967d7d
  }
  to {
    background: #111;
  }
`;

const changeColorOfLabelReverse = keyframes`
  from {
    background-color: #111
  }
  to {
    background: #967d7d;
  }
`;

export const StyledCheckbox = styled.input`
  opacity: 0;
  position: relative;

  &:checked + ${StyledLabel} + ${Circle} {
    transform: translateX(2.9rem);
    @media only screen and (max-width: 360px) {
      transform: translateX(2.9rem);
    }
  }

  &:checked + ${StyledLabel} {
    animation: ${changeColorOfLabel} linear 0.2s forwards;
  }
  &:not(:checked) + ${StyledLabel} {
    animation: ${changeColorOfLabelReverse} linear 0.2s forwards;
  }
`;
