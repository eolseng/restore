import React, {useContext} from "react";
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BrandSelector from "../../../../../components/pages/restore/brandSelector";

afterEach(cleanup)

test('display button: Det Brand ID', () => {
    let brandId = 0;
    function mockSetBrandId () {
        brandId += 1;
    }

    const { getByText } = render(
        <button onClick={mockSetBrandId(1)}>Set Brand ID!</button>);

    const button = getByText('Set Brand ID!');
    expect(button).toBeInTheDocument();
});

test('display button: next step', () => {
    const mockState = {
        maxSteps: 4,
        step: 1,
        brandId: null
    };
    function prevStep() {
        mockState.step -= 1;
    }
    function nextStep() {
        mockState.step += 1;
    }
    function setBrandId() {
    }
    const { getByText, getByTestId } = render(
        <div>
            <h1>BrandSelector</h1>
            <p data-testid='Max Steps'>Max Steps: {mockState.maxSteps}</p>
            <p data-testid='Step'>Step: {mockState.step}</p>
            <button onClick={prevStep}>Previous Step!</button>
            <button onClick={nextStep}>Next Step!</button>
            <button onClick={setBrandId(1)}>Set Brand ID!</button>
        </div>
    );
    expect(getByText('BrandSelector')).toBeInTheDocument()
    expect(getByTestId('Max Steps')).toBeInTheDocument()
    expect(getByTestId('Step')).toBeInTheDocument()
    expect(getByText('Next Step!')).toBeInTheDocument()
    expect(getByText('Previous Step!')).toBeInTheDocument()
    fireEvent.click(getByText('Next Step!'));
    console.log(mockState.step)
    expect(getByTestId('Step')).toHaveTextContent('Step: 2')
});
