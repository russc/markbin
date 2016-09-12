import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {
  // lifecycle methods
  componentDidMount() {
    // Render the Blaze accounts from the div we
    // just rendered in the 'render' method and place the Blaze
    // accounts form in the div
    this.view = Blaze.render(Template.loginButtons,
       ReactDOM.findDOMNode(this.refs.container));
  }

  componentWillUnmount() {
    // Go find the forms we created and destroy them
    // We need to clean up those fomrs ourselves.
    Blaze.remove(this.view);//Garbage collection
  }

  render() {
    return (
      <div ref="container"></div>
    );
  }
}

export default Accounts;
