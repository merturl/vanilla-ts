import { sanitizeHTML } from '../../utils/sanitizeHTML';

export type HelloProps = {
  lastName: string;
};

export type HelloState = {
  firstName: string;
};

class Hello {
  parent: HTMLElement;
  props: HelloProps;
  state: HelloState;

  constructor(parent: HTMLElement, props: HelloProps) {
    this.parent = parent;
    this.props = props;
    this.state = {
      firstName: 'Hello',
    };

    this.render();
    this.componentDidMount();
  }

  setState(state: HelloState) {
    this.state = state;
    this.render();
  }

  render() {
    return this.parent.appendChild(sanitizeHTML('div', this.props.lastName));
  }

  componentDidMount() {}
}

export default Hello;
