import * as React from 'react';
import {ChangeEvent, useState} from 'react';
import {useLogin, useNotify} from 'react-admin';
import {Box, Button, FormControl, IconButton, InputAdornment, TextField, Typography} from '@mui/material';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {Form, Formik} from "formik";
import * as yup from 'yup';
import {boxStyle, helperText, inputLabelStyle, inputStyle, titleForm} from "LoginPage/LoginForm/styles";

export const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const login = useLogin();
	const notify = useNotify();

	const onChangeInputEmail = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setEmail(e.target.value)
	}

	const onChangeInputPassword = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setPassword(e.target.value)
	}

	const handleSubmit = (data: typeof initialValues) => {
		login(data).then(res => notify('Success!'));
	};

	const handleTogglePasswordVisibility = () => {
		setShowPassword(prevShowPassword => !prevShowPassword);
	};

	const schema = yup.object({
		email: yup.string().required('Field is required'),
		password: yup.string().required('Field is required'),
	});

	const initialValues = {
		email: '',
		password: '',
	};

	return (
		<Box sx={boxStyle}>
			<Formik
				initialValues={initialValues}
				validationSchema={schema}
				onSubmit={handleSubmit}
			>
				<Form>
					<FormControl>
						<Typography marginBottom={'20px'} variant={"h5"} sx={titleForm}>
							Login Lorem ipsum dolor.
						</Typography>
						<Typography sx={helperText}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
						</Typography>
						<FormControl  variant="standard">
							<Typography sx={inputLabelStyle}>Email</Typography>
							<TextField
								id="email-input"
								name="email"
								type="email"
								placeholder="Enter your email"
								value={email}
								variant={'standard'}
								sx={inputStyle}
								onChange={onChangeInputEmail}
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
								name="password"
								type={showPassword ? 'text' : 'password'}
								placeholder="Enter your password"
								value={password}
								onChange={onChangeInputPassword}
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
						<Button type="submit" variant="contained" sx={{background: '#3626A7', textTransform: "capitalize", marginTop: '108px', width: '384px',
							height: '48px', borderRadius: '8px'}}>
							Login
						</Button>
					</FormControl>
				</Form>
			</Formik>
		</Box>
	)
}
