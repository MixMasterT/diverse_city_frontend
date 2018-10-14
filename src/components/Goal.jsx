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

    this.state = {
			date: new Date(),
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
        <h3>{this.props.goal.name}</h3>
				<p>
          {this.props.goal.description.split('\n').map((line, index)=>
            <span key={index}><br/>{line}</span>
				  )}
        </p>
				<div className="list-group milestone-list-group">
					{this.props.goal.milestones.map((milestone)=>
						<div key={milestone.muid} className="list-group-item milestone-link">
								<div className="milestone-icon">
                  {this.state.isOwned && milestone.completed ?
                    <i className="far fa-check-square"></i>
                  :
                    <i className="far fa-square"></i>
                  }
								</div>
                <Link to={this.state.isOwned? `/objective/${this.props.match.params.userId}/${this.props.goal.g_id}/${milestone.muid}` : `/objective/${this.props.goal.g_id}/${milestone.muid}`}>{milestone.name}</Link>
            </div>
					)}
				</div>
				{!this.props.isOwned &&
					<div className="text-center">
						<button id="start-goal" className="btn btn-primary"><i className="fas fa-plus"></i> Start Goal</button><br/>
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
