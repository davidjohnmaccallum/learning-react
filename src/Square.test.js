import React from "react";
import { render } from "@testing-library/react";
import Square from "./Square";

test("render X square", () => {
  const { container } = render(<Square value="X" isWinning={false} />);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <button
      class="square "
      data-testid="square"
    >
      X
    </button>
  `);
});

test("render O winning square", () => {
  const { container } = render(<Square value="O" isWinning={true} />);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <button
      class="square winning"
      data-testid="square"
    >
      O
    </button>
  `);
});
