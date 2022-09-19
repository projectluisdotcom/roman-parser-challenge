import RomanParser from "../../core/parser/RomanParser"

const dataSet: Array<[number, string]> = [
    [12, "XII"],
]

it.each(dataSet)("parses arabic to roman", (input, result) => {
    const parser = new RomanParser()
    expect(parser.parse(input)).toBe(result)
})
