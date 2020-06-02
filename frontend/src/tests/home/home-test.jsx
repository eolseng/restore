import React from "react";
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';
import Home from '../../components/pages/home/home';

jest.mock('axios');

test('display restore', () => {

    const {asFragment} = render(<Home />)
    expect(asFragment(<Home />)).toMatchSnapshot();
});

