import * as React from 'react';
import Link from 'next/link';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          <Link href="http://localhost:3000/iron-duke">
            <a>HOME</a>
          </Link>
        </Typography>
        <Typography variant="h4" component="h1" gutterBottom>
          <Link href="http://localhost:3000/iron-duke/Login">
            <a>LOGIN</a>
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}
