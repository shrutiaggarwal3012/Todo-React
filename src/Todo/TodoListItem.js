import React, {Component} from 'react';
import './TodoListItem.css';

class TodoListItem extends Component {
	render() {
		return (
			<li className="TodoListItem">
				<input type="checkbox" value={this.props.title}/>
				<span>{this.props.title}</span>
				<p>{this.props.description}</p>
			</li>
		)
	}
}

export default TodoListItem;