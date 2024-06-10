document.addEventListener('DOMContentLoaded', function () {
    updateUserInfo();
});

const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    document.getElementById('container').classList.add("active");
});

loginBtn.addEventListener('click', () => {
    document.getElementById('container').classList.remove("active");
});

// Cập nhật thông tin người dùng
function updateUserInfo() {
    const adminEmail = "Kietadmin@gmail.com";
    const adminPassword = "Kietadmin2009";
    localStorage.setItem(adminEmail, adminPassword);
}

// Hàm đăng ký tài khoản
function register() {
    let name = document.getElementById("registerName").value.trim();
    let gmail = document.getElementById("registerGmail").value.trim();
    let verifyCode = document.getElementById("verifyCode").value.trim();
    let password = document.getElementById("registerPassword").value.trim();

    if (name === "") {
        document.getElementById("registerMessage").innerText = "Tên không được để trống";
        return false;
    }

    let verifyCodeRegex = /^[a-zA-Z0-9]{4,8}$/;
    if (!verifyCodeRegex.test(verifyCode)) {
        document.getElementById("registerMessage").innerText = "Mã dự phòng cần ít nhất từ 4 số trở lên và 8 số trở xuống";
        return false;
    }

    if (password.length < 6 || password.length > 16) {
        document.getElementById("registerMessage").innerText = "Mật khẩu phải từ 6 đến 16 kí tự";
        return false;
    }

    let lowerCase = /[a-z]/;
    let upperCase = /[A-Z]/;
    let numeric = /[0-9]/;
    let specialChar = /[!@#$%^&*(),.?":{}|<>]/;

    let typesCount = 0;
    if (lowerCase.test(password)) typesCount++;
    if (upperCase.test(password)) typesCount++;
    if (numeric.test(password)) typesCount++;
    if (specialChar.test(password)) typesCount++;

    if (typesCount < 3) {
        document.getElementById("registerMessage").innerText = "Mật khẩu cần phải có ít nhất 3 trong các điều kiện là chữ thường, số, chữ hoa, kí tự đặc biệt";
        return false;
    }

    let savedPassword = localStorage.getItem(gmail);
    if (savedPassword) {
        document.getElementById("registerMessage").innerText = "Gmail đã tồn tại.";
        return false;
    } else {
        localStorage.setItem(gmail, password);
        localStorage.setItem(gmail + "_verificationCode", verifyCode);
        localStorage.setItem(gmail + "_name", name);
        alert("Đăng kí thành công");
        window.location.href = "dangnhapdangki.html";
        return false;
    }
}

// Hàm đăng nhập
function login() {
    let gmail = document.getElementById("loginGmail").value.trim();
    let password = document.getElementById("loginPassword").value.trim();

    if (gmail === "Kietadmin@gmail.com" && password === "Kietadmin2009") {
        alert("Đăng nhập thành công với tài khoản admin");
        // Lưu thông tin tài khoản admin vào localStorage
        localStorage.setItem("loggedInUser", gmail);
        window.location.href = "admin.html";
        return false;
    }

    let savedPassword = localStorage.getItem(gmail);
    if (savedPassword && savedPassword === password) {
        alert("Đăng nhập thành công");
        // Lưu thông tin người dùng vào localStorage để sử dụng trong trang thông tin tài khoản
        localStorage.setItem("loggedInUser", gmail);
        localStorage.setItem("accountName", gmail);
        window.location.href = "index.html";
        return false;
    } else {
        document.getElementById("loginMessage").innerText = "Sai mật khẩu hoặc gmail";
        return false;
    }
}


// Chuyển đổi hiển thị mật khẩu
function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}

// Chuyển đến form đăng nhập
function goToLoginForm() {
    window.location.href = "dangnhapdangki.html";
}

// Chuyển đến form quên mật khẩu
function showForgotPasswordForm() {
    window.location.href = "Quenmatkhau.html";
}

// Chuyển đổi giữa các form
document.getElementById("login").addEventListener("click", function () {
    document.getElementById("container").classList.remove("right-panel-active");
});

document.getElementById("register").addEventListener("click", function () {
    document.getElementById("container").classList.add("right-panel-active");
});

function Vetrangchinh() {
    window.location.href = "index.html" ;
}