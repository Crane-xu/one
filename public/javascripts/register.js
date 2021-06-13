// 判断输入内容是否有效
function isvalid(loginid, login_pwd, login_repwd, nikename, brithday) {
    if (loginid == "" || login_pwd == "" || login_repwd == "" || nikename == "") {
        alert('前四项不能为空哦');
        return false;
    }

    if (loginid.length > 16) {
        alert('用户名过长，请重新输入');
        document.querySelector("#loginid").value = "";
        return false;
    }
    let id_reg = /^[0-9a-zA-Z_]{1,}$/;
    let res = id_reg.test(loginid);
    if (!res) {
        alert('用户名为16位内字母数字下划线，请重新输入');
        document.querySelector("#login_name").value = "";
        return false;
    }

    if (login_pwd !== login_repwd) {
        alert('两次密码不一致，请重新输入');
        document.querySelector("#login_pwd").value = "";
        document.querySelector("#login_repwd").value = "";
        return false;
    }

    if (nikename.length > 16) {
        alert('昵称过长，请重新输入');
        document.querySelector("#nikename").value = "";
        return false;
    }

    if (brithday != "") {
        let date_reg = /^[\d]{4}-[\d]{1,2}-[\d]{1,2}$/;
        let res = date_reg.test(brithday);
        console.log(brithday);
        console.log(res);
        if (!res) {
            alert('生日格式不正确，请重新输入');
            document.querySelector("#brithday").value = "";
            return false;
        }
    }
    return true;
}
// 请求注册
function regist() {
    let loginid = document.querySelector("#login_name").value;
    let login_pwd = document.querySelector("#login_pwd").value;
    let login_repwd = document.querySelector("#login_repwd").value;
    let nikename = document.querySelector("#nikename").value;
    let brithday = document.querySelector("#brithday").value;
    let email = document.querySelector("#email").value;
    let res;
    res = isvalid(loginid, login_pwd, login_repwd, nikename, brithday);
    if (!res) {
        return;
    }

    let xhr = new XMLHttpRequest();
    xhr.open("post", "http://localhost:3000/users/register");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send('loginid=' + loginid + '&password=' + login_pwd + '&nikename=' + nikename + '&brithday=' + brithday + '&email=' + email);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status < 200 || xhr.status >= 300 && xhr.status !== 304) {
                if (!xhr.response) {
                    alert('服务器异常,请稍后重试');
                    return;
                } else {
                    let remsg = JSON.parse(xhr.response);
                    if (remsg.msg == '该账号已存在') {
                        alert('该用户名已存在,请重试');
                        return;
                    }
                }
            } else {
                let remsg = JSON.parse(xhr.response);
                if (remsg.msg == '注册成功') {
                    alert('注册成功');
                    window.location.reload();
                }
            }
        }
    }
}
// 返回前一页
function comeback() {
    window.history.back();
}