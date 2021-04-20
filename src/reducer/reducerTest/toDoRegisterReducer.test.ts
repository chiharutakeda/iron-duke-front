import { ToDoRegistReducer, initialToDoRegist } from '../toDoRegistReducer';

test('Regist lastname input takeda output takeda ', () => {
  expect(ToDoRegistReducer(initialToDoRegist, { type: 'CHANGE_LAST_NAME', payload: 'takeda' })).toStrictEqual({
    todo: {
      firstName: '',
      lastName: 'takeda',
      todo: '',
    },
  });
});

test('Regist firstname input chiharu output chiahru', () => {
  expect(ToDoRegistReducer(initialToDoRegist, { type: 'CHANGE_FIRST_NAME', payload: 'chiharu' })).toStrictEqual({
    todo: {
      firstName: 'chiharu',
      lastName: '',
      todo: '',
    },
  });
});

test('Regist todo input hello output hello', () => {
  expect(ToDoRegistReducer(initialToDoRegist, { type: 'CHANGE_TODO', payload: 'hello' })).toStrictEqual({
    todo: {
      firstName: '',
      lastName: '',
      todo: 'hello',
    },
  });
});
