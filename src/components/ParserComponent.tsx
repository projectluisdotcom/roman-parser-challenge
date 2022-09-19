import { useState } from "react"
import IParser from "../core/parser/IParser"

export type Props = {
    parser: IParser
    defaultValue: number
}

export const Parser = ({ parser, defaultValue }: Props) => {
    const [result, setResult] = useState(parser.parse(defaultValue))

    return <div>
        <div>
            <label>Type your number to start parsing</label>
        </div>
        <div>
            <input type="number" placeholder={defaultValue + ""} onChange={e => setResult(parser.parse(+e.target.value))} />
        </div>
        <div>
            <label>Result </label><b>{result}</b>
        </div>
    </div>
}
