import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { listActions } from './state/listSlice';

function App() {
	const [activity, setActivity] = useState('');
	const dispatch = useDispatch();
	const activityList = useSelector((state) => state.taskList);

	const inputHandler = (e) => {
		setActivity(e.target.value);
	};

	const activityHandler = () => {
		dispatch(listActions.add(activity));
	};

	let displayActivity = activityList?.map((activity) => (
		<li key={Math.random()}>{activity}</li>
	));

	return (
		<div className="App">
			<h1>Your Activity List:</h1>
			<input
				type="text"
				placeholder="Enter your activity"
				value={activity}
				onChange={inputHandler}
			/>
			<button onClick={activityHandler}>Add actity</button>
			<ul>{displayActivity}</ul>
		</div>
	);
}

export default App;
