/* ============
 * Actions for the user module
 * ============
 *
 * The actions that are available on the
 * user module.
 */
import axios from "axios";

export default {
  getList({
    commit,
    dispatch
  }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/brand/list")
        .then(res => {
          if (res.data.data) {
            resolve(res);
          } else {
            reject(res);
          }
          //}
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};