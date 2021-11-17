import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { delatetask, modifytask, switched } from "../../JS/actions/action";
import { Modal, Button } from "react-bootstrap";
import { BsPen, BsFillDoorClosedFill } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import {BiTaskX, BiTask} from "react-icons/bi";
import {VscSaveAs} from "react-icons/vsc";
import {OverlayTrigger, Tooltip} from "react-bootstrap"


function Task({ el }) {
  const dispatch = useDispatch();
  const [newtodo, setNewtodo] = useState(el.name);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <input
        value={el.name}
        disabled
        style={{ backgroundColor: "transparent", color: "white" }}
      />
      <>
      <OverlayTrigger
          overlay={
            <Tooltip id="tooltip-disabled">click to <b>edit</b> tasks</Tooltip>
          }
        >
          <button
        onClick={handleShow}
        style={{ backgroundColor: "transparent", color: "white" }}
      >
        <BsPen style={{color:'black'}} />
      </button>
        </OverlayTrigger>
      
        
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title >{`please tap your new task for the Task number ${el.id}`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {`this is your old task name ${el.name} just try to modify it here  `}
            <br/>
            <input type="text" onChange={(e) => setNewtodo(e.target.value)} style={{marginLeft:90, marginTop : 20}} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close <BsFillDoorClosedFill />
            </Button>
            <Button
              onClick={() => {
                dispatch(modifytask(el.id, newtodo));
                handleClose();
              }}
            >
              Save Changes <VscSaveAs/>
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      <OverlayTrigger
          overlay={
            <Tooltip id="tooltip-disabled">click to <b>delate</b> tasks</Tooltip>
          }
        >
           <button
        onClick={() => dispatch(delatetask(el.id))}
        style={{ backgroundColor: "transparent", color: "white" }}
      >
        <AiOutlineDelete style={{color:'red'}}/>
      </button>
        </OverlayTrigger>
     
        <OverlayTrigger
          overlay={
            <Tooltip id="tooltip-disabled">click to switch to <b>{el.isDone?'undone':'done'}</b> tasks</Tooltip>
          }
        >
         <button onClick={() => dispatch(switched(el.id, el.isDone))} style={{ backgroundColor: "transparent", color: "white" }}>
         {el.isDone ?<BiTask style={{color:'green'}}/>:<BiTaskX style={{color:'yellow'}}/>}
      </button>
        </OverlayTrigger>
      
    </div>
  );
}

export default Task;
