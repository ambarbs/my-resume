import React from 'react';
import PropTypes from 'prop-types'
import {ContactText, ContactUrl, ContactWrapper} from "./Contact.styles";

const Contact = ({Icon, text, isUrl = false}) =>
    <ContactWrapper>
        <a href={text}>
            <Icon size='1.2em' color='#565252'/>
        </a>
        {!isUrl && <ContactText>{text}</ContactText>}
        {isUrl && <ContactUrl href={text}>{text}</ContactUrl>}
    </ContactWrapper>

export default Contact;

Contact.propTypes = {
    Icon: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired,
    isUrl: PropTypes.bool,
}
