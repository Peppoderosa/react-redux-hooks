import { createStore } from "redux";

const INITIAL_STATE = {
  data: ["ReactJS", "React Native", "NodeJS"]
};

function courses(state = INITIAL_STATE, action) {
  console.log("GAY");
  switch (action.type) {
    case "ADD_COURSE":
      return { ...state, data: [...state.data, action.title] };
    default:
      return state;
  }
}

const store = createStore(courses);

export default store;
