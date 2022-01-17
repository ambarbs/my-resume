import PropTypes from 'prop-types'
import React from "react";
import {SubSectionText, SubSectionTitle, SubSectionWrapper, SubSectionWrapperWithIcon} from "./SubSection.Styles";

const SubSection = ({subSectionTitle, SubSectionIcon,subSectionText}) => {
    const Wrapper = SubSectionIcon ? SubSectionWrapperWithIcon : SubSectionWrapper;
    return <Wrapper>
        {SubSectionIcon && <SubSectionIcon size={35}/>}
        <SubSectionTitle>{subSectionTitle}</SubSectionTitle>
        <SubSectionText>{subSectionText}</SubSectionText>
    </Wrapper>
}

export default SubSection;

SubSection.propTypes = {
  SubSectionIcon: PropTypes.any,
  subSectionText: PropTypes.any,
  subSectionTitle: PropTypes.any
}
