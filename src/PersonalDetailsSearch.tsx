import * as React from 'react';
import './PersonalDetailsSearch.css';

class PersonalDetailsSearch extends React.Component {
  public render() {
    return (
        <form>
            <div className="radio">
                <label>
                    <input type="radio" />
                    $
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" />
                    $$
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" />
                    $$$
                </label>
            </div>
        </form>
    );
  }
}

export default PersonalDetailsSearch;