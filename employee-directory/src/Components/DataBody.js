import React from "react";
import Moment from "moment";

function DataBody(props) {

  return (
    <tbody>
      {props.result.map((results) => (
        <tr key={results.id.value}>
          <th scope="row">
            <img
              className="img-fluid rounded"
              alt={results.name.first + " " + results.name.last}
              src={results.picture.medium}
            />
          </th>
          <td>{results.name.first + " " + results.name.last}</td>
          <td>{results.phone}</td>
          <td>{results.email}</td>
          <td>{Moment(results.dob.date).format("MM/DD/YYYY")}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default DataBody;
