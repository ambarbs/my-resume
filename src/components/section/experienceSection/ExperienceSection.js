import PropTypes from 'prop-types'
import React from "react";
import {
    ImageWrapper,
    SubSectionText, SubSectionTextLi,
} from "../subSection/SubSection.Styles";
import {ExperienceSectionWrapper, ImageContainer, LeftInnerWrapper, LeftWrapper} from "./ExperienceSection.Styles";
import styled from "styled-components";

const BulletList = styled.ul`
  list-style-type: disc;
`

const ExperienceSection = ({subSectionTitle, subSectionIcon, yearsWorked, subSectionTexts}) => {
    return <ExperienceSectionWrapper>
        <ImageContainer>
            <ImageWrapper src={subSectionIcon} alt='work logo'/>
        </ImageContainer>
        <LeftInnerWrapper>
            <strong>{subSectionTitle}</strong>
            <label>{yearsWorked}</label>
        </LeftInnerWrapper>
        <BulletList>{subSectionTexts.map(subSectionText =>
            <SubSectionTextLi>{subSectionText}</SubSectionTextLi>)}</BulletList>
    </ExperienceSectionWrapper>
}

export default ExperienceSection;

ExperienceSection.propTypes = {
    SubSectionIcon: PropTypes.any,
    subSectionText: PropTypes.string,
    subSectionTitle: PropTypes.string,
    yearsWorked: PropTypes.string,
}
