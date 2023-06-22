import { screen, render } from "@testing-library/react"; 
import Header from "../Header"; 

it('should component display Title', () => {
    render(<Header title="ahmed" />); 
    const headingElement = screen.getByText(/ahmed/i); 
    expect(headingElement).toBeInTheDocument();
})