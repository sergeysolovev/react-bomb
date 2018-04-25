import React from "react";
import ReactDOM from "react-dom";

// Accepts a component as a prop and renders it
// passing the props through. In a real life scenario
// usually does something more than that
const Container = props => {
  const { component: Component } = props;
  return <Component {...props} />;
};

// An HOC-version of Container
const withContainer = WrappedComponent => props => (
  <Container component={WrappedComponent} {...props} />
);

// Though it looks a bit artificially here,
// it's pretty common to use something like `compose`
// which does the same thing but looks more innocent
const Bomb = withContainer(withContainer(() => null));

class Detonator extends React.Component {
  state = {
    wentOff: false
  };
  goOff = () => this.setState({ wentOff: true });
  render = () =>
    this.state.wentOff ? (
      <React.Fragment>
        <Bomb /> Oooppps... This text probably won't be rendered
      </React.Fragment>
    ) : (
      <button onClick={this.goOff}>Let's see</button>
    );
}

ReactDOM.render(<Detonator />, document.getElementById("root"));
