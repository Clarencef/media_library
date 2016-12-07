import React,{ Component, PropTypes} from 'react';
import FlipCard from 'components/flip_card';
import Button from 'components/Button';
import 'styles/css/main.css';

class ComponentDemoPage extends Component {
  render () {
    return (
      <div>demo
        <FlipCard></FlipCard>
        <Button>
          <span>click</span>
        </Button>
      </div>
    );
  }
}

export default ComponentDemoPage