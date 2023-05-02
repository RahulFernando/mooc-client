import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import Course from "./Course";

const CourseList = ({ courses = [] }) => {
  const rows = Math.floor(courses / 4);

  const getCourseList = (row) =>
    (rows > 0 && courses.slice(row - 1, 4, 4 * row)) || courses;
  return (
    <MDBContainer>
      {rows > 0 &&
        rows.map((_, index) => (
          <MDBRow key={index}>
            {getCourseList(index + 1).map((course) => (
              <MDBCol key={course.id} lg={4} xs={12}>
                <Course id={course.id} name={course.name} src={course.thumb} />
              </MDBCol>
            ))}
          </MDBRow>
        ))}
      {(rows === 0 || isNaN(rows)) && (
        <MDBRow>
          {getCourseList().map((course) => (
            <MDBCol key={course.id} lg={4} xs={12}>
              <Course id={course.id} name={course.name} src={course.thumb} />
            </MDBCol>
          ))}
        </MDBRow>
      )}
    </MDBContainer>
  );
};

export default CourseList;
