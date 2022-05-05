import { configureStore } from "@reduxjs/toolkit";
import postsResuser from "../redusers/postsResuser";
import usersReduser from "../redusers/usersReduser";

//Middleware
// позволяет нам прописывать action в виде (HEROES_FETCHING_ERROR ) строки в вызове dispatch

const stringMiddleware = () => (next) => (action) => {
	if (typeof action === 'string') {
		return next({
			type: action
		})
	}
	return next(action)
};

const store = configureStore({
	reducer:{users: usersReduser, posts: postsResuser},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
	// devTools: process.env.NODE_ENV !== 'production',
})

export default store;