import React from "react";
import Popup from "reactjs-popup";

import "../stylesheets/App.less";

import EmailForm from "./EmailForm";
import MailStatusMessage from "./MailStatusMessage";

export default class PopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      triedToSentEmail: false,
      sendingError: false
    };
  }

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  onEmailSend = (triedToSentEmail, sendingError) => {
    this.setState({ triedToSentEmail, sendingError });
  };

  onPopUpClose = () => {
    this.props.onPopUpClose();
    this.setState({ triedToSentEmail: false, sendingError: false });
  };

  render() {
    return (
      <Popup
        modal
        open={this.props.open}
        closeOnDocumentClick
        onClose={this.onPopUpClose}
      >
        <div className="modal">
          {!this.state.triedToSentEmail ? (
            <EmailForm
              email={this.state.email}
              handleEmailChange={this.handleEmailChange}
              onEmailSend={this.onEmailSend}
            />
          ) : (
            <MailStatusMessage
              success={!this.state.sendingError}
            ></MailStatusMessage>
          )}
        </div>
      </Popup>
    );
  }
}
