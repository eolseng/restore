import React, {useContext} from "react";
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {BrowserRouter} from "react-router-dom";
import BrandSelector from "../../../../../components/pages/restore/brandSelector";

afterEach(cleanup)

test('display restore', () => {

    const { getByText } = render(
        <BrowserRouter>
            <BrandSelector />
        </BrowserRouter>);

    const button = getByText('Set Brand ID!');
    expect(button).toBeInTheDocument();
});