import React from "react";
import {SectionHeaderText, SectionHeaderWrapper} from "./Section.Styles";
import {GiSkills} from "react-icons/gi";

const SectionHeader = ({sectionHeader}) => <SectionHeaderWrapper>
    <GiSkills size={50}/>
    <SectionHeaderText>{sectionHeader}</SectionHeaderText>
</SectionHeaderWrapper>

export default SectionHeader
