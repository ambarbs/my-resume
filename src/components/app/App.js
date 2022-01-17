import React from 'react';
import {AppWrapper} from "./App.styles";
import Header from "../header/Header";
import Section from "../section/Section";
import {sections} from "./constants";

function App() {
    return (
        <AppWrapper>
            <Header/>
            {sections.map(section => <Section
                sectionHeader={section.header}
                subSections={section.subSections}
            />)}
        </AppWrapper>
    );
}

export default App;
