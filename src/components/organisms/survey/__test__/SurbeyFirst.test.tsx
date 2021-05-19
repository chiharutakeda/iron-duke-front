import ReactTestRenderer from 'react-test-renderer';
import SurbeyFirst from '../SurbeyFirst';

it('SurbeyFirst', async () => {
  const tree = await ReactTestRenderer.create(<SurbeyFirst />).toJSON();
  await expect(tree).toMatchSnapshot();
});
