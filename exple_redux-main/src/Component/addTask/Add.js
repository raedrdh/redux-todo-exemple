import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react/cjs/react.development";
import { addtask } from "../../JS/actions/action";
import { Modal, Button } from "react-bootstrap";
import {VscSaveAs} from "react-icons/vsc";
import { BsFillDoorClosedFill } from "react-icons/bs";
import {BsCalendarPlus} from "react-icons/bs"

function Add() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <>
        <Button variant="primary" onClick={handleShow}>
          <BsCalendarPlus style={{color:'black'}}/>
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Add new task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            your nw task will not yet complete when you add it
            <input
              type="text"
              placeholder="add your new task"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close<BsFillDoorClosedFill/>
            </Button>
            <button
        onClick={() => {
          dispatch(addtask(todo));
          setTodo("");
          handleClose();
        }}
      >
        add new task <VscSaveAs/>
      </button>
          </Modal.Footer>
        </Modal>
      </>

      
    </div>
  );
}
export default Add;
