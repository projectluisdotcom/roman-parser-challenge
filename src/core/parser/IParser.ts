export default interface IParser {
    parse(value: number): string
    get max(): number
}
