import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useSWR from 'swr';
import { normalFetcher } from '../../graphql/fetcher';

const query = `query{
  sampleHello
}`;
export default function Index() {
  const { data, error } = useSWR(query, normalFetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          To Do Listd
        </Typography>
      </Box>
    </Container>
  );
}
