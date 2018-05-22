import React from 'react';

export default class Input extends React.Component {
  constructor(props){
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { varName } = this.props;
    this.setState({ [varName]: event.target.value });
  }
  render() {
    return <textarea className={this.props.varName} onChange={this.handleChange}></textarea>;
  }
};
