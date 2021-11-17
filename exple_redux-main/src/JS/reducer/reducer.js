import { ADDTASK, DELATETASK, MODIFYTASK, SWITCH } from "../constants/const";

// INITIALSTATE
const initialState  =[ {id : 1 , name : "task1", isDone : true}, 
{id : 2 , name : "task2", isDone : false}  ] ;

// PURE function
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTASK:
      return [...state ,  action.payload  ];
    case DELATETASK:
      return state.filter((element) => element.id !== action.payload.id);
    case MODIFYTASK:
      return state.map((element) =>
        element.id === action.payload.id
          ? { ...element, name: action.payload.name }
          : element
      );
    case SWITCH:
      return state.map((element) =>
        element.id === action.payload.id
          ? { ...element, isDone: !action.payload.isDone }
          : element
      );
    default:
      return state;
  }
};
export default countReducer;
