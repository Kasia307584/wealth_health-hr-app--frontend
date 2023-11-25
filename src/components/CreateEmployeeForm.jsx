import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import usaStates from "../constants/USA_STATES";
import departments from "../constants/DEPARTAMENTS";
import { setData, store } from "../store/store";
import { useDispatch } from "react-redux";
import MySelect from "@kazu2233/react-select-component";

export default function EmployeeForm() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [department, setDepartment] = useState(departments[0].value);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState(usaStates[0].value);
  const [zipCode, setZipCode] = useState("");

  const dispatch = useDispatch();

  async function handleFormSubmit(event) {
    event.preventDefault();
    const data = {
      firstName: firstName,
      lastName: lastName,
      startDate: startDate,
      department: department,
      dateOfBirth: dateOfBirth,
      street: street,
      city: city,
      state: state,
      zipCode: zipCode,
    };
    dispatch(setData(data));
    console.log("currentState", store.getState().employeeTable);
    setFirstName("");
    setLastName("");
    setStartDate("");
    setDateOfBirth("");
    setStreet("");
    setCity("");
    setZipCode("");
  }

  const handleChangeSelectDepartment = (e) => {
    setDepartment(e?.value);
  };
  const handleChangeSelectState = (e) => {
    setState(e?.value);
  };

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            value={firstName}
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            value={lastName}
            type="text"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="dateOfBirth">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            value={dateOfBirth}
            type="date"
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="satrtDate">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            value={startDate}
            type="date"
            onChange={(e) => setStartDate(e.target.value)}
          />
        </Form.Group>

        <fieldset className="address">
          <legend>Address</legend>
          <Form.Group controlId="street">
            <Form.Label>Street</Form.Label>
            <Form.Control
              value={street}
              type="text"
              onChange={(e) => setStreet(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              value={city}
              type="text"
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>
          <MySelect
            options={usaStates}
            onChange={handleChangeSelectState}
            label="state"
          />
          <Form.Group controlId="zipCode">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control
              value={zipCode}
              type="number"
              onChange={(e) => setZipCode(e.target.value)}
            />
          </Form.Group>
        </fieldset>

        <MySelect
          options={departments}
          onChange={handleChangeSelectDepartment}
          label="departement"
        />

        <Button
          onClick={handleShow}
          type="submit"
          variant="secondary"
          size="lg"
          className="btn-save"
        >
          Save
        </Button>
      </Form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>Employee Created!</Modal.Body>
      </Modal>
    </>
  );
}
