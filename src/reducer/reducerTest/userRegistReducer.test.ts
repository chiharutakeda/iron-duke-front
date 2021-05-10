import { userRegistReducer, initialUserForm } from '../userRegistReducer';

test('Login Email input xxxx output xxxx', () => {
  expect(userRegistReducer(initialUserForm, { type: 'CHANGE_EMAIL', payload: 'xxxx' })).toStrictEqual({
    email: 'xxxx',
    password: '',
  });
});

test('Login password input zzzz output zzzz', () => {
  expect(userRegistReducer(initialUserForm, { type: 'CHANGE_PASSWORD', payload: 'zzzz' })).toStrictEqual({
    email: '',
    password: 'zzzz',
  });
});