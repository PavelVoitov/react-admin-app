import React from 'react';
import {Admin, Resource} from 'react-admin';
import authProvider from "api/authProvider";
import {dataProvider} from "api/dataProvider";
import {ContactList} from "contacts";
import {LoginPage} from "LoginPage/LoginPage";

const App: React.FC = () => {
	return (
		<Admin
			authProvider={authProvider}
			loginPage={LoginPage}
			dataProvider={dataProvider}
		>
			<Resource name="contacts" list={ContactList}/>
		</Admin>
	);
};

export default App;

