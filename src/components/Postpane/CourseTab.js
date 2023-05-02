import { useState } from "react";

import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import CourseList from "../Homecomp/CourseList";

const CATEGORIES = [
  {
    id: "All Courses",
    title: "All Courses",
  },
  {
    id: "Java",
    title: "Java",
  },
  {
    id: "JavaScript",
    title: "JavaScript",
  },
  {
    id: "Node JS",
    title: "Node JS",
  },
  {
    id: "Python",
    title: "Python",
  },
];

const CourseTab = ({ courses }) => {
  const [fillActive, setFillActive] = useState("All Courses");

  const tabClickHandler = (key) => {
    if (key === fillActive) return;

    setFillActive(key);
  };

  const allCoureses = courses && [
    ...(courses["Java"] || []),
    ...(courses["JavaScript"] || []),
    ...(courses["Python"] || []),
    ...(courses["Node Js"] || []),
  ];

  const javaCourses = courses && [...(courses["Java"] || [])];

  const javaScriptCourses = courses && [...(courses["JavaScript"] || [])];

  const pythonCourses = courses && [...(courses["Python"] || [])];

  const nodeJSCourses = courses && [...(courses["Node JS"] || [])];

  return (
    <>
      <MDBTabs fill className="mb-3">
        {CATEGORIES.map((category) => (
          <MDBTabsItem key={category.id}>
            <MDBTabsLink
              style={{ fontFamily: "Roboto, sans serif", fontWeight: 400 }}
              onClick={tabClickHandler.bind(null, category.id)}
              active={fillActive === category.id}
            >
              {category.title}
            </MDBTabsLink>
          </MDBTabsItem>
        ))}
      </MDBTabs>
      <MDBTabsContent>
        <MDBTabsPane show={fillActive === "All Courses"}>
          <CourseList courses={allCoureses} />
        </MDBTabsPane>
        <MDBTabsPane show={fillActive === "Java"}>
          <CourseList courses={javaCourses} />
        </MDBTabsPane>
        <MDBTabsPane show={fillActive === "JavaScript"}>
          <CourseList courses={javaScriptCourses} />
        </MDBTabsPane>
        <MDBTabsPane show={fillActive === "Python"}>
          <CourseList courses={pythonCourses} />
        </MDBTabsPane>
        <MDBTabsPane show={fillActive === "Node JS"}>
          <CourseList courses={nodeJSCourses} />
        </MDBTabsPane>
      </MDBTabsContent>
    </>
  );
};

export default CourseTab;
