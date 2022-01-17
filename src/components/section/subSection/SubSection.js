import React from "react";
import {SubSectionText, SubSectionTitle, SubSectionWrapper} from "./SubSection.Styles";

const SubSection = ({subSectionTitle, subSectionText}) => <SubSectionWrapper>
    <SubSectionTitle>{subSectionTitle}</SubSectionTitle>
    <SubSectionText>{subSectionText}</SubSectionText>
</SubSectionWrapper>

export default SubSection;
