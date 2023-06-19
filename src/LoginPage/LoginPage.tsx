import {Box} from "@mui/material";
import {LoginForm} from "LoginPage/LoginForm/LoginForm";
import {VisualBlock} from "LoginPage/VisualBlock/VisualBlock";

const loginPageBox = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'flex-start',
	height: "100vh"
}

export const LoginPage = () => {

	return (
		<Box sx={loginPageBox}>
			<LoginForm />
			<VisualBlock/>
		</Box>
	)
}