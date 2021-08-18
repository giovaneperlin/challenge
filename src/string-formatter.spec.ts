//possible characters string a-zA-Z0-9 space -
//string always contains at least two a-zA-Z0-9
//string maximum length = 100
import StringFormatter from "./string-formatter";

describe("StringFormatter", () => {
  it.each([
    ["00-44 48 5555 8361", "004 448 555 583 61"],
    ["0 - 22 1985--324", "022 198 53 24"],
    ["ABC372654", "ABC 372 654"],
  ])("should format '%s' into '%s'", (input, expectedResult) => {
    const stringFormatter = new StringFormatter();

    const result = stringFormatter.format(input);

    expect(result).toEqual(expectedResult);
  });

  it.each([
    123 as unknown as string,
    undefined as unknown as string,
    null as unknown as string,
    "",
    "0",
    "0 -",
    "A".repeat(101),
    "123*",
  ])("should throw error when input is '%s'", (input) => {
    const stringFormatter = new StringFormatter();

    expect(() => {
      stringFormatter.format(input);
    }).toThrow();
  });
});
