const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
});

test("Books names shouldn't be sorted in ascending order", () => {
  const input = ["Властелин Колец", "Властелин Колец"];
  const result = sorting.sortByName(input);
  const expected = ["Властелин Колец", "Властелин Колец"];

  expect(result).toEqual(expected);
});
