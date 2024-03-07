import { CodeDoc, InlineWrapper } from "./util/CodeDoc"

export function Form() {
  return (
    <fieldset>
      <legend>Fieldset Legend</legend>
      <InlineWrapper>
        <input type="text" defaultValue="Input Text" />
        <CodeDoc>input type=text</CodeDoc>
      </InlineWrapper>
      <InlineWrapper>
        <input type="search" defaultValue="Input Search" />
        <CodeDoc>input type=search</CodeDoc>
      </InlineWrapper>
      <InlineWrapper>
        <input type="button" defaultValue="Input Button" />
        <CodeDoc>input type=button</CodeDoc>
      </InlineWrapper>
      <InlineWrapper>
        <input type="number" defaultValue="336699" />
        <CodeDoc>input type=number</CodeDoc>
      </InlineWrapper>
      <InlineWrapper>
        <input type="range" />
        <CodeDoc>input type=range</CodeDoc>
      </InlineWrapper>
      <InlineWrapper>
        <input type="date" />
        <CodeDoc>input type=date</CodeDoc>
      </InlineWrapper>
      <InlineWrapper>
        <input type="datetime-local" />
        <CodeDoc>input type=datetime-local</CodeDoc>
      </InlineWrapper>
      <InlineWrapper>
        <input type="time" />
        <CodeDoc>input type=time</CodeDoc>
      </InlineWrapper>
      <InlineWrapper>
        <input type="color" defaultValue="#6FF" />
        <CodeDoc>input type=color</CodeDoc>
      </InlineWrapper>
      <InlineWrapper>
        <input type="file" />
        <CodeDoc>input type=file</CodeDoc>
      </InlineWrapper>

      <InlineWrapper>
        <select>
          <option>Value</option>
        </select>
        <CodeDoc>select</CodeDoc>
      </InlineWrapper>
      <InlineWrapper>
        <input type="checkbox" id="chk1" />
        <label htmlFor="chk1">Label for Checkbox</label>
        <CodeDoc>input type=checkbox</CodeDoc>
      </InlineWrapper>
      <InlineWrapper>
        <input type="radio" id="rdi1" />
        <label htmlFor="rdi1">Label for Radio Box</label>
        <CodeDoc>input type=radio</CodeDoc>
      </InlineWrapper>
    </fieldset>
  )
}
