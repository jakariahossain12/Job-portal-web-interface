import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router';

const ViewApplicant = () => {
    const applicants = useLoaderData();
    console.log(applicants);

    const handleOnchange = (e, app_id) => {
        const stats = e.target.value;
        console.log(stats, app_id);
        
        axios.patch(`http://localhost:3000/application/${app_id}`, { stats })
            .then(res => {
                if (res.data.modifiedCount) {
                return alert('update successfully')
            }
            })
            .catch(error => {
            console.log(error);
        })
    }
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {applicants.map((applicant) => (
              <tr key={applicant?._id}>
                <td>{applicant?.name}</td>
                <td>{applicant?.email}</td>
                <td>{applicant?.address}</td>
                <td>{applicant?.resume}</td>
                <td>
                  <select onChange={(e)=> handleOnchange(e,applicant?._id)} defaultValue={applicant?.stats} className="select">
                    <option disabled={true}>Update Stats</option>
                    <option>Pending</option>
                    <option>Interview</option>
                    <option>Hired</option>
                    <option>Reject</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default ViewApplicant;