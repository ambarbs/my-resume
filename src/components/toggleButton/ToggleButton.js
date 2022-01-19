import PropTypes from 'prop-types'
import React from "react";
import {FiSun} from "react-icons/fi";
import {BsMoonFill} from "react-icons/bs";
import {Circle, StyledCheckbox, StyledLabel, ToggleButtonWrapper} from "./ToggleButton.Styles";

const ToggleButton = ({handleOnCheck}) => {
    const handleCheck = (e) => {
        handleOnCheck && handleOnCheck(e.target.checked);
    }
    return <ToggleButtonWrapper>
        <StyledCheckbox type="checkbox" className="checkbox" id="checkbox" onChange={handleCheck}/>
        <StyledLabel htmlFor="checkbox">
            <FiSun size='1.15em' color="yellow"/>
            <BsMoonFill size='1.15em' color="lightgrey"/>
        </StyledLabel>
        <Circle/>
    </ToggleButtonWrapper>
}

export default ToggleButton

ToggleButton.propTypes = {
  handleOnCheck: PropTypes.func
}
