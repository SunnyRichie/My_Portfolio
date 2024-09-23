// import React from 'react';
// import { InfinitySpin } from 'react-loader-spinner';
// import './Loader.css'; // Add a CSS file for styling

// const Loader = () => (
//   <div className="loader-container">
//     <InfinitySpin color="#CB0D39" />
//   </div>
// );

// export default Loader;
import React from 'react';
// import { InfinitySpin } from 'react-loader-spinner';
import './Loader.css'; // Add a CSS file for styling
import { Bars } from 'react-loader-spinner';

const Loader = () => (
  <div className="loader-container">
    <Bars color="#CB0D39" height={100} width={100} />
  </div>
);
export default Loader;
