import { CodeDoc } from "./util/CodeDoc"

export function Form() {
  return (
    <>
      <p>
        <input type="text" value="Input Text" onChange={() => null} />
        <CodeDoc>input type=text</CodeDoc>
      </p>
      <p>
        <select>
          <option>Value</option>
        </select>
        <CodeDoc>select</CodeDoc>
      </p>
      <p>
        <input type="checkbox" id="chk1" />
        <label htmlFor="chk1">Label for Checkbox</label>
        <CodeDoc>input type=checkbox</CodeDoc>
      </p>
      <p>
        <input type="radio" id="rdi1" />
        <label htmlFor="rdi1">Label for Radio Box</label>
        <CodeDoc>input type=radio</CodeDoc>
      </p>
    </>
  )
}
