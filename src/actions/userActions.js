// import tất cả các hằng số từ module actionTypes và đặt chúng vào một đối tượng có tên là actions. 
import * as actions from "./actionTypes";

// Đây là một hàm arrow (() => {}) có tên là userLogin. Khi hàm này được gọi, nó trả về một đối tượng 
//với một thuộc tính type được thiết lập bằng giá trị của hằng số LOGIN từ module actionTypes. 
//Điều này sẽ tạo ra một action có type là "LOGIN" khi hàm userLogin được gọi.
export const userLogin = () => ({
  type: actions.LOGIN,
});

export const userLogout = () => ({
  type: actions.LOGOUT,
});
