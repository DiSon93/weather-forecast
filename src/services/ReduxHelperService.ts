import { concat, isEqual, map, uniqBy } from "lodash";

const TAG = "ReduxHelperServiceClass";
// Khi chúng ta gọi một action kết nối API nào đó
// Và chúng ta cần callback, sau khi gửi kết nối thành công
export class ReduxHelperServiceClass {
  listeners: Array<{ key: string; callback: ({ payload }: any) => void }>;

  constructor() {
    this.listeners = [];
  }

  // Thêm lắng nghe
  addListener = (actionName: string, callback: () => void) => {
    this.listeners = uniqBy(
      concat(this.listeners || [], {
        key: actionName,
        callback: callback,
      }),
      "key"
    );
  };

  // Xoá tất cả các listeners
  clearListeners = () => {
    this.listeners = [];
  };

  // Tạo middleware để gắn vào trong redux
  createReduxHelperServiceMiddleware = () => {
    return (store: any) => (next: any) => (action: any) => {
      console.log(TAG, "Middleware triggered:", action);
      map(this.listeners, (listener) => {
        if (isEqual(action.type, listener?.key)) {
          listener?.callback({ payload: action?.payload });
        }
      });
      next(action);
    };
  };
}

export const ReduxHelperService = new ReduxHelperServiceClass();
