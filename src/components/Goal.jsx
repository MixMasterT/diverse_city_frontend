import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
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
		console.log('id is',this.props.match.params.id)
    this.state = {
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
    console.log(this.props);
    console.log(this.state);
    return (
      <div>
        <h3>{this.state.goal.name}</h3>
				<p>{this.state.goal.description.split('\n').map( (line,index)=>
				<span key={index}><br/>{line}</span>
				)}</p>
					<ul>
					{this.props.goal.milestones.map((milestone)=>
						<li style={listItem} key={milestone.id}>
								<div style={inline}>
								{this.state.isOwned && milestone.completed ?
								<i className="far fa-check-square"></i>
								:
								<i className="far fa-square"></i>
								}
								</div>
							<Link to={this.state.isOwned? `/objective/${this.props.match.params.userId}/${this.props.match.params.goalId}/${milestone.id}` : `/objective/${this.props.match.params.goalId}/${milestone.id}`}>{milestone.name}</Link>
						</li>
					)}
					</ul>
					{!this.props.isOwned &&
						<div>
							<button className="btn btn-primary"><i className="fas fa-plus"></i> Add</button><br/>
						</div>
					}
      </div>
    );
  }
}

Goal.propTypes = {
  isOwner: PropTypes.bool,
  goal: PropTypes.object
}


export default Goal;
