import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Filter from '../src/components/HomeScreenComponent/Filter';
import {Platform} from 'react-native';

jest.mock('react-native', () => ({
    Platform: {
      OS: 'ios',
    },
    Dimensions: {
      get: jest.fn().mockReturnValue({height: 768, width: 1024}),
    },
  }));

describe('Filter Component', () => {
  const mockRegions = ['Region 1', 'Region 2'];
  const mockSetCountries = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render "Filter by region" text initially', () => {
    const {getByText} = render(<Filter />);
    expect(getByText('Filter by region')).toBeTruthy();
  });

  it('should render the region list when the component is clicked', () => {
    const {getByTestId, queryByText} = render(
      <Filter regions={mockRegions} setCountries={mockSetCountries} />,
    );
    const component = getByTestId('filter-component');

    fireEvent.press(component);

    expect(queryByText('Region 1')).toBeTruthy();
    expect(queryByText('Region 2')).toBeTruthy();
  });

  it('should call setCountries when a region is clicked', () => {
    const {getByTestId, getByText} = render(
      <Filter regions={mockRegions} setCountries={mockSetCountries} />,
    );
    const component = getByTestId('filter-component');

    fireEvent.press(component);

    const region = getByText('Region 1');
    fireEvent.press(region);

    expect(mockSetCountries).toHaveBeenCalledTimes(1);
    expect(mockSetCountries).toHaveBeenCalledWith('Region 1');
  });
});
