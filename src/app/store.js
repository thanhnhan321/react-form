import { configureStore } from "@reduxjs/toolkit";
import reducers from "./rootReducer";

//configureStore: để tạo ra một Redux store. Nhận vào một đối số là một đối tượng có thuộc tính reducer, 
//trong trường hợp này là reducers (từ rootReducer bạn đã xây dựng trước đó).
const store = configureStore({ reducer: reducers });

//store.subscribe: Là một hàm trong Redux để đăng ký lời nghe (listener) cho sự thay đổi trong store. 
//Trong trường hợp này, mỗi khi store thay đổi, lời nghe sẽ được gọi và lưu trạng thái isLoggedIn của user vào localStorage.
store.subscribe(() => {
  //localStorage.setItem: Là một phương thức của localStorage trong trình duyệt, được sử dụng để lưu trữ dữ liệu trên máy khách.
  localStorage.setItem("isLoggedIn", store.getState().user.isLoggedIn);
});

export default store;
