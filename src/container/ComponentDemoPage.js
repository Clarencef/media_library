import React,{ Component, PropTypes} from 'react';
import FlipCard from 'components/flip_card';
import Button from 'components/Button';

import 'styles/css/main.css';

class ComponentDemoPage extends Component {
  render () {
    return (
      <div>demo
        <div className="demo_block">
          <FlipCard></FlipCard>
        </div>
        <div className="demo_block">
          <Button>
            <span>click</span>
          </Button>
          <Button disabled={true} >
            <span>disabled click</span>
          </Button>
        </div>
      </div>
    );
  }
}

export default ComponentDemoPage