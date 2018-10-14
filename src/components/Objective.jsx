import React from 'react';
import PropTypes from 'prop-types';
import 'react-chat-widget/lib/styles.css';
import {getObjective,getSummaries,getUser,getScore,getSummary} from '../actions/apiCalls';
import {Link} from 'react-router-dom';

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

const showIt = {
	display:"block"
}

const dontShow = {
	display:"none"
}
class Objective extends React.Component {
  constructor(props) {
    super(props);
		console.log('id is',this.props.match.params.goalId)
		
    this.state = {
			showModal:false,
			goal:{
				name:"Open A Bank Account"
			},
			newMessage:'',
			isOwned:this.props.match.params.userId !== undefined,
			objective:{
				completed:false,
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
				}
			},
			summaries:[],
			suggestedSummary:'test',
			date:new Date()
		};
		this.markAsComplete=this.markAsComplete.bind(this)
		this.sendMessage=this.sendMessage.bind(this)
		this.handleChange = this.handleChange.bind(this);
		this.handleTAChange = this.handleTAChange.bind(this);
		this.resolveChat = this.resolveChat.bind(this);
		this.resolveIt = this.resolveIt.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.addSummary = this.addSummary.bind(this);
	}
	componentDidMount() {
		const isOwned=this.props.match.params.userId !== undefined;
		if(isOwned) {
			//fetch stuff here
			getUser(this.props.match.params.userId)
					.then(function(response) {
				return response.json();
			})
			.then((myJson) => {
				console.log(myJson)
				const goal= myJson.goals.find(g=>g.g_id==this.props.match.params.goalId)
				const milestone=goal.milestones.find(m=>m.m_id==this.props.match.params.milestoneId)
				milestone.chat.messages = milestone.chat.messages.map(c=>typeof c == "string" ? c : Object.values(c).filter(cc=>cc).join(''))
				this.setState(state=>({
					objective:milestone
				}));
			});
		} else {
			//fetch stuff here
			getObjective(this.props.match.params.objectiveId)
					.then(function(response) {
				return response.json();
			})
			.then((myJson) => {
				this.setState(state=>({
					objective:myJson
				}));
			});
		}
		getSummaries(this.props.match.params.objectiveId)
					.then(function(response) {
				return response.json();
			})
			.then((myJson) => {
				this.setState(state=>({
					summaries:myJson
				}));
			});
    
  }
	markAsComplete = () => {
		this.setState(state=>({objective:Object.assign(this.state.objective,{completed:true})}));
	}
	closeModal = () => {
		this.setState(state=>({showModal:false}));
	}
	
	handleChange(event) {
    this.setState({newMessage: event.target.value});
  }
	
	handleTAChange(event) {
    this.setState({suggestedSummary: event.target.value});
  }

	resolveChat(event) {
		getSummary(this.state.objective.chat.messages.join('\n'))
			.then(response=>{
				console.log(response)
				this.setState(state=>({suggestedSummary:response,showModal:true}));
				// window.setTimeout(()=>{
					// this.setState(state=>({suggestedSummary:'hi'}));
				// },100)
				
			})
	}
	addSummary() {
		let summaries=this.state.summaries;
		summaries.push(this.state.suggestedSummary);
		this.setState(state=>({showModal:false,summaries:summaries}));
	}
	resolveIt() {
		this.setState(state=>({
			showModal:false,
			objective:Object.assign(this.state.objective,{
			chat:Object.assign(this.state.objective.chat,{resolved:true})
			})}));
	}
  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
  }
	
	sendMessage = () => {
		const saveMessage = (msg) => {
			console.log('sent ',msg);
		}
		
		getScore(this.state.newMessage)
			.then((response)=>{
				console.log(response)
				if(response.jaccard_dist < 0.5) {
					if(window.confirm("Your message may not translate clearly, would you still like to send it?")) {
						saveMessage(this.state.newMessage)
					}
				} else {
					saveMessage(this.state.newMessage)
				}
			})
	}

  render() {
    return (
      <div>
        <h1>{this.state.objective.name}</h1>
					{this.state.isOwned && 
						<div>
							{!this.state.objective.completed ?
							<div>
								<button className="btn btn-success" onClick={this.markAsComplete}><i className="fas fa-check"></i> Mark As Complete</button><br/>
							</div>
							:
							<div>
								<span className="badge badge-default"><i className="fas fa-check"></i> Completed! </span>
							</div>
							}
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
								{this.state.objective.chat.resolved ? 
									<div>
										<span style={floatRight} className="badge badge-default"><i className="fas fa-check"></i> Conversation Resolved! </span>
									</div>
									:
									<button style={floatRight} className="btn btn-secondary" onClick={this.resolveChat}><i className="fas fa-comment-check"></i> Resolve This Convesation</button>
								}
							
							</p>
						}
						<label htmlFor="newMsg">New Message (auto-translated to: <Link to="/">Spanish</Link>):</label>
						<input className="form-control" value={this.state.newMessage} onChange={this.handleChange} id="newMsg" type="text"/>
						<button className="btn btn-primary" onClick={this.sendMessage}><i className="fas fa-comment-plus"></i> Send</button><br/>
					</div>
					}
					
					<h2>Summaries of previous conversations</h2>
					
					<ul>
					{this.state.summaries.map((lesson,index)=>
						<li key={index} >{lesson}</li>
					)}
					</ul>
					
					
					<div className="modal fade show" style={this.state.showModal ? showIt : dontShow} id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div className="modal-dialog" role="document">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id="exampleModalLabel">Conversation Summary</h5>
									<button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeModal}>
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div className="modal-body">
									<p>Would you like to share a summary of this conversation with others?</p>
<p>									Here is a suggested summary:</p>
									<textarea  onChange={this.handleTAChange} rows="4" cols="50" value={this.state.suggestedSummary}></textarea>
									
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-secondary" onClick={this.closeModal}>Cancel</button>
									<button type="button" className="btn btn-primary" onClick={this.resolveIt}>Resolve without Saving Summary</button>
									<button type="button" className="btn btn-primary" onClick={this.addSummary} >Save Summary</button>
								</div>
							</div>
						</div>
					</div>
					
      </div>
    );
  }
}


export default Objective;
