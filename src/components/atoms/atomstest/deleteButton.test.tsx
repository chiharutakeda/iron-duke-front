import ReactTestRenderer from 'react-test-renderer';
import DeleteButton from '../DeleteButton';

it('DeleteButton', async () => {
  const tree = await ReactTestRenderer.create(
    <DeleteButton ID={1} />
  ).toJSON();
  await expect(tree).toMatchSnapshot();
});
