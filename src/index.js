import React from "react";
import ReactDOM from "react-dom";
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail author="Saad" timeAgo="Today at 5:00" comment="Nice Blog Post" avatar={faker.image.avatar()}/>	
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail author="Waqar" timeAgo="Today at 2:00" comment="Cool Post" avatar={faker.image.avatar()}/>
			</ApprovalCard>
			
			<ApprovalCard>
				<CommentDetail author="Bilal" timeAgo="Yesterday at 5:00" comment="Nice" avatar={faker.image.avatar()}/>
			</ApprovalCard>
			
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));