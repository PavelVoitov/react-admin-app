import {Box, Typography} from "@mui/material";
import {boxStyle} from "LoginPage/LoginForm/styles";
import imageLoginPage from '../../common/images/imageLoginPage.png'

const logoStyle = {
	fontWeight: 900,
	fontSize: "24px",
	lineHeight: "48px",
	textAlign: "left",
	marginLeft: "60px",
	textTransform: "uppercase",
	color: "#151515",
}

const helperText = {
	fontStyle: "normal",
	fontWeight: "800",
	fontSize: "32px",
	marginLeft: "60px",
	lineHeight: "40px",
	color: "#151515",
	letterSpacing: "0em",
	textAlign: "left",
	width: "499px"
}

export const VisualBlock = () => {
	return (
		<Box sx={boxStyle}>
			<img src={imageLoginPage} alt=""/>
			<Typography sx={logoStyle}>
				Logo
			</Typography>
			<Typography sx={helperText}>
				Lorem ipsum dolor sit amet consectetur adipiscing elit
			</Typography>
		</Box>
	)
}