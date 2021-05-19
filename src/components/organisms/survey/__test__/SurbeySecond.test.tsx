import ReactTestRenderer from 'react-test-renderer';
import SurbeySecond from '../SurbeySecond';

it('SurbeySecond', async () => {
  const tree = await ReactTestRenderer.create(<SurbeySecond />).toJSON();
  await expect(tree).toMatchSnapshot();
});
