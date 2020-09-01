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
    const {title} = this.props;
    const InputTitle = (
      <EditTitle className="title" value={title} onSubmit={this.saveTitle} />
    );

    const TitleBar = (
      <div className="title" onClick={this.toggleEditable}>
        {title}
      </div>
    );
    
    return this.state.isEditable ? InputTitle : TitleBar;
  }
}

export default Title;
