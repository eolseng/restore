import React, {useContext, useReducer} from "react";
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BrandSelector from "../../../../../components/pages/restore/brandSelector";
import {RestoreContext} from "../../../../../components/pages/restore/restoreContext";

afterEach(cleanup)

// A function that can be used in many tests
function renderBrandSelector(value) {
   return render(
        <RestoreContext.Provider value={value}>
            <BrandSelector/>
        </RestoreContext.Provider>
    );
}

// Mock state that i the same as the original with the values needed and can be used in many tests
const state = {
    maxSteps: 1,
    step: 1,
    brandId: null,
};

const value = {state};

test('does it render', () => {

    const { getByText, getByTestId } = renderBrandSelector(value);

    expect(getByText('BrandSelector')).toBeInTheDocument()
    expect(getByTestId('Max Steps')).toBeInTheDocument()
    expect(getByTestId('step')).toBeInTheDocument();
    expect(getByText('Next Step!')).toBeInTheDocument()
    expect(getByText('Previous Step!')).toBeInTheDocument()
    expect(getByText('Set Brand ID!')).toBeInTheDocument()
});
