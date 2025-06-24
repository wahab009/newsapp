import React, { Component } from 'react';
import LoadingVla from '../LoadingVla.gif'; // ✅ Correct import

export class TheF extends Component {
  render() {
    return (
      <div style={{top:300}}className="text-center">
        <img src={LoadingVla} alt="Loading..." />
      </div>
    );
  }
}

export default TheF;
