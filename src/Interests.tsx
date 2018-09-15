import * as React from 'react';
import './App.css';

import mountainBiking from './kaiteriteri-mountain-bike-park.jpg';



class Interests extends React.Component {
  public render() {
    return (
        <form>
             <img className="App-interestimage" src={mountainBiking} />
        </form>
    );
  }
}

export default Interests;