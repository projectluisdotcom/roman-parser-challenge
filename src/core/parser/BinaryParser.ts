import IParser from "./IParser";

export default class BinaryParser implements IParser {
    static id = "binary"

    parse(value: number): string {
        return (value >>> 0).toString(2)
    }
}
