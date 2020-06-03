import React from "react";
import { render, cleanup, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';
import {BrowserRouter} from "react-router-dom";
import { ProductFinder } from '../../../../../components/pages/restore/productFinder/productFinder';
import {ProductList} from "../../../../../components/pages/restore/productFinder/productList";

afterEach(cleanup)

test('fetches and displays data', async () => {
    axiosMock.get.mockResolvedValueOnce({ data: { greeting: 'hello there'} });

    const url = '/greeting';
    const { getByTestId } = render(
        <BrowserRouter>
            <ProductFinder url={url}/>
        </BrowserRouter>
    );

    const resolvedProductList = await waitForElement(() => getByTestId('mocktest'))

    expect(resolvedProductList).toHaveTextContent('hello there');
    expect(axiosMock.get).toHaveBeenCalled(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
});



