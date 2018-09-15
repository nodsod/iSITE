import * as React from 'react';
import './App.css';

class PersonalDetailsSearch extends React.Component {
  public render() {
    return (
        
        <select>
            <option>18-30</option>
            <option>31-40</option>
            <option>41-50</option>
            <option>51-60</option>
            <option>60-Above</option>
        </select>
    );
  }
}

export default PersonalDetailsSearch;