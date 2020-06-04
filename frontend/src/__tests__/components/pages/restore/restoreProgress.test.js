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

    expect(getByTestId('prev-step')).toBeInTheDocument()
    expect(getByTestId('1.Step')).toBeInTheDocument()
    expect(getByTestId('2.Step')).toBeInTheDocument()
    expect(getByTestId('3.Step')).toBeInTheDocument()
    expect(getByTestId('4.Step')).toBeInTheDocument()
    expect(getByTestId('next-step')).toBeInTheDocument()
});

test('element to contain text', () => {
    const { getByTestId } = renderRestoreProgress(value);

    expect(getByTestId('prev-step')).toHaveTextContent('Tilbake')
    expect(getByTestId('1.Step')).toHaveTextContent('1. Finn produkt')
    expect(getByTestId('2.Step')).toHaveTextContent('2. Beskriv produkt')
    expect(getByTestId('3.Step')).toHaveTextContent('3. Velg leveringsmetode')
    expect(getByTestId('4.Step')).toHaveTextContent('4. Bekreftelse')
    expect(getByTestId('next-step')).toHaveTextContent('Neste')
});

