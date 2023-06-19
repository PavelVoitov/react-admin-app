import {AuthProvider} from 'react-admin'
import {instance} from "api/api";

//types
type AuthType = {
	email: string,
	password: string
}
type AuthDataType = {
	"refreshToken": "string",
	"accessToken": "string",
	"user": {
		"id": "string",
		"createdAt": "2023-06-09T18:16:57.248Z",
		"updatedAt": "2023-06-09T18:16:57.248Z",
		"email": "string",
		"firstName": "string",
		"lastName": "string"
	}
}

export const authProvider: AuthProvider = {
	// API request for user authentication
	login: async (params: AuthType) => {
		const {email, password} = params;
		try {
			const response = await instance.post("/test-api/auth/login", {email, password});
			if (response.status < 200 || response.status >= 300) {
				return new Error(response.statusText);
			}
			const authData: AuthDataType = response.data;
			localStorage.setItem('authToken', authData.accessToken);
			// object with user data to be used in the application
			const user = {id: authData.user.id, username: authData.user.firstName, accessToken: authData.accessToken};
			return Promise.resolve(user);
		} catch (error) {
			return Promise.reject(error);
		}
	},
	logout: () => {
		// clear authentication data from localStorage
		localStorage.removeItem('authToken');
		return Promise.resolve();
	},
	checkError: ({status}) => {
		if (status === 401 || status === 403) {
			localStorage.removeItem("authToken");
			return Promise.reject();
		}
		return Promise.resolve();
	},
	// called when the user navigates to a new location, to check for authentication
	checkAuth: () => {
		return localStorage.getItem("authToken")
			? Promise.resolve()
			: Promise.reject();
	},
	// called when the user navigates to a new location, to check for permissions / roles
	getPermissions: () => Promise.resolve(),
};

export default authProvider

