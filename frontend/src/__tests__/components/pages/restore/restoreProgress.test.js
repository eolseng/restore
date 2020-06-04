import React from "react";
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {RestoreContext} from "../../../../components/pages/restore/restoreContext";
import RestoreProgress from "../../../../components/pages/restore/restoreProgress";

afterEach(cleanup)

// A function that can be used in many tests
function renderRestoreProgress(value) {
    return render(
        <RestoreContext.Provider value={value}>
            <RestoreProgress/>
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

test('is rendered', () => {

    const { getByTestId } = renderRestoreProgress(value);

    expect(getByTestId('1.step')).toBeInTheDocument()
    expect(getByTestId('2.step')).toBeInTheDocument()
    expect(getByTestId('3.step')).toBeInTheDocument()
    expect(getByTestId('4.step')).toBeInTheDocument()
});

test('element to contain text', () => {
    const { getByTestId } = renderRestoreProgress(value);

    expect(getByTestId('step-1')).toHaveTextContent('1')
    expect(getByTestId('find-product')).toHaveTextContent('Finn produkt')
    expect(getByTestId('step-2')).toHaveTextContent('2')
    expect(getByTestId('describe-product')).toHaveTextContent('Beskriv produkt')
    expect(getByTestId('step-3')).toHaveTextContent('3')
    expect(getByTestId('delivery-selection')).toHaveTextContent('Velg leveringsmetode')
    expect(getByTestId('step-4')).toHaveTextContent('4')
    expect(getByTestId('confirmation')).toHaveTextContent('Bekreftelse')
});

