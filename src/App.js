import { useState } from 'react';
import './App.css';

function App() {
	const [activity, setActivity] = useState('');

	const inputHandler = (e) => {
		setActivity(e.target.value);
	};

	const activityHandler = () => {
		console.log(activity);
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
