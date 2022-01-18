import React, {useState} from 'react';
import {AppWrapper} from "./App.styles";
import Header from "../header/Header";
import Section from "../section/Section";
import {contacts, sections} from "../constants";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "../theme/Global.Styles";
import {LightTheme, DarkTheme} from "../theme/Themes"
import ToggleButton from "../toggleButton/ToggleButton";

function App() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = (isChecked = false) => {
        isChecked === true ? setTheme('dark') : setTheme('light')
    }

    return (
        <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
            <>
                <GlobalStyles/>
                <AppWrapper>
                    <ToggleButton handleOnCheck={toggleTheme}/>
                    <Header contacts={contacts}/>
                    {sections.map(section => <Section
                        key={section.header}
                        sectionHeader={section.header}
                        SectionHeaderIcon={section.headerIcon}
                        subSections={section.subSections}
                    />)}
                </AppWrapper>
            </>
        </ThemeProvider>
    );
}

export default App;
