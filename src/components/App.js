//Dependencies
import React, {Component} from 'react';

//Components
import Header from './Global/Header';
import Footer from './Global/Footer';
import Content from './Global/Content';

//Data
import items from '../data/menu';

class App extends Component {

 render() {
    return (
      <div className="App">
        <Header title="CodeJobs" items={items} />
        <Content />
        <Footer />
      </div>
    );
  }

}

export default App;
