import { screen, render , fireEvent } from "@testing-library/react"; 
import AddInput from "../AddInput";  


// this function do nothing because we dont care about how state update 
const mockSetTodos = jest.fn();

it('should Input exist on the doucument ', () => {
    render(<AddInput todos={[]} setTodos={mockSetTodos} />); 
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i) 
    expect(inputElement).toBeInTheDocument();
})

// write a test to see if you can type in the input (hint=> we need to trigger an event)

it('should Input change the value when the user type ', () => {
    render(<AddInput todos={[]} setTodos={mockSetTodos} />); 
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)  
    fireEvent.change(inputElement , {target:{value:"hi there"}})
    expect(inputElement.value).toBe("hi there");
})

// lets test when add button clicked the input will return to notheing --empty


it('should Input be empty when add button is cliced  ', () => {
    render(<AddInput todos={[]} setTodos={mockSetTodos} />); 
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)  
    const buttonElement = screen.getByRole("button" , {name:"Add"})
    fireEvent.change(inputElement, { target: { value: "hi there" } }) 
    fireEvent.click(buttonElement)
    expect(inputElement.value).toBe("");
})