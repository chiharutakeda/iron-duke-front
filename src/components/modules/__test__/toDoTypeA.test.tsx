import ReactTestRenderer from 'react-test-renderer';
import ToDoTypeA from '../ToDoTypeA';
import {getAllToDolist_getAllToDolist} from '@/generated/getAllToDolist'

it('ToDotypeA', async () => {
  const todo: getAllToDolist_getAllToDolist = {
    __typename: 'TodoListEntity',
    createdAt: '2021-05-22T00:35:05.531Z',
    firstName: 'dddd',
    id: '61',
    lastName: 'fcf',
    todo: 'ddd',
  };
  const tree = await ReactTestRenderer.create(
    <ToDoTypeA todo={todo} key={4} />
  ).toJSON();
  await expect(tree).toMatchSnapshot();
});
