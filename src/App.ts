import { sanitizeHTML } from './utils/sanitizeHTML';
import Hello from './components/hello/Hello';

export type AppProps = {
  lastName: string;
};

export type AppState = {
  firstName: string;
};

class App {
  parent: HTMLElement;
  props: AppProps;
  state: AppState;
  children: Hello;

  constructor(parent: HTMLElement, props: AppProps) {
    this.parent = parent;
    this.props = props;
    this.state = {
      firstName: 'jH',
    };

    this.render();
  }

  setState() {}

  render() {
    const app = sanitizeHTML('div', this.state.firstName);
    this.children = new Hello(app, { lastName: 'hello' });
    this.parent.appendChild(app);
  }
}

export default App;
