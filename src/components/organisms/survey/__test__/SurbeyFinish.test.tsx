import ReactTestRenderer from 'react-test-renderer';
import SurbeyFinish from '../SurbeyFinish';

it('SurbeyFinish', async () => {
  const tree = await ReactTestRenderer.create(
    <SurbeyFinish />
  ).toJSON();
  await expect(tree).toMatchSnapshot();
});
