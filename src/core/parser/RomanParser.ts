import IParser from "./IParser"

export default class RomanParser implements IParser {
  static readonly id = "roman" as const

  static readonly errors = {
    negative: "No negative numbers",
    decimal: "No decimals",
    max: "Max number",
    invalid: "Invalid type",
  } as const

  readonly max = 4999 as const
  private readonly zero = "nulla" as const
  private readonly symbols = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  } as const
  private readonly characters: string[] = Object.keys(this.symbols)
  private readonly numberals: number[] = Object.values(this.symbols)

  private validate(value: any) {
    if (typeof value !== "number") {
      throw new Error(RomanParser.errors.invalid)
    }

    if (isNaN(value)) {
        throw new Error(RomanParser.errors.invalid)
    }

    if (value < 0) {
        throw new Error(RomanParser.errors.negative)
      }

    if (Math.floor(value) !== value) {
      throw new Error(RomanParser.errors.decimal)
    }

    if (value > this.max) {
      throw new Error(RomanParser.errors.max)
    }
  }

  parse(value: number): string {
    this.validate(value)

    if(value === 0) {
        return this.zero
    }

    const roman = []
    for (let i = 0; i < this.characters.length; i++) {
        while (value >= this.numberals[i]) {
            value -= this.numberals[i]
            roman.push(this.characters[i])
        }
    }

    return roman.join("")
  }
}
