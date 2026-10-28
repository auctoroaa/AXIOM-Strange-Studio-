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
    expect(screen.getAllByRole("heading", { name: /Intelligence railway/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByText("Assumption").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Simulation").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Delivery remains gated by verification.").length).toBeGreaterThan(0);
  });

  it("opens an inspector that discloses the fixture source", () => {
    render(<App />);
    fireEvent.click(screen.getAllByRole("button", { name: /Open inspector/i })[0]);
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
