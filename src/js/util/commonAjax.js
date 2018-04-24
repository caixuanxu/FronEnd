let storageUtil = require("./storageUtil");
let commonAjax = function (data) {
    let promise = new Promise((resolve, reject) => {
        if (!data.token) {
            data.token = storageUtil.getSession("token");
        }
        this.$http.post("/apis" + data.page, data).then(response => {
            resolve(response);
        });
    });
    return promise;
};
module.exports = commonAjax;
