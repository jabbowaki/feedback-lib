import React from 'react';

export class Feedback extends React.Component {
  constructor(){
    super();
    this.state = {
      actionEvent: '',
      feelings: '',
      lesson: '',
      occuredEvent: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render () {
    return <div>
      <form>
        <div>
          How did you feel?
          <input name='feelings' onChange={this.handleChange} />
        </div>
        <div>
          What event is this feedback in response to?
          <input name='occuredEvent' onChange={this.handleChange} />
        </div>
        <div>
          How could they handle this in the future?
          <input name='actionEvent' onChange={this.handleChange} />
        </div>
        <div> Was there something you learned from this experience?
          <input name='lesson' onChange={this.handleChange} />
        </div>
        <input type="submit" value="Generate Feedback" />
      </form>
    </div>
  }
}
