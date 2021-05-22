import ReactTestRenderer from 'react-test-renderer';
import SurbeyThird from '../SurbeyThird';

it('SurbeyThird', async () => {
  const tree = await ReactTestRenderer.create(
    <SurbeyThird />
  ).toJSON();
  await expect(tree).toMatchSnapshot();
});
