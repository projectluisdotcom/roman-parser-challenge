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
  private readonly allChars: string[] = Object.keys(this.symbols)
  private readonly allNumerals: number[] = Object.values(this.symbols)

  private validate(value: any) {
    
  }

  // TODO: Implement
  parse(value: number): string {
    this.validate(value)

    return "TODO"
  }
}
