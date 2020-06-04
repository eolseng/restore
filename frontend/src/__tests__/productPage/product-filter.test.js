import React from "react";
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {ProductCard} from "../../components/pages/restore/productFinder/productCard";
import {BrowserRouter} from "react-router-dom";
import Home from "../../components/pages/home/home";


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