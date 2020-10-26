import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import InfoBox from "../../ui/InfoBox/InfoBox";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function CreateUserView(props) {
  const {
    signUpValues,
    handleChangeName,
    handleChangeLastname,
    handleChangeUsername,
    handleChangeEmail,
    handleChangePassword,
    handleSignUp
  } = props;

  const {
    name,
    lastname,
    username,
    email,
    password,
    showResultSignUp,
    isValidName,
    isValidLastName,
    isValidUsername,
    isValidEmail,
    isValidPassword,
    isUserSignedUp,
    isServerError,
    serverMessage
  } = signUpValues;

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                error={showResultSignUp && !isValidName}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={name}
                onChange={(e) => handleChangeName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error={showResultSignUp && !isValidLastName}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lastname}
                onChange={(e) => handleChangeLastname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={showResultSignUp && !isValidUsername}
                variant="outlined"
                required
                fullWidth
                id="username-text-field"
                label="Username"
                name="username"
                autoComplete="username"
                value={username}
                onChange={(e) => handleChangeUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={showResultSignUp && !isValidEmail}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => handleChangeEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Tooltip
                title="Minimum eight characters, at least one letter, one nomber and one special character"
              >
                <TextField
                  error={showResultSignUp && !isValidPassword}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => handleChangePassword(e.target.value)}
                />
              </Tooltip>
            </Grid>
          </Grid>
          {showResultSignUp && isUserSignedUp ?
            (<InfoBox
              type='success'
              isVisible={true}
              text='User created'
            />) : (<Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSignUp}
          >
            Sign Up
          </Button>)}
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
          {showResultSignUp && !isUserSignedUp && (!isValidEmail || !isValidPassword || !isValidUsername) && (<InfoBox
            type='error'
            isVisible={true}
            text='Invalid user data.'
          />)}
          {showResultSignUp && isServerError && (<InfoBox
            type='error'
            isVisible={true}
            text={serverMessage}
          />)}
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

CreateUserView.propTypes = {
  signUpValues: PropTypes.object.isRequired,
  handleChangeName: PropTypes.func.isRequired,
  handleChangeLastname: PropTypes.func.isRequired,
  handleChangeUsername: PropTypes.func.isRequired,
  handleChangeEmail: PropTypes.func.isRequired,
  handleChangePassword: PropTypes.func.isRequired,
  handleSignUp: PropTypes.func.isRequired
}