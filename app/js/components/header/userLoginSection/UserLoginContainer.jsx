import React from 'react';
import WelcomeText from './WelcomeText';
import NoUnderlineLinkBtn from './noUnderlineLinkBtn';
import UserDetalisInput from './UserDetailsInput';

export default class UserLoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(evt) {
    this.setState({ [`input-${evt.target.name}`]: evt.target.value });
    console.log(this.state);
  }

  render() {
    const username = this.state.username ? this.state.username : 'Stranger';
    return (
      <div className="pure-g">
        <div className="pure-u-1-24" />
        <WelcomeText username={username} className="pure-u-5-24" />
        <div className="pure-u-3-4 pure-g">
          <UserDetalisInput className="pure-g pure-u-1-2" onChange={this.changeHandler} />
          <NoUnderlineLinkBtn className="pure-u-3-24" btnText="Login" />
          <div className="pure-u-1-24" />
          <NoUnderlineLinkBtn className="pure-u-3-24" btnText="Register" />
        </div>
      </div>
    );
  }
}

