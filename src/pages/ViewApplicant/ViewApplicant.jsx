import React from 'react';
import { useLoaderData } from 'react-router';

const ViewApplicant = () => {
    const applicants = useLoaderData();
    console.log(applicants);
    return (
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>name</th>
              <th>email</th>
              <th>address</th>
              <th>resume</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {applicants.map((applicant) => (
              <tr key={applicant._id}>
                <td>{applicant.name}</td>
                <td>{applicant?.email}</td>
                <td>{applicant?.address}</td>
                <id>{applicant?.resume}</id>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default ViewApplicant;