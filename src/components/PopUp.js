import React from "react";
import Popup from "reactjs-popup";

import "../stylesheets/App.css";

import EmailForm from "./EmailForm";
import StatusMessage from "./StatusMessage";

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
      <div className="popup">
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
              <StatusMessage
                success={!this.state.sendingError}
                failureMessage={"Something went wrong!"}
                successMessage={"You've received an email!"}
              ></StatusMessage>
            )}
          </div>
        </Popup>
      </div>
    );
  }
}
