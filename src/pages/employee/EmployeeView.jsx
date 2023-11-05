import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

export default function Employee() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <Form>
          <Form.Group controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="dateOfBirth">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Group controlId="satrtDate">
            <Form.Label>Start Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <fieldset className="address">
            <legend>Address</legend>
            <Form.Group controlId="street">
              <Form.Label>Street</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Select></Form.Select>
            </Form.Group>
            <Form.Group controlId="zipCode">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </fieldset>

          <Form.Group controlId="department">
            <Form.Label>Department</Form.Label>
            <Form.Select aria-label="Select department" name="department">
              <option value="sales">Sales</option>
              <option value="marketing">Marketing</option>
              <option value="engineering">Engineering</option>
              <option value="human resources">Human Resources</option>
              <option value="legal">Legal</option>
            </Form.Select>
          </Form.Group>
          <Button onClick={handleShow}>Save</Button>
        </Form>

        <Modal show={show} onHide={handleClose}>
          <Modal.Body>Employee Created!</Modal.Body>
        </Modal>
      </div>
    </>
  );
}
