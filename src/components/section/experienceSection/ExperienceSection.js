import PropTypes from 'prop-types'
import React from "react";
import {
    ImageWrapper,
    SubSectionText, SubSectionTextLi,
} from "../subSection/SubSection.Styles";
import {
    ExperienceSectionWrapper, H3,
    ImageContainer, Label,
    LeftInnerWrapper,
    LeftWrapper,
    Strong
} from "./ExperienceSection.Styles";
import styled from "styled-components";

const BulletList = styled.ul`
  list-style-type: disc;
`

const ExperienceSection = ({subSectionTitle, subSectionIcon, yearsWorked, workTitle, subSectionTexts}) => {
    return <ExperienceSectionWrapper>
        <ImageContainer>
            <ImageWrapper src={subSectionIcon} alt='work logo'/>
        </ImageContainer>
        <LeftInnerWrapper>
            <Strong>{subSectionTitle}</Strong>
            <Label>{yearsWorked}</Label>
        </LeftInnerWrapper>
        <div>
            <H3>{workTitle}</H3>
            <BulletList>{subSectionTexts.map(subSectionText =>
                <SubSectionTextLi>{subSectionText}</SubSectionTextLi>)}</BulletList>
        </div>
    </ExperienceSectionWrapper>
}

export default ExperienceSection;

ExperienceSection.propTypes = {
    SubSectionIcon: PropTypes.any,
    subSectionText: PropTypes.string,
    subSectionTitle: PropTypes.string,
    yearsWorked: PropTypes.string,
    workTitle: PropTypes.string,
}
