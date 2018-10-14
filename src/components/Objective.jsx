import React from 'react';
import PropTypes from 'prop-types';
import 'react-chat-widget/lib/styles.css';

const floatLeft={
	display:"block",
	float:"left",
	clear:"both",
	left:"-1em",
	"marginRight":"1em"
}

const floatRight={
	display:"block",
	float:"right",
	clear:"both",
	right:"-1em",
	"marginLeft":"1em",
	'fontStyle':"italic"
}

const theRest={
	display:"block",
	overflow:"hidden"
}

class Objective extends React.Component {
  constructor(props) {
    super(props);
		console.log('id is',this.props.match.params.goalId)
		
    this.state = {
			goal:{
				name:"Open A Bank Account"
			},
			isOwned:this.props.match.params.userId !== undefined,
			objective:{
				name:"Identification Card",
				description:`Based on your current location, these are the requirements for an identification card in Missouri:
				You will need:

 - To surrender any out-of-state ID cards or licenses to the MO DOR.
 - Your Social Security number (you do not need to bring in your Social Security card).
 - If you do not have a Social Security number, you need to bring a letter from the SSA regarding your SSN status.
 - Proof of name, and place and date of birth (e.g. U.S. birth certificate, U.S. passport, or citizenship certificate).
 - Proof of Missouri residence (e.g. utility bill, pay check, or bank statement). Post office box addresses will not be accepted. You will also need to prove your mailing address if it is different than your physical address.
 - Proof of any name change, if applicable (e.g. certified marriage certificate, divorce decree, or court order).
 - Payment for the $11 ID card fee.`,
				chat: {
					isResolved:false,
					messages:[
						"How long does it usually take to do this?",
						"You should probably set aside 2 or 3 hours for this",
						"Why does it take that long?",
						"Because it takes a while to get there, then park, then wait in line, and the line can take a long time"
					]
				},
				summaries:[
					"Bring extra cash for tax",
					"Bring coins for parking"
				]
			},
			date:new Date()
		};
	}
	componentDidMount() {
    //fetch stuff here
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
  }

  render() {
    return (
      <div>
        <h1>{this.state.objective.name}</h1>
					{this.state.isOwned && 
						<div>
							<button className="btn btn-success"><i className="fas fa-check"></i> Mark As Complete</button><br/>
						</div>
					}
				<p>{this.state.objective.description.split('\n').map( (line,index)=>
				<span key={index}><br/>{line}</span>
				)}</p>
					{this.state.isOwned && 
					<div className="form-group">
						<h2>Message an Expert:</h2>
						<hr />
						<ul  style={theRest}>
							{this.state.objective.chat.messages.map((msg,index)=>
								<li key={index} style={index%2==0 ? floatLeft : floatRight}>{msg}</li>
							)}
						</ul>
						<hr />
						{this.state.objective.chat.messages.length > 0 &&
							<p style={theRest}>
							<button style={floatRight} className="btn btn-secondary"><i className="fas fa-comment-check"></i> Resolve This Convesation</button>
							</p>
						}
						<label htmlFor="newMsg">New Message:</label><input className="form-control" id="newMsg" type="text"/>
						<button className="btn btn-primary"><i className="fas fa-comment-plus"></i> Send</button><br/>
					</div>
					}
					
					<h2>Summaries of previous conversations</h2>
					
					<ul>
					{this.state.objective.summaries.map((lesson,index)=>
						<li key={index} >{lesson}</li>
					)}
					</ul>
      </div>
    );
  }
}


export default Objective;
