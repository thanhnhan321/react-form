import * as actions from "../actions/actionTypes";

//Module này dùng để tạo ra trang Login của app với các thuộc tính như email, password, invalidEmail, emptyEmail,

//Kiểm tra xem có đang ở trạng thái đăng nhập hay không
const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || "false",
};

const userReducer = (state = initialState, action) => {
  //Dùng switch case để xử lý các action khác nhau được gửi đến reducer từ các action creator khác nhau
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        isLoggedIn: "true",
      };

    case actions.LOGOUT:
      return {
        ...state,
        isLoggedIn: "false",
      };

    default:
      return state;
  }
};

export default userReducer;
