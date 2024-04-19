import { BlockWrapper, CodeDoc, InlineWrapper } from "./util/HelperComponents"

export function Form() {
  return (
    <fieldset>
      <legend>Fieldset Legend</legend>
      <BlockWrapper>
        <h2 style={{ fontSize: "2rem", marginTop: "2rem" }}>Text Fields:</h2>
        <InlineWrapper>
          <input type="text" defaultValue="Input Text" />
          <CodeDoc>input type=text</CodeDoc>
        </InlineWrapper>
        <InlineWrapper>
          <input type="search" defaultValue="Input Search" />
          <CodeDoc>input type=search</CodeDoc>
        </InlineWrapper>
        <InlineWrapper>
          <input type="number" defaultValue="336699" />
          <CodeDoc>input type=number</CodeDoc>
        </InlineWrapper>

        <h2 style={{ fontSize: "2rem", marginTop: "2rem" }}>Formatted:</h2>
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

        <h2 style={{ fontSize: "2rem", marginTop: "2rem" }}>Special:</h2>
        <InlineWrapper>
          <input type="color" defaultValue="#6FF" />
          <CodeDoc>input type=color</CodeDoc>
        </InlineWrapper>

        <h2 style={{ fontSize: "2rem", marginTop: "2rem" }}>Buttons:</h2>
        <InlineWrapper>
          <button>Button</button>
          <CodeDoc>button</CodeDoc>
        </InlineWrapper>
        <InlineWrapper>
          <input type="button" defaultValue="Input Button" />
          <CodeDoc>input type=button</CodeDoc>
        </InlineWrapper>
        <InlineWrapper>
          <input type="button" defaultValue="Reset Button" />
          <CodeDoc>input type=reset</CodeDoc>
        </InlineWrapper>
        <InlineWrapper>
          <input type="file" />
          <CodeDoc>input type=file</CodeDoc>
        </InlineWrapper>

        <h2 style={{ fontSize: "2rem", marginTop: "2rem" }}>
          Native Appearance:
        </h2>
        <InlineWrapper>
          <input type="range" />
          <CodeDoc>input type=range</CodeDoc>
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
      </BlockWrapper>
    </fieldset>
  )
}
