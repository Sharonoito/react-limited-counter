import { fireEvent, render  } from "@testing-library/react";
import { Counter } from "./Counter";



describe(Counter, () => {

    // testing rendering
    test("counter render correctly", () => {
        render(<Counter />)
       
    } )

    // functionality test
    test("Increament add one more value to the counter when the increment button is clicked", () => {
        const { getByText } = render(<Counter />);
        const incrementBtn = getByText('Increment');
        const countDisplay = getByText('Count: 0');
      
        fireEvent.click(incrementBtn);
      
        expect(countDisplay.textContent).toBe('Count: 1');
    })

    test("Decrement remove a value from the counter when the decrement button is clicked", () => {
        const { getByText } = render(<Counter />);
        const decrementButton = getByText('Decrement');
        const countDisplay = getByText('Count: 0');

        fireEvent.click(decrementButton);

        expect(countDisplay.textContent).toBe('Count: 0');
    });

    // Edge case test
    test('does not decrement count below 0 and disables "Decrement" button', () => {
        const { getByText } = render(<Counter />);
        const decrementButton = getByText('Decrement');
        const countDisplay = getByText('Count: 0');

        fireEvent.click(decrementButton);

        expect(countDisplay.textContent).toBe('Count: 0');
        expect(decrementButton).toBeDisabled();
    });


      test('does not increment count above 10 and disables "Increment" button', () => {
        const { getByText } = render(<Counter />);
        const incrementButton = getByText('Increment');
        const countDisplay = getByText('Count: 0');

        for (let i = 1; i <= 10; i++) {
            fireEvent.click(incrementButton);
            expect(countDisplay.textContent).toBe(`Count: ${i}`);
          }
          
          fireEvent.click(incrementButton);
          expect(countDisplay.textContent).toBe('Count: 10');

    });

})


