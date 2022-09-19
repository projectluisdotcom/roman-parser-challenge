import { useState } from "react"
import IParser from "../core/parser/IParser"

export type Props = {
    parser: IParser
    defaultValue: number
}

export const Parser = ({ parser, defaultValue }: Props) => {
    const [result, setResult] = useState(parser.parse(defaultValue))

    const handleChange = (value: string) => {
        if(value === "") {
            setResult("")
            return
        }
        
        try {
            setResult(parser.parse(parseInt(value)))
        } catch(e) {
            window.alert(e)
        }
    }

    return <div>
        <div>
            <label>Type your number to start parsing</label>
        </div>
        <div>
            <input type="number" placeholder={defaultValue + ""} onChange={e => handleChange(e.target.value)} min="0" max={parser.max} />
        </div>
        <div>
            <label>Result </label><b>{result}</b>
        </div>
    </div>
}
