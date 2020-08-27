import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Board from "./Board";

test("start board", () => {
  const { container } = render(<Board />);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="board"
    >
      <div
        class="nextUp"
      >
        Next up: X
      </div>
      <div
        class="board-row"
      >
        <button
          class="square "
          data-testid="square"
        />
        <button
          class="square "
          data-testid="square"
        />
        <button
          class="square "
          data-testid="square"
        />
      </div>
      <div
        class="board-row"
      >
        <button
          class="square "
          data-testid="square"
        />
        <button
          class="square "
          data-testid="square"
        />
        <button
          class="square "
          data-testid="square"
        />
      </div>
      <div
        class="board-row"
      >
        <button
          class="square "
          data-testid="square"
        />
        <button
          class="square "
          data-testid="square"
        />
        <button
          class="square "
          data-testid="square"
        />
      </div>
      <div
        class="history"
      >
        <button>
          Undo
        </button>
        <button>
          Redo
        </button>
      </div>
    </div>
  `);
});

test("select a square", () => {
  const { container, getAllByTestId } = render(<Board />);
  const squares = getAllByTestId("square");
  if (squares && squares.length) userEvent.click(getAllByTestId("square")[0]);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="board"
    >
      <div
        class="nextUp"
      >
        Next up: O
      </div>
      <div
        class="board-row"
      >
        <button
          class="square "
          data-testid="square"
        >
          X
        </button>
        <button
          class="square "
          data-testid="square"
        />
        <button
          class="square "
          data-testid="square"
        />
      </div>
      <div
        class="board-row"
      >
        <button
          class="square "
          data-testid="square"
        />
        <button
          class="square "
          data-testid="square"
        />
        <button
          class="square "
          data-testid="square"
        />
      </div>
      <div
        class="board-row"
      >
        <button
          class="square "
          data-testid="square"
        />
        <button
          class="square "
          data-testid="square"
        />
        <button
          class="square "
          data-testid="square"
        />
      </div>
      <div
        class="history"
      >
        <button>
          Undo
        </button>
        <button>
          Redo
        </button>
      </div>
    </div>
  `);
});

test("win a game", () => {
  const { container, getAllByTestId } = render(<Board />);
  const squares = getAllByTestId("square");
  if (squares && squares.length) {
    userEvent.click(getAllByTestId("square")[0]);
    userEvent.click(getAllByTestId("square")[4]);
    userEvent.click(getAllByTestId("square")[1]);
    userEvent.click(getAllByTestId("square")[5]);
    userEvent.click(getAllByTestId("square")[2]);
  }
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="board"
    >
      <div
        class="winner"
      >
        X Won!
      </div>
      <div
        class="board-row"
      >
        <button
          class="square winning"
          data-testid="square"
        >
          X
        </button>
        <button
          class="square winning"
          data-testid="square"
        >
          X
        </button>
        <button
          class="square winning"
          data-testid="square"
        >
          X
        </button>
      </div>
      <div
        class="board-row"
      >
        <button
          class="square "
          data-testid="square"
        />
        <button
          class="square "
          data-testid="square"
        >
          O
        </button>
        <button
          class="square "
          data-testid="square"
        >
          O
        </button>
      </div>
      <div
        class="board-row"
      >
        <button
          class="square "
          data-testid="square"
        />
        <button
          class="square "
          data-testid="square"
        />
        <button
          class="square "
          data-testid="square"
        />
      </div>
      <div
        class="history"
      >
        <button>
          Undo
        </button>
        <button>
          Redo
        </button>
      </div>
    </div>
  `);
});
