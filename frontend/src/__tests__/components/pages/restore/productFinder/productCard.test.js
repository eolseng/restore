import React from "react";
import {render, cleanup, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {ProductCard} from "../../../../../components/pages/restore/productFinder/productCard";
import {RestoreContext} from "../../../../../components/pages/restore/restoreContext";

afterEach(cleanup);

// A function that can be used in many tests
function renderProductCard(value) {
    return render(
        <RestoreContext.Provider value={value}>
            <ProductCard product={mockProduct} imageIndex={0}/>
        </RestoreContext.Provider>
    );
}

//Mocking data for product
const name = "test_name"
const mockProduct = {
    id: 123,
    _links: {
        self: {
            href: "something.com"
        }
    },
    name: name,
    images: [{
        imgUrl: "somethingg.com",
        colorName: "hva enn jeg vil"
    }],
};

const state = {
    maxSteps: 1,
    step: 1,
    brandId: null,
};

const value = [ {state}, {mockProduct} ];

test('Render product card, and check that display card has attribute id', () => {
    const { getByText, getByTestId} = renderProductCard(value);

    expect(getByText(name)).toBeInTheDocument();
    expect(getByTestId('displayCard')).toHaveAttribute('id')
});