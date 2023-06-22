import { screen, render } from "@testing-library/react"; 
import FollowersList from "../FollowersList"; 
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const MocFollowersList = () => {
    return (
        <BrowserRouter>
        <FollowersList />
        </BrowserRouter>
    )
}

it('should component display Title', async () => {
    render(<MocFollowersList  />); 
    const foloowersDivElements = await screen.findAllByTestId(/followers-itme/i); 
    expect(foloowersDivElements.length).toBe(5);
})