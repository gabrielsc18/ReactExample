//Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';

//Components
import Header from './Global/Header';
import Footer from './Global/Footer';
import Content from './Global/Content';

//Data
import items from '../data/menu';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }

 render() {
   const {children} = this.props;
   
    return (
      <div className="App">
        <Header title="CodeJobs" items={items} />
        <Content body={children} />
        <Footer />
      </div>
    );
  }

}

export default App;
