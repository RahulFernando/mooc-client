import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navigation/NavBar";
import Homecomp from "../../components/Homecomp/Homecomp";

import { getCourses } from "./services";

import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data = [], isLoading } = useQuery({
    queryFn: getCourses,
    refetchOnMount: true,
  });

  return (
    <div>
      <NavBar />
      <Homecomp isLoading={isLoading} courses={data} />
      <Footer />
    </div>
  );
}
