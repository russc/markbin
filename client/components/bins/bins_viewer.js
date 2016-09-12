import React, { Component } from 'react';
import { markdown } from 'markdown';

class BinsViewer extends Component {
  render() {
    const rawHTML = markdown.toHTML(this.props.bin.content);

    // dangerously set because adding the html opens it up to cross site scripting
    return (
     <div className="col-xs-4">
       <h5>Output</h5>
       <div className="" dangerouslySetInnerHTML={{ __html: rawHTML }}></div>
     </div>
     );
  };
}

export default BinsViewer;
