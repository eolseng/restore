import React from "react";
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../../components/pages/home/home';
import {BrowserRouter} from "react-router-dom";

afterEach(cleanup)
/*
test('should take snapshot', () => {
    const {asFragment} = render(
        <BrowserRouter>
            <Home/>
        </BrowserRouter>);

    expect(asFragment(<Home/>)).toMatchSnapshot()
}); */

test('display restore', () => {

    const { getByText } = render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>);

    const h1 = getByText(/Restore - pant dine klær i dag/);
    expect(h1).toBeInTheDocument();
});

test('start button clicked and navigates to restore', ()  => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    );

    fireEvent.click(getByTestId('start-button'));

    expect(window.location.pathname).toEqual('/restore')
});

test('start button2 clicked and navigates to restore', ()  => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    );

    fireEvent.click(getByTestId('start-button2'));

    expect(window.location.pathname).toEqual('/restore')
});

test('login button clicked and navigates to login page', () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    );

    fireEvent.click(getByTestId('login-button'));

    expect(window.location.pathname).toEqual('/login')
});

test('login button2 clicked and navigates to login page', () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    );

    fireEvent.click(getByTestId('login-button2'));

    expect(window.location.pathname).toEqual('/login')
});








