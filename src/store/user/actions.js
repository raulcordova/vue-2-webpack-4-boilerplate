/* ============
 * Actions for the user module
 * ============
 *
 * The actions that are available on the
 * user module.
 */
import axios from "axios";

export default {
  signIn({ commit, dispatch }, item) {
    return new Promise((resolve, reject) => {
      axios
        .post("/login", item)
        .then(res => {
          if (res && res.data.success) {
            if (res.data.jwt) {
              commit("setJWT", res.data.jwt);
              resolve(res);
            } else {
              reject(res);
            }
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
