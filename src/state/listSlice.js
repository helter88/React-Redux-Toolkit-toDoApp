import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	taskList: [],
};

const listSlice = createSlice({
	name: 'list',
	initialState,
	reducers: {
		add(state, action) {
			state.taskList.push(action.payload);
		},
		remove(state, action) {
			state.taskList.filter((item) => item !== action.payload);
		},
	},
});

export const listActions = listSlice.actions;

export default listSlice;
