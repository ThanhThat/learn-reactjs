/** @format */

import logo from "./logo.svg";
import "./App.css";
import TodoFeature from "./components/features/Todo/index.jsx";

function App() {
	return (
		<div className='App'>
			<h1>Todo List</h1>
			<TodoFeature></TodoFeature>
		</div>
	);
}

export default App;
