import React from 'react';
import EditTitle from './InputBox';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditable: false };
    this.toggleEditable = this.toggleEditable.bind(this);
    this.saveTitle = this.saveTitle.bind(this);
  }

  toggleEditable() {
    this.setState((state) => ({ isEditable: !state.isEditable }));
  }

  saveTitle(title) {
    this.props.onSubmit(title);
    this.toggleEditable();
  }

  render() {
    if (this.state.isEditable) {
      return (
        <EditTitle
          className="title"
          value={this.props.title}
          onSubmit={this.saveTitle}
        />
      );
    }
    return (
      <div className="title" onClick={this.toggleEditable}>
        {this.props.title}
      </div>
    );
  }
}

export default Title;
