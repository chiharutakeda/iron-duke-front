import React, { useReducer } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {
  initialLoginForm,
  loginReducer,
} from '@/reducer/loginReducer';

const login = () => {
  const [state, dispatch] = useReducer(
    loginReducer,
    initialLoginForm
  );
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        IRON-DUKE
      </Typography>
      <form className={'login'} noValidate autoComplete="off">
        <TextField
          value={state.email}
          onChange={(e) => {
            dispatch({
              type: 'CHANGE_EMAIL',
              payload: e.target.value,
            });
          }}
          id="standard-basic"
          label="email"
          required
          margin="dense"
          fullWidth
        />
        <TextField
          value={state.password}
          onChange={(e) => {
            dispatch({
              type: 'CHANGE_PASSWORD',
              payload: e.target.value,
            });
          }}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          required
          margin="dense"
          fullWidth
        />
        <div />
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={'LoginButton'}
        >
          Login
        </Button>
      </form>
    </Container>
  );
};

export default login;
