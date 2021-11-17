import {  ADDTASK, DELATETASK, MODIFYTASK, SWITCH  } from "../constants/const";

  export const addtask=(todo)=>{
    return{
      type : ADDTASK,
      payload :{
        id: Math.ceil(Math.random() * 100), 
        name : todo,
        isDone : false
      }
    }
  };
  export const delatetask=(todoid)=>{
    return{
      type : DELATETASK,
      payload :{
        id: todoid, 
      }
    }
  };
  export const modifytask=(todoid,newtodo)=>{
    return{
      type : MODIFYTASK,
      payload :{
        id: todoid, 
        name : newtodo
      }
    }
  };
  export const switched=(todoid, isdone)=>{
    return{
      type : SWITCH,
      payload :{
        id: todoid, 
        isDone : isdone
      }
    }
  };
  
  
