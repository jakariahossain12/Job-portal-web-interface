
import Hero from "../../components/Hero/Hero";
import Latest_Jobs_Post from "../../components/Latest Jobs Post/Latest_Jobs_Post";

const jobsPromise = fetch("http://localhost:3000/jobs").then(res=>res.json())

const Home = () => {
  
  return (
    <div>
      <Hero></Hero>
      <Latest_Jobs_Post jobsPromise={jobsPromise}></Latest_Jobs_Post>
    </div>
  );
};

export default Home;
