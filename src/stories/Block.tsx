import { CodeDoc } from "./util/CodeDoc";

export function Block() {
  return <>
  <h1>
    Header <CodeDoc>h1</CodeDoc>
  </h1>
  <h2>
    Header <CodeDoc>h2</CodeDoc>
  </h2>
  <h3>
    Header <CodeDoc>h3</CodeDoc>
  </h3>
  <h4>
    Header <CodeDoc>h4</CodeDoc>
  </h4>
  <h5>
    Header <CodeDoc>h5</CodeDoc>
  </h5>
  <h6>
    Header <CodeDoc>h6</CodeDoc>
  </h6>
  <p>
    Paragraph <CodeDoc>p</CodeDoc>
  </p>
  <pre>
    Pre <CodeDoc>pre</CodeDoc>
  </pre>
  <ol>
    <li>
      Ordered List Item <CodeDoc>ol</CodeDoc>
    </li>
  </ol>
  <ul>
    <li>
      Unordered List Item <CodeDoc>ul</CodeDoc>
    </li>
  </ul>
</>
}
