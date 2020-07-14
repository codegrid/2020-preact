import { h } from "preact";

export const Props = ({ string, number, bool, arr, obj, func }) => (
  <table border="1">
    <thead>
      <tr>
        <th>type</th>
        <th>value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>string</td>
        <td>{string.toUpperCase()}</td>
      </tr>
      <tr>
        <td>number</td>
        <td>{number + 1}</td>
      </tr>
      <tr>
        <td>bool</td>
        <td>{bool ? "TRUE!" : null}</td>
      </tr>
      <tr>
        <td>arr</td>
        <td>
          <ul>
            {arr.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </td>
      </tr>
      <tr>
        <td>obj</td>
        <td>{obj.foo.bar.baz}</td>
      </tr>
      <tr>
        <td>func</td>
        <td>
          <button onClick={func}>func</button>
        </td>
      </tr>
    </tbody>
  </table>
);
