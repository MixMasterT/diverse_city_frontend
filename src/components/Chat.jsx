import React from 'react';
import PropTypes from 'prop-types';

const modalStyle={
	display:"block"
}

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			Chat:{
				isOpen:props.isOpen,
				messages:[
					"hi",
					"how are you?"
				]
			},
			date:new Date()
		};
		this.closeModal=this.props.closeModal
  }

  render() {
    return (
      <div>
				<div className="modal fade show" style={modalStyle} id="exampleModal" tabIndex="-1" role="dialog">
						<div className="modal-dialog" role="document">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
									<button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeModal}>
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div className="modal-body">
									<h1>{this.state.Chat.name}</h1>
									<ul>
										<Widget />
									</ul>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.closeModal}>Close</button>
									<button type="button" className="btn btn-primary" onClick={this.closeModal}>Resolve</button>
								</div>
							</div>
						</div>
					</div>
        
      </div>
    );
  }
}


export default Chat;
