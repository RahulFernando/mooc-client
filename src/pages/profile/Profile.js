import React, { useContext, useEffect } from "react";
import LeftPane from "../../components/LeftPane/LeftPane";
import NavBar from "../../components/Navigation/NavBar";
import { Button, DatePicker, Input } from "antd";
import RightPane from "../../components/RightPane/RightPane";
import PostPane from "../../components/Postpane/PostPane";
import Footer from "../../components/Footer/Footer";
import { useMutation } from "@tanstack/react-query";
import { getRecommendations } from "./services";
import AuthContext from "../../context/AuthProvider";

export default function Profile() {
  const { user } = useContext(AuthContext);

  const {
    mutate: fetchRecommendations,
    isLoading,
    data,
  } = useMutation({ mutationFn: () => getRecommendations(user.id) });

  useEffect(() => {
    fetchRecommendations();
  }, [fetchRecommendations]);

  const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
  return (
    <>
      <div className="bottomContainer">
        <LeftPane />
        <PostPane isLoading={isLoading} coureses={data} />
      </div>
      <Footer />
    </>
  );
}
