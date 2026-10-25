import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Strange Studio dashboard", () => {
  it("clearly labels the local prototype as non-live", () => {
    render(<App />);
    expect(screen.getByText("Prototype environment")).toBeInTheDocument();
    expect(screen.getByText(/No live agents or external integrations connected/)).toBeInTheDocument();
  });

  it("renders the workflow and truth classifications", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: /Intelligence railway/i })).toBeInTheDocument();
    expect(screen.getByText("Assumption")).toBeInTheDocument();
    expect(screen.getByText("Simulation")).toBeInTheDocument();
    expect(screen.getByText("Delivery remains gated by verification.")).toBeInTheDocument();
  });

  it("opens an inspector that discloses the fixture source", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: /Open inspector/i }));
    expect(screen.getByRole("complementary", { name: "System inspector" })).toBeInTheDocument();
    expect(screen.getByText("local-demo-fixture")).toBeInTheDocument();
    expect(screen.getByText("Live event ingestion not implemented")).toBeInTheDocument();
  });

  it("allows switching the selected navigation perspective", () => {
    render(<App />);
    fireEvent.click(screen.getAllByRole("button", { name: /Memory City/i })[0]);
    expect(screen.getByText("Memory City", { selector: "strong" })).toBeInTheDocument();
  });
});
