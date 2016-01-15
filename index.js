
import React from 'react';
import ReactDOM from 'react-dom';
import Facts from './components/facts';

let colors = [
  'blue','green','violet','red','orange'
]

export class App extends React.Component {
  
  constructor() {
    super(...arguments);

    this.state = {color: 'violet', index: 0};
  }

  handleKey(e) {

    e = e || window.event;
    switch(+e.keyCode) {
      case 38:
        // 'up'
        this.setState({color: 'blue'});
      break;
      case 40:
        // 'down'
        this.setState({color: 'green'});
      break;
      case 37:
        // 'left'
        this.setState({color: 'violet'});
      break;
      case 39:
        // 'right'
        this.setState({color: 'red'});
      break;
      case 32:
        // 'space'
        this.setState({color: 'orange'});
      break;
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKey.bind(this));
  }

  componentWillMount() {

    window.setInterval(() => {
      this.setState({index: (this.state.index+1) % colors.length });
    }, 5000);
    window.addEventListener('keydown', this.handleKey.bind(this));
  }

  render() {
    return (
      <div className={colors[this.state.index]} id="container">
        <Facts />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector("#app"));
