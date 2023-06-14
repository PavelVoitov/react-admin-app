import {AuthProvider} from "react-admin";

export const authProvider: AuthProvider = {
	// called when the user attempts to log in
	login: ({ email, password }) => {
		localStorage.setItem("email", email);
		localStorage.setItem("password", password);
		// accept all username/password combinations
		return Promise.resolve();
	},
	// called when the user clicks on the logout button
	logout: () => {
		localStorage.removeItem("email");
		localStorage.removeItem("password");
		return Promise.resolve();
	},
	// called when the API returns an error
	checkError: ({ status }) => {
		if (status === 401 || status === 403) {
			localStorage.removeItem("username");
			return Promise.reject();
		}
		return Promise.resolve();
	},
	// called when the user navigates to a new location, to check for authentication
	checkAuth: () => {
		return localStorage.getItem("username")
			? Promise.resolve()
			: Promise.reject();
	},
	// called when the user navigates to a new location, to check for permissions / roles
	getPermissions: () => Promise.resolve(),
};