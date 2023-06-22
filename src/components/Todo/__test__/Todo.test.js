
import { screen, render , fireEvent } from "@testing-library/react"; 
import Todo from "../Todo";  
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const MocTodo = () => {
    return (
        <BrowserRouter>
        <Todo />
        </BrowserRouter>
    )
} 

const addTask = (tasks) => {
     const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)  
    const buttonElement = screen.getByRole("button", { name: "Add" }) 
    return tasks.forEach(task => {
    fireEvent.change(inputElement, { target: { value:task } }) 
    fireEvent.click(buttonElement) 
    });
}

it('should Input value reflect on the list ', () => {
    render(<MocTodo/>); 
   addTask(['hi there'])
    const divElement = screen.getByText(/hi there/i) 
    expect(divElement).toBeInTheDocument();
}) 

// test that you can add multiple todos


it('should multiple  Input values reflect on the list ', () => {
    render(<MocTodo/>); 
    addTask(['hi there', 'ahmed', 'nasser', 'thabet']);
    const divElements = screen.getAllByTestId("task-container");  
    screen.debug();
    expect(divElements.length).toBe(4);
}) 