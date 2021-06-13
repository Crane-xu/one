function login() {
    let loginid = document.querySelector('#login_name').value;
    let loginpwd = document.querySelector('#login_pwd').value;
    if (loginid == "" || loginpwd == "") {
        alert("用户名或密码不能为空");
        return;
    }

    let xhr = new XMLHttpRequest();
    xhr.open("post", "http://localhost:3000/users/login");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send('loginid=' + loginid + '&password=' + loginpwd);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status < 200 || xhr.status >= 300 && xhr.status !== 304) {
                console.log('服务器异常');
                alert('服务器异常,请稍后重试');
                return;
            } else {
                let visitor = JSON.parse(xhr.response);
                console.log(visitor);
                if (visitor.msg == '登录成功') {
                    alert(visitor.msg + ',欢迎您,' + visitor.nikename);
                    let url = window.localStorage.getItem('beforeloginUrl');
                    window.localStorage.removeItem('beforeloginUrl');
                    window.location.href = url;
                } else if (visitor.msg == '该账号不存在') {
                    alert(visitor.msg + ',请注册或重新登录');
                    window.location.reload();
                } else if (visitor.msg == '密码错误') {
                    alert(visitor.msg);
                    document.querySelector('#login_pwd').value = "";
                }
            }
        }
    }
}
function comeback() {
    window.history.back();
}