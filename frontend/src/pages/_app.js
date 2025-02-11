import React from 'react';
import './styles/globals.css';

// You might need to install this package: npm install webfontloader
import WebFont from 'webfontloader';

// Load the Inter font
WebFont.load({
  google: {
    families: ['Inter:400,500,700']
  }
});

function App({ Component, pageProps }) {
  return (
    <div className="app-wrapper">
      <Component {...pageProps} />
    </div>
  );
}

export default App;