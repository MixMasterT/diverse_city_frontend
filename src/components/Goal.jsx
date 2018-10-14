import React from 'react';
import PropTypes from 'prop-types';
import { Widget,addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

const inline = {
	display:"inline",
	marginRight:"1em"
}
const listItem = {
	listStyleType:"none"
}
class Goal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
			isOwned:this.props.match.params.userId !== undefined,
			goal:{
				name:"Open A Bank Account",

				milestones:[
					{name:"Identification Card",id:1,isComplete:true},
					{name:"Utility Bill",isComplete:false,id:2},
					{name:"Deposit",isComplete:true,id:3}
				]
			},
			date:new Date()
		};
		  }
	componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
  }

  render() {
    return (
      <div>
        <h3>{this.state.goal.name}</h3>
					<ul>
					{this.state.goal.milestones.map((milestone)=>
						<li style={listItem} key={milestone.id}>
								<div style={inline}>
								{this.state.isOwned && milestone.isComplete ?
								<i className="far fa-check-square"></i>
								:
								<i className="far fa-square"></i>
								}
								</div>
							<a href={this.state.isOwned? `/objective/${this.props.match.params.userId}/${this.props.match.params.goalId}/${milestone.id}` : `/objective/${this.props.match.params.goalId}/${milestone.id}`}>{milestone.name}</a>
						</li>
					)}
					</ul>
					{!this.state.isOwned &&
						<div>
							<button className="btn btn-primary"><i className="fas fa-plus"></i> Add</button><br/>
						</div>
					}
      </div>
    );
  }
}


export default Goal;
