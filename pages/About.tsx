import React from 'react';

interface propTypes {
  name?: String,
}

interface stateTypes {
  verse: Number,
  message: String,
}

class About extends React.Component<propTypes, stateTypes> {
  constructor(props: propTypes) {
    super(props);
    this.state = {
      message: 'test',
      verse: 20,
    };
  }

  render() {
    const { name } = this.props;
    const {
      message,
      verse,
    } = this.state;
    return (
      <>
        <div>User Agent: {name}</div>
        <div>{message}</div>
        <div>{verse}</div>
      </>
    );
  }
}

export default About;