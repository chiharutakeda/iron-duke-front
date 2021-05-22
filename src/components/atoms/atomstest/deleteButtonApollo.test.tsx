import ReactTestRenderer from 'react-test-renderer';
import DeleteButtonApollo from '../DeleteButtonApollo';
import { client } from '@/pages/iron-duke/index';
import { ApolloProvider } from '@apollo/client';
it('DeleteButtonApollo', async () => {
  const tree = await ReactTestRenderer.create(
    <ApolloProvider client={client}>
      <DeleteButtonApollo ID={1} />
    </ApolloProvider>
  ).toJSON();
  await expect(tree).toMatchSnapshot();
});
