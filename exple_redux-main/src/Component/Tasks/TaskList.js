import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Task from "../task/Task";
import { FaTasks } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { VscTasklist } from "react-icons/vsc";
import {OverlayTrigger, Tooltip} from "react-bootstrap"

function TaskList() {
  const List = useSelector((state) => state.countReducer);
  const [filtering, setFiltering] = useState("all");

  return (
    <div clasName="my-8">
      <div style={{ display: "flex", paddingBottom: 50 }}>
        <OverlayTrigger
          overlay={
            <Tooltip id="tooltip-disabled">click to show <b>all</b> tasks</Tooltip>
          }
        >
          <button onClick={() => setFiltering("all")}>
            <FaTasks style={{ color: "black" }} />
          </button>
        </OverlayTrigger>

        <OverlayTrigger
          overlay={
            <Tooltip id="tooltip-disabled">click to show <b>done</b> tasks</Tooltip>
          }
        >
          <button onClick={() => setFiltering("completed")}>
          <VscTasklist style={{ color: "green" }} />
        </button>
        </OverlayTrigger>

        <OverlayTrigger
          overlay={
            <Tooltip id="tooltip-disabled">click to show <b>undone</b> tasks</Tooltip>
          }
        >
          <button onClick={() => setFiltering("incompleted")}>
          <BsListTask style={{ color: "yellow" }} />
        </button>
        </OverlayTrigger>

        
      </div>
      <div>
        {filtering == "all"
          ? List.map((el) => <Task el={el} key={el.id} />)
          : filtering == "completed"
          ? List.filter((el) => el.isDone).map((el) => (
              <Task el={el} key={el.id} />
            ))
          : List.filter((el) => !el.isDone).map((el) => (
              <Task el={el} key={el.id} />
            ))}
      </div>
    </div>
  );
}

export default TaskList;
