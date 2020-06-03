import React from "react";
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {BrowserRouter} from "react-router-dom";
import {ProductFilter} from "../../components/pages/restore/productFinder/productFilter";

afterEach(cleanup)

test('should take snapshot', () => {
    const {asFragment} = render(
        <BrowserRouter>
            <ProductFilter/>
        </BrowserRouter>);

    expect(asFragment(<ProductFilter/>)).toMatchSnapshot()
});