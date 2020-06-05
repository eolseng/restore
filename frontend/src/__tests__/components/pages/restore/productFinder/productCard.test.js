import React from "react";
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {ProductCard} from "../../../../../components/pages/restore/productFinder/productCard";
import {RestoreContext} from "../../../../../components/pages/restore/restoreContext";
import RestoreProgress from "../../../../../components/pages/restore/restoreProgress";
/*
// A function that can be used in many tests
function renderProductCard(value) {
    return render(
        <RestoreContext.Provider value={value}>
            <ProductCard product={mockProduct} imageIndex={0}/>
        </RestoreContext.Provider>
    );
}

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
}
*/
test('Render product card', () => {
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
        }

        const {getByText} = render(<ProductCard product={mockProduct} imageIndex={0}/>)
        expect(getByText(name)).toBeInTheDocument()
        // expect(getByText(mockProduct.id)).toBeInTheDocument()
    }
)