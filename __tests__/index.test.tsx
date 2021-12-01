import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import Home from '../pages/index';

describe('Home', () => {
  it('renders a heading', () => {
    const mocks: Array<MockedResponse> = [];
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home />
      </MockedProvider>
    );

    const heading = screen.getByText('NHS SuperGrid');

    expect(heading).toBeInTheDocument();
  });
});
