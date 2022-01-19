import React from 'react';
import { useTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { ContactText, ContactUrl, ContactWrapper } from './Contact.styles';

const Contact = ({ Icon, text, link, isUrl = false, hideOnWebPage = false }) => {
  const theme = useTheme();
  return (
    <ContactWrapper visibility={hideOnWebPage ? 'hidden' : 'visible'}>
      <a href={link || text} target="_blank" rel="noopener noreferrer">
        <Icon size="1.2em" color={theme.type === 'dark' ? '#4B79A6FF' : '#565252'} />
      </a>
      {!isUrl && <ContactText>{text}</ContactText>}
      {isUrl && (
        <ContactUrl href={link} color={theme.linkColor} target="_blank">
          {text}
        </ContactUrl>
      )}
    </ContactWrapper>
  );
};
export default Contact;

Contact.propTypes = {
  Icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  isUrl: PropTypes.bool,
  hideOnWebPage: PropTypes.bool,
};
