
import { useLoaderData } from "react-router";
import Hero from "../../components/Hero/Hero";
import Latest_Jobs_Post from "../../components/Latest Jobs Post/Latest_Jobs_Post";



const Home = () => {
  const jobsData = useLoaderData()
  return (
    <div>
      <Hero></Hero>
      <Latest_Jobs_Post jobsData={jobsData}></Latest_Jobs_Post>
    </div>
  );
};

export default Home;
