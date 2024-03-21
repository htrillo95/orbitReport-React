import React from 'react';

//Table displays satellite data
const Table = ({ sat }) => {
  return (
    <table>
    <thead>
     <tr> {/* Table header with column titles */}
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
     </tr>
     </thead>
     <tbody> {/* Map through sat prop (array of satellite data) to create rows */}
        {sat.map((data, id) => (
          <tr key={id}>
            <td>{data.name}</td>
            <td>{data.type}</td>
            <td>{data.launchDate}</td>
            {/* Display (Active or Inactive) based on operational property */}
            <td>{data.operational ? 'Active' : 'Inactive'}</td>
     </tr>
        ))}
     </tbody>
   </table>
  );
};

export default Table;