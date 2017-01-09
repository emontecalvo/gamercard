import React from 'react';
import {connect} from 'react-redux';

class Card extends React.Component {
  render() {
    return ( <div>
    	<div className="testdiv">
	    	<p>IMAGE HERE</p>
	    	<p>Game Title:  Game test</p>
	    	<p>Rating: 8 starts</p>
	    	<p>Category: tower defense </p>
	    	<p>Platform: mobile</p>
	    	<p>Best feature: fire tower</p>
	    	<p>Tips, tricks & thoughts: really fun </p>
	    </div>
    </div>
    )
  }
}

module.exports = Card;
