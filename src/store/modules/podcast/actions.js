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
    dispatch,
  }) {
    return new Promise((resolve, reject) => {
      axios
        .get("podcast/list")
        .then(res => {
          if (res.data.data) {
            resolve(res);
          } else {
            reject(res);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  add({
    commit,
    dispatch

  }, item) {
    return new Promise((resolve, reject) => {
      axios
        .post("/podcast/register", item)
        .then(res => {
          console.log(res.data);
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
  },
  edit({
    commit,
    dispatch

  }, item) {
    return new Promise((resolve, reject) => {
      axios
        .put("/podcast/update?cod_podcast=" + item.cod_podcast, item)
        .then(res => {
          console.log(res.data);
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
  },
  delete({
    commit,
    dispatch

  }, cod_podcast) {
    return new Promise((resolve, reject) => {
      axios
        .delete("/podcast/delete?cod_podcast=" + cod_podcast)
        .then(res => {
          console.log(res.data);
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