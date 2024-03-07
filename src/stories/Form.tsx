import { CodeDoc } from "./util/CodeDoc"

function noChange() {}

export function Form() {
  return (
    <fieldset>
      <legend>Form Demo</legend>
      <div>
        <input type="text" defaultValue="Input Text" />
        <CodeDoc>input type=text</CodeDoc>
      </div>
      <div>
        <input type="search" defaultValue="Input Search" />
        <CodeDoc>input type=search</CodeDoc>
      </div>
      <div>
        <input type="button" defaultValue="Input Button" />
        <CodeDoc>input type=button</CodeDoc>
      </div>
      <div>
        <input type="number" defaultValue="336699" />
        <CodeDoc>input type=number</CodeDoc>
      </div>
      <div>
        <input type="date" />
        <CodeDoc>input type=date</CodeDoc>
      </div>
      <div>
        <input type="datetime-local" />
        <CodeDoc>input type=datetime-local</CodeDoc>
      </div>
      <div>
        <input type="color" defaultValue="#6FF" />
        <CodeDoc>input type=color</CodeDoc>
      </div>
      <div>
        <input type="file" />
        <CodeDoc>input type=file</CodeDoc>
      </div>
      <div>
        <select>
          <option>Value</option>
        </select>
        <CodeDoc>select</CodeDoc>
      </div>
      <div>
        <input type="checkbox" id="chk1" />
        <label htmlFor="chk1">Label for Checkbox</label>
        <CodeDoc>input type=checkbox</CodeDoc>
      </div>
      <div>
        <input type="radio" id="rdi1" />
        <label htmlFor="rdi1">Label for Radio Box</label>
        <CodeDoc>input type=radio</CodeDoc>
      </div>
    </fieldset>
  )
}
