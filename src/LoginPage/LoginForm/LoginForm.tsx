import * as React from 'react';
import {useState} from 'react';
import {useLogin, useNotify} from 'react-admin';
import {Box, Button, FormControl, IconButton, InputAdornment, TextField, Typography} from '@mui/material';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import * as yup from 'yup';
import {
	boxStyle,
	buttonFormStyle,
	helperText,
	inputLabelStyle,
	inputStyle,
	titleForm
} from "LoginPage/LoginForm/styles";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';

export type LoginFormValues = {
	email: string,
	password: string,
}

export const LoginForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const login = useLogin();
	const notify = useNotify();

	const {register, handleSubmit} = useForm<LoginFormValues>()

	const onSubmit = (data: LoginFormValues) => {
		login(data)
			.then(res => {
				notify('Success!')
			})
			.catch(error => {
				notify('Error: Login failed!')
			})
	};

	const handleTogglePasswordVisibility = () => {
		setShowPassword(prevShowPassword => !prevShowPassword);
	};

	return (
		<Box sx={boxStyle}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormControl>
					<Typography variant={"h5"} sx={titleForm}>
						Login to lorem ipsum
					</Typography>
					<Typography sx={helperText}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
						Данные для логина. Email test@nyblecraft.com Password 12345678qQ
					</Typography>
					<FormControl variant="standard">
						<Typography sx={inputLabelStyle}>Email</Typography>
						<TextField
							id="email-input"
							type="email"
							placeholder="Enter your email"
							{...register('email')}
							variant={'standard'}
							sx={inputStyle}
							InputProps={{
								disableUnderline: true,
							}}
							required
						/>
					</FormControl>
					<FormControl variant="standard">
						<Typography sx={inputLabelStyle}>Password</Typography>
						<TextField
							id="password-input"
							type={showPassword ? 'text' : 'password'}
							placeholder="Enter your password"
							{...register('password')}
							required
							sx={inputStyle}
							variant={'standard'}
							InputProps={{
								disableUnderline: true,
								endAdornment: (
									<InputAdornment position="end">
										<IconButton onClick={handleTogglePasswordVisibility}>
											{showPassword ? <VisibilityOffOutlinedIcon/> : <VisibilityIcon/>}
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
					</FormControl>
					<Button type="submit" variant="contained" sx={buttonFormStyle}>
						Login
					</Button>
				</FormControl>
			</form>
		</Box>
	)
}
