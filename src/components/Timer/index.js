import React from "react";

export default class Timer extends React.Component {
  state = {
    seconds: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  render() {
    const { seconds } = this.state;

    return (
      <div>
        Seconds:
        {seconds}
      </div>
    );
  }
}
