export const myJobPostPromise = (email) => {
    return fetch(`http://localhost:3000/jobs/applicant?email=${email}`).then((res) => res.json());
}