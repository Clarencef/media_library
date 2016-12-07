import React,{ Component, PropTypes} from 'react';
import FlipCard from 'components/flip_card';
import 'styles/css/main.css';

class ComponentDemoPage extends Component {
  render () {
    return (
      <div>demo
        <FlipCard></FlipCard>
      </div>
    );
  }
}

export default ComponentDemoPage