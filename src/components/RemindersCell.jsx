import React from "react";

class RemindersCell extends React.Component {
  state = {
    today: false,
  };

  render() {
    return (
      <>
        <div className="ui raised very padded container segment">
          <h2 className="ui header">{this.props.header}</h2>
          <div className="ui divider"></div>
          <div className="ui relaxed divided list">
            <div className="item">
              <div className="right floated content">
                <div className="ui button"><i className="fa fa-trash"/></div>
              </div>
              <div className="content">
                <a className="header">Fold laundry</a>
                <div className="description">today</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RemindersCell;
