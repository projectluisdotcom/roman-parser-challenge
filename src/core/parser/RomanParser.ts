import IParser from "./IParser";

export default class RomanParser implements IParser {
    static id = "roman"

    // TODO: Implement
    parse(value: number): string {
        return "XII"
    }
}
