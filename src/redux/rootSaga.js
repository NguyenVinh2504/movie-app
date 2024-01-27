import { all, takeEvery } from "redux-saga/effects";
import { updateUser } from "./features/userSlice";

// function* helloSage(action) {
//     console.log("hello Saga", action)
// }

export default function* rootSage() {
    // console.log("đâ");
    // yield all([helloSage()])
    // yield takeEvery(updateUser().type, helloSage)
}