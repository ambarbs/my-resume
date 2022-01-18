import styled, {keyframes} from "styled-components";

export const ToggleButtonWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 1rem;
  top: 1rem;

  @media only screen and (max-width: 360px) {
    top: 0.75rem;
    right: 3rem;
  }
`

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
    width: 2.5rem;
    height: 0.75rem;
  }
`

export const Circle = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: white;
  position: relative;
  left: -4rem;
  border-radius: 50%;
  transition: transform 0.2s linear;
  @media only screen and (max-width: 360px) {
    width: 1.85rem;
    height: 1.85rem;
    left: -3.5rem;
  }
`

const changeColorOfLabel = keyframes`
  from {
    background-color: #111
  }
  to {
    background: #967d7d;
  }
`

const changeColorOfLabelReverse = keyframes`
  from {
    background-color: #967d7d
  }
  to {
    background: #111;
  }
`

export const StyledCheckbox = styled.input`
  opacity: 0;
  position: relative;

  &:checked + ${StyledLabel} + ${Circle} {
    transform: translateX(2.7rem);
    @media only screen and (max-width: 360px) {
      transform: translateX(2.1rem);
    }
  }

  &:checked + ${StyledLabel} {
    animation: ${changeColorOfLabel} linear 0.2s forwards;
  }
  &:not(:checked) + ${StyledLabel} {
    animation: ${changeColorOfLabelReverse} linear 0.2s forwards;
  }
`
