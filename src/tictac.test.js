const tictactoe = require("./tictactoe");

test("checkWinningPlayer", () => {
  expect(
    tictactoe.checkWinningPlayer([
      "X", "X", "X",
      "", "O", "",
      "O", "", "O",
    ])
  ).toBe("X");
  expect(
    tictactoe.checkWinningPlayer([
      "X", "", "X",
      "", "O", "",
      "O", "", "O",
    ])
  ).toBe("");
  expect(
    tictactoe.checkWinningPlayer([
      "X", "X", "O",
      "", "O", "",
      "O", "", "O",
    ])
  ).toBe("O");
  expect(
    tictactoe.checkWinningPlayer([
      "X", "O", "X",
      "", "O", "X",
      "O", "", "X",
    ])
  ).toBe("X");
});

test("getWinningSquares", () => {
  expect(tictactoe.getWinningSquares([
    "X", "X", "X",
    "", "O", "",
    "O", "", "O",
  ])).toStrictEqual([0,1,2]);
  expect(tictactoe.getWinningSquares([
    "O", "O", "X",
    "", "O", "",
    "O", "", "O",
  ])).toStrictEqual([0,4,8]);
  expect(tictactoe.getWinningSquares([
    "X", "O", "X",
    "", "O", "",
    "O", "O", "",
  ])).toStrictEqual([1,4,7]);
});

test("updateHistory", () => {
  expect(tictactoe.updateHistory({
    history:[],
    state:"one",
    historyPointer:-1
  })).toStrictEqual(["one"]);
  expect(tictactoe.updateHistory({
    history:["one"],
    state:"two",
    historyPointer:-1
  })).toStrictEqual(["one", "two"]);
  expect(tictactoe.updateHistory({
    history:["one","two","three","four"],
    state:"aaa",
    historyPointer:1
  })).toStrictEqual(["one", "two", "aaa"]);
});
