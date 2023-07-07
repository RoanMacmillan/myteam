import React from "react";
import Hero from "../components/Hero/Hero";
import ContactLink from "../containers/ContactLink";
import Build from "../containers/BuildHome";
import SuccessHome from "../containers/SuccessHome";

const Home = () => {
  return (
    <div>
      <Hero />
      <Build />
      <SuccessHome />
      <ContactLink />
    </div>
  );
};

export default Home;
