import * as React from 'react';
import './PersonalDetailsSearch.css';

class PersonalDetailsSearch extends React.Component {
  public render() {
    return (
        <div className="personalDetails">
          <select>
            <option>18-30</option>
            <option>31-40</option>
            <option>41-50</option>
            <option>51-60</option>
            <option>60-Above</option>
          </select>
        </div>
    );
  }
}

export default PersonalDetailsSearch;