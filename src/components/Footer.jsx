import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faSpotify, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer style={{ display:'flex', justifyContent:'space-evenly', backgroundColor: '#276cb1', padding: '1rem',   }}>
      <div><h1>The generics</h1></div>
      <div>
        <FontAwesomeIcon icon={faYoutube} size="2x" style={{ margin: '0 10px' }} />
        <FontAwesomeIcon icon={faSpotify} size="2x" style={{ margin: '0 10px' }} />
        <FontAwesomeIcon icon={faTwitter} size="2x" style={{ margin: '0 10px' }} />
      </div>

    </footer>
  );
};

export default Footer;
