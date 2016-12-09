import React,{ Component, PropTypes } from 'react';
import Header from 'common/Header';

class App extends Component {
  render () {
    return (
      <main className="text-center">
        <Header/>
        {this.props.children}
      </main>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
} 

export default App;