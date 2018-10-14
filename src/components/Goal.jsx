import React from 'react';
import PropTypes from 'prop-types';
import { Widget,addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';


class Goal extends React.Component {
  constructor(props) {
    super(props);
		console.log('id is',this.props.match.params.id)
    this.state = {
			goal:{
				name:"Open A Bank Account",
				milestones:[
					{name:"Identification Card",id:1},
					{name:"Utility Bill",id:2},
					{name:"Deposit",id:3}
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
        <h1>{this.state.goal.name}</h1>
					<ul>
					{this.state.goal.milestones.map((milestone)=>
						<li key={milestone.id}>
					<a href={"/objective/"+milestone.id}>{milestone.name}</a>
						</li>
					)}
					</ul>
      </div>
    );
  }
}


export default Goal;
