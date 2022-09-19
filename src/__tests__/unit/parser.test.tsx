import RomanParser from "../../core/parser/RomanParser"

const dataSet: Array<[number, string]> = [
    [0, "nulla"], [1, "I"], [2, "II"], [3, "III"], [4, "IV"], [5, "V"], [6, "VI"], [7, "VII"], [8, "VIII"], [9, "IX"],
    [10, "X"], [11, "XI"], [12, "XII"], [13, "XIII"], [14, "XIV"], [15, "XV"], [16, "XVI"], [17, "XVII"], [18, "XVIII"], [19, "XIX"],
    [20, "XX"],
    [401, "CDI"],
    [449, "CDXLIX"],
    [450, "CDL"],
    [499, "CDXCIX"],
    [500, "D"],
    [999, "CMXCIX"],
    [1000, "M"],
    [1001, "MI"],
    [1009, "MIX"],
    [4000, "MMMM"],
    [4001, "MMMMI"],
    [4009, "MMMMIX"],
    [4999, "MMMMCMXCIX"],
]

const parser = new RomanParser()

it.each(dataSet)("parses arabic to roman", (input, result) => {
    expect(parser.parse(input)).toBe(result)
})

const errorSet: Array<[any, string]> = [
    [-1, RomanParser.errors.negative],
    [0.5, RomanParser.errors.decimal],
    [5000, RomanParser.errors.max],
    [undefined, RomanParser.errors.invalid],
    [null, RomanParser.errors.invalid],
    ["string", RomanParser.errors.invalid],
    [{}, RomanParser.errors.invalid],
    [[], RomanParser.errors.invalid],
]

it.each(errorSet)("handles errors", (input, errorMessage) => {
    expect(() => {
        parser.parse(input)
    }).toThrow(new Error(errorMessage))
})
