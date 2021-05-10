import React, { useReducer } from 'react';
import { gqlfetcher } from '@/fetch/fetcher';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { initialUserForm, userRegistReducer } from '@/reducer/userRegistReducer';
import { createUser_M } from '@/gql/gql';

const login = () => {
  const [state, dispatch] = useReducer(userRegistReducer, initialUserForm);
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        register
      </Typography>
      <form className={'register'} noValidate autoComplete="off">
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
          className={'RegistButton'}
          onClick={() => {
            gqlfetcher(createUser_M,{ createUserUserData: state });
          }}
        >
          Regist
        </Button>
      </form>
    </Container>
  );
};

export default login;
