import React from "react";
// import SignUpPage from '@/app/signup/page'
import Hero from "./Hero";
import JobCategory from "./JobCategory";
import FeaturedJobs from "./FeaturedJobs";

const Home = () => {
  return (
    <div>
      <Hero />
      <JobCategory />
      <FeaturedJobs />
      {/* <SignUpPage /> */}
    </div>
  );
};

export default Home;
