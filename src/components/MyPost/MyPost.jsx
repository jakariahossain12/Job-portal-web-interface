import React, { use } from 'react';
import { Link } from 'react-router';

const MyPost = ({ myJobPostPromise }) => {
    const posts = use(myJobPostPromise);
    console.log(posts);
    return (
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Company</th>
              <th>Job</th>
              <th>deadLine</th>
              <th>application_count</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {posts.map((post) => (
              <tr key={post._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={post?.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{post?.company}</div>
                      <div className="text-sm opacity-50">{post?.location}</div>
                    </div>
                  </div>
                </td>
                <td>{post?.title}</td>
                <td>{post?.applicationDeadline}</td>
                <td>{post?.application_count}</td>
                <th>
                  <Link
                    to={`/view-applicant/${post._id}`}
                    className="btn btn-ghost btn-xs"
                  >
                    view Applicant
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default MyPost;