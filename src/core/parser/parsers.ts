import BinaryParser from "./BinaryParser"
import IParser from "./IParser"
import RomanParser from "./RomanParser"

// TODO: Add new classes automatically to avoid touching this class when new parsers are added
// Then this will follow open/close principle
export default () => {
  return new Map<string, IParser>([
    [RomanParser.id, new RomanParser()],
    [BinaryParser.id, new BinaryParser()],
  ])
}
