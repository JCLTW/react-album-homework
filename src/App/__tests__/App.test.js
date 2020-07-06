import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import UserInfo from '../../UserInfo/UserInfo';

test('should render App', () => {
  const { getByTestId } = render(<App />);
  const app = getByTestId('app');

  expect(app).not.toBeEmpty();
});

test('should render UserInfo', () => {
  const { getByTestId } = render(<UserInfo />);
  const userInfo = getByTestId('user-info');

  expect(userInfo).not.toBeEmpty();
});
