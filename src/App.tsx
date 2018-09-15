import * as React from 'react';
import './App.css';
import Body from './Body';
import Footer from './Footer';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">iSITE</h1>
        </header>
        <Body/>
        <Footer/>
      </div>
    );
  }
}
export default App;
