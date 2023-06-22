import { screen, render } from "@testing-library/react"; 
import TodoFooter from "../TodoFooter";  

import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const MocTodoFooter = ({numberOfIncompleteTasks}) => {
  return(<BrowserRouter>
        <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>)  
}

it('should component render the correct amount of tasks', () => {
    render(<MocTodoFooter numberOfIncompleteTasks={5} />); 
    const paragraphElement = screen.getByText(/5 tasks left/i); 
    expect(paragraphElement).toBeInTheDocument();
})


it('should component render the correct amount of tasks', () => {
    render(<MocTodoFooter numberOfIncompleteTasks={1} />); 
    const paragraphElement = screen.getByText(/1 task left/i); 
    expect(paragraphElement).toBeInTheDocument();
})