import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useContext } from "react";

import AuthContext from "../../context/AuthProvider";

import { useNavigate } from "react-router";

const Course = ({ id, name, src }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);

  const viewHandler = () => navigate(`/courses/${id}?title=${name}`);

  const base64Image = `data:image/jpeg;base64, ${src}`;

  return (
    <MDBCard>
      <MDBCardImage src={base64Image} position="top" alt="..." />
      <MDBCardBody>
        <MDBCardTitle>{name}</MDBCardTitle>
        {isAuthenticated && <MDBBtn onClick={viewHandler}>View</MDBBtn>}
      </MDBCardBody>
    </MDBCard>
  );
};

export default Course;
