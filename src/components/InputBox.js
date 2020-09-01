import React from 'react';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState(() => ({ value }));
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const value = this.state.value;
    if (value) {
      this.props.onSubmit(value);
      this.setState({ value: '' });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          autoFocus
          type='text'
          onChange={this.handleChange}
          value={this.state.value}
          className={this.props.className}
        />
      </form>
    );
  }
}

export default InputBox;
