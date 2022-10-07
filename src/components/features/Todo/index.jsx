/** @format */

import React from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList/index";

const TodoFeature = (props) => {
	const todoList = [
		{
			id: 1,
			title: "Eat",
		},
		{
			id: 2,
			title: "Drik",
		},
		{
			id: 3,
			title: "Sleep",
		},
	];
	return (
		<div>
			<TodoList todoList={todoList}></TodoList>
		</div>
	);
};

TodoFeature.propTypes = {};

export default TodoFeature;
