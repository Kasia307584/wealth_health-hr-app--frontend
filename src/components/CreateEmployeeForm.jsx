import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import usStates from "../pages/data_usStates.json";
import { setData, store } from "../store/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function EmployeeForm() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [departement, setDepartement] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  const dispatch = useDispatch();
  // const selectorTest = useSelector((state) => state.userData);
  const navigate = useNavigate();

  async function handleFormSubmit(event) {
    event.preventDefault();
    const data = {
      firstName: firstName,
      lastName: lastName,
      startDate: startDate,
      departement: departement,
      dateOfBirth: dateOfBirth,
      street: street,
      city: city,
      state: state,
      zipCode: zipCode,
    };
    dispatch(setData(data));
    // console.log(selectorTest);
    console.log("currentState", store.getState());
    if (data) {
      navigate("/employee-list");
    }
  }

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="dateOfBirth">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="satrtDate">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="date"
            onChange={(e) => setStartDate(e.target.value)}
          />
        </Form.Group>

        <fieldset className="address">
          <legend>Address</legend>
          <Form.Group controlId="street">
            <Form.Label>Street</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setStreet(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="state">
            <Form.Label>State</Form.Label>
            <Form.Select
              aria-label="Select state"
              name="state"
              onChange={(e) => setState(e.value)}
            >
              {usStates.states.map((state, index) => (
                <option value={state.abbreviation} key={index}>
                  {state.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="zipCode">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => setZipCode(e.target.value)}
            />
          </Form.Group>
        </fieldset>

        <Form.Group controlId="department">
          <Form.Label>Department</Form.Label>
          <Form.Select
            aria-label="Select department"
            name="department"
            onChange={(e) => setDepartement(e.value)}
          >
            <option value="sales">Sales</option>
            <option value="marketing">Marketing</option>
            <option value="engineering">Engineering</option>
            <option value="human resources">Human Resources</option>
            <option value="legal">Legal</option>
          </Form.Select>
        </Form.Group>
        <Button onClick={handleShow} type="submit">
          Save
        </Button>
      </Form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>Employee Created!</Modal.Body>
      </Modal>
    </>
  );
}
