import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const login = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        IRON-DUKE
      </Typography>
      <Box sx={{ my: 4 }}>
        <form className={'login'} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="email"
            required
            margin="dense"
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            required
            margin="dense"
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
      </Box>
    </Container>
  );
};

export default login;
