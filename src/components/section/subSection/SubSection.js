import PropTypes from 'prop-types'
import React from "react";
import {
    SubSectionText,
    SubSectionTitle,
    SubSectionWrapper,
} from "./SubSection.Styles";

const SubSection = ({subSectionTitle,subSectionText}) => {
    return <SubSectionWrapper>
        <SubSectionTitle>{subSectionTitle}</SubSectionTitle>
        <SubSectionText>{subSectionText}</SubSectionText>
    </SubSectionWrapper>
}

export default SubSection;

SubSection.propTypes = {
  SubSectionIcon: PropTypes.any,
  subSectionText: PropTypes.any,
  subSectionTitle: PropTypes.any
}
