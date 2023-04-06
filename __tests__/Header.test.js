import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Header from '../src/components/Header';
import { LOGGED_IN_SCREEN_NAME } from '../src/constants/screenConstants';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

jest.mock('react-native', () => {
    return {
      StyleSheet: {
        create: () => ({}),
      },
    };
  });

describe('Header', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Header />);
    const backButton = getByTestId('back-button');
    expect(backButton).toBeTruthy();
  });

  it('navigates to home screen when back button is pressed', () => {
    const { getByTestId } = render(<Header />);
    const backButton = getByTestId('back-button');
    fireEvent.press(backButton);
    expect(navigation.navigate).toHaveBeenCalledWith(LOGGED_IN_SCREEN_NAME.home);
  });
});
