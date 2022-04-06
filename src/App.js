import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { listActions } from './state/listSlice';

function App() {
	const [activity, setActivity] = useState('');
	const dispatch = useDispatch();

	const inputHandler = (e) => {
		setActivity(e.target.value);
	};

	const activityHandler = () => {
		dispatch(listActions.add(activity));
	};

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
		</div>
	);
}

export default App;
