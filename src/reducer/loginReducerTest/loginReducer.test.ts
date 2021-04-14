import { loginReducer, initialLoginForm } from '../loginReducer';

test('Login Email input xxxx output xxxx', () => {
  expect(
    loginReducer(initialLoginForm, { type: 'CHANGE_EMAIL', payload: 'xxxx' })
  ).toStrictEqual({ email: 'xxxx', password: '' });
});

test('Login password input zzzz output zzzz', () => {
  expect(
    loginReducer(initialLoginForm, { type: 'CHANGE_PASSWORD', payload: 'zzzz' })
  ).toStrictEqual({ email: '', password: 'zzzz' });
});
