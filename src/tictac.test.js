import { checkWinningPlayer, getWinningSquares } from "./tictactoe";

test("checkWinningPlayer", () => {
  expect(
    checkWinningPlayer([
      "X", "X", "X",
      "", "O", "",
      "O", "", "O",
    ])
  ).toBe("X");
  expect(
    checkWinningPlayer([
      "X", "", "X",
      "", "O", "",
      "O", "", "O",
    ])
  ).toBe("");
  expect(
    checkWinningPlayer([
      "X", "X", "O",
      "", "O", "",
      "O", "", "O",
    ])
  ).toBe("O");
  expect(
    checkWinningPlayer([
      "X", "O", "X",
      "", "O", "X",
      "O", "", "X",
    ])
  ).toBe("X");
});

test("getWinningSquares", () => {
  expect(getWinningSquares([
    "X", "X", "X",
    "", "O", "",
    "O", "", "O",
  ])).toStrictEqual([0,1,2]);
  expect(getWinningSquares([
    "O", "O", "X",
    "", "O", "",
    "O", "", "O",
  ])).toStrictEqual([0,4,8]);
  expect(getWinningSquares([
    "X", "O", "X",
    "", "O", "",
    "O", "O", "",
  ])).toStrictEqual([1,4,7]);
});
