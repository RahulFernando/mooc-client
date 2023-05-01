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

const Course = ({ id, name }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);

  const viewHandler = () => navigate(`/courses/${id}?title=${name}`);

  return (
    <MDBCard>
      <MDBCardImage
        src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
        position="top"
        alt="..."
      />
      <MDBCardBody>
        <MDBCardTitle>{name}</MDBCardTitle>
        {isAuthenticated && <MDBBtn onClick={viewHandler}>View</MDBBtn>}
      </MDBCardBody>
    </MDBCard>
  );
};

export default Course;
