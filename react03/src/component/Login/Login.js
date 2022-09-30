import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { useLoginMutation, useRegisterMutation } from "../../store/MemberApi";
import { login } from "../../store/MemberSlice";
import classes from './Login.module.css';

const Login = () => {
    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const unameRef = useRef();
    const pwdRef = useRef();
    const emailRef = useRef();

    const [regFn, { error: regErrpr }] = useRegisterMutation();
    const [loginFn, { error: loginErrpr }] = useLoginMutation();

    const dispatch = useDispatch();
    const _history = useHistory();
    const _location = useLocation();


    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const loginHandle = () => {
        const username = unameRef.current.value;
        const password = pwdRef.current.value;
        const email = emailRef.current.value;
        const identifier = username;
        if (email) {
            //register
            regFn({
                username,
                password,
                email
            }).then(res => console.log(res))
                .catch(err => console.log(err))
        } else {
            loginFn({
                identifier,
                password
            }).then(res => {
                const err = res?.error;
                if (err) {
                    console.log(err.data.error.message)
                } else {
                    console.log(res?.data?.jwt);
                    dispatch(login({
                        token: res.data.jwt,
                        user: res.data.user
                    }))
                    _history.push(_location.state.from.pathname);
                }
            })
        }


    }
    return <>
        <div className={classes.Login}>
            <TextField inputRef={unameRef} required id="username" label="UserName" />
            <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    inputRef={pwdRef}
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>
            <TextField inputRef={emailRef} required id="emial" label="Email" />
            <Button variant="contained" onClick={loginHandle}>Login</Button>
        </div>
    </>;
}

export default Login;