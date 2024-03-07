import { BlockWrapper, CodeDoc } from "./util/HelperComponents"

export function Block() {
  return (
    <BlockWrapper>
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
      <blockquote>
        Blockquote <CodeDoc>blockquote</CodeDoc>
      </blockquote>
      <div>
        <hr />
        <CodeDoc>hr</CodeDoc>
      </div>
      <pre>
        Pre <CodeDoc>pre</CodeDoc>
      </pre>
      <form>
        Form <CodeDoc>form</CodeDoc>
      </form>
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
      <table>
        <thead>
          <tr>
            <th>Header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Data <CodeDoc>table</CodeDoc>
            </td>
          </tr>
        </tbody>
      </table>
    </BlockWrapper>
  )
}
