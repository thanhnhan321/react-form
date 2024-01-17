import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";

// Hàm này nhận vào một đối tượng reducers, trong trường hợp của bạn là userReducer. 
//Nó sẽ trả về một reducer mới chứa tất cả các state được quản lý bởi các reducers con.
// userReducer là một reducer đơn giản đối với state của user trong ứng dụng, xử lý các action có kiểu tương ứng (LOGIN, LOGOUT) 
//và thay đổi state tương ứng.
//rootReducer: Là reducer chính của ứng dụng, nó được tạo bằng cách kết hợp tất cả các reducers con. Trong trường hợp này, 
//bạn chỉ có một reducer con là userReducer.
const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
