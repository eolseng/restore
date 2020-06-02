import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../../components/pages/home/home';
import {BrowserRouter} from "react-router-dom";

afterEach(cleanup)

test('should take snapshot', () => {
    const {asFragment} = render(
        <BrowserRouter>
            <Home/>
        </BrowserRouter>);

    expect(asFragment(<Home/>)).toMatchSnapshot()
});

test('display restore', () => {

    const { getByText } = render(<BrowserRouter><Home /></BrowserRouter>);
    const h1 = getByText(/Restore - pant dine klær i dag/);
    expect(h1).toBeInTheDocument();
});


