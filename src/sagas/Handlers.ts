import { AxiosError, AxiosResponse } from "axios";
import { isString } from "lodash";
import axios from "axios";
import { put } from "redux-saga/effects"
import { getAction } from "../lib/fadux/index";
// import { toastErr } from "core-components/Toast";

// Kiểm tra kết nối có ok không
export function checkOK(response: AxiosResponse) {
    return response.status === 201 || response.status === 200;
}

// Xử lý các lỗi có thể xảy ra
export function* handleErrors({ actionName, payload, error }: { actionName: string, payload: any, error: Error | AxiosError | any }): any {
    if (axios.isAxiosError(error))
        switch (error.message) {
            // Lỗi mạng
            case "Network Error":
                // Hiển thị panel thử lại
                // toastErr("Network Error")
                yield put(getAction(actionName, "networkError")({}));
                break;
            // default:
            //     const errorCode = error?.response?.status
            //     switch (errorCode) {
            //         case 404:
            //             // Lỗi tìm không thấy api
            //             toastErr("Hệ thống đang xảy ra lỗi. Chúng tôi đang sửa chữa")
            //             yield put(getAction(actionName, "failed")({ error: error }));
            //             break;
            //         case 403:
            //             // Lỗi forbidden
            //             toastErr("Yêu cầu bạn vừa gửi không được cấp phép")
            //             yield put(getAction(actionName, "failed")({ error: error }));
            //             break;
            //         default:
            //             if (isString((error?.response?.data as any)?.errors)) {
            //                 // Lỗi khác
            //                 toastErr((error?.response?.data as any)?.errors)
            //                 yield put(getAction(actionName, "failed")({ error: error }));
            //             } else {
            //                 // Lỗi khác
            //                 toastErr("Ghi nhận lỗi \n" + "Có vẽ như không có quyền truy cập")
            //                 yield put(getAction(actionName, "failed")({ error: error }));
            //             }

            //             break;
            //     }
        }
}
