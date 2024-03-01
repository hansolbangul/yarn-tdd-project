import App from "../App.tsx";
import { render, screen } from "@testing-library/react";

test("Renders main element", async () => {
    render(<App/>);

    const title = await screen.findByText(/Edit/)
    expect(title).toBeInTheDocument();
});
