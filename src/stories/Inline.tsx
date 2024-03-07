import { BlockWrapper, CodeDoc } from "./util/HelperComponents"

export function Inline() {
  return (
    <BlockWrapper>
      <p>
        <b>Bold</b> <CodeDoc>b</CodeDoc>
      </p>
      <p>
        <strong>Strong</strong> <CodeDoc>strong</CodeDoc>
      </p>
      <p>
        <i>Italic</i> <CodeDoc>i</CodeDoc>
      </p>
      <p>
        <em>Emphasis</em> <CodeDoc>em</CodeDoc>
      </p>
      <p>
        <a href="#">Link</a> <CodeDoc>a</CodeDoc>
      </p>
      <p>
        Before<sup>Note</sup> <CodeDoc>sup</CodeDoc>
      </p>
      <p>
        Before<sub>Note</sub> <CodeDoc>sub</CodeDoc>
      </p>
      <p>
        <code>count++</code> <CodeDoc>code</CodeDoc>
      </p>
      <p>
        <abbr title="to be done">TBD</abbr> <CodeDoc>abbr</CodeDoc>
      </p>
    </BlockWrapper>
  )
}
