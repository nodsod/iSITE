import * as React from 'react';
import './App.css';
import Interests from './Interests';
import PersonalDetailsSearch from './PersonalDetailsSearch';

class Body extends React.Component {
  public render() {
    return (
        <div>
        <PersonalDetailsSearch />
        <Interests />
        </div>
    );
  }
}

export default Body;