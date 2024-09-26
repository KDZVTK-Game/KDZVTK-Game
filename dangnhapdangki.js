document.addEventListener('DOMContentLoaded', function () {
    updateUserInfo();
    displayAccountList();
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
        window.location.reload()
        return false;
    }
}

// Hàm đăng nhập
function login() {
    let gmail = document.getElementById("loginGmail").value.trim();
    let password = document.getElementById("loginPassword").value.trim();

    if (gmail === "Kietadmin@gmail.com" && password === "Kiet#admin@2009*10/2k") {
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

// Chuyển về trang chính
function Vetrangchinh() {
    window.location.href = "index.html";
}

// Hiển thị danh sách tài khoản
function displayAccountList() {
    let accountList = document.getElementById("accountList");
    accountList.innerHTML = ""; // Xóa danh sách hiện tại

    // Lấy danh sách tất cả tài khoản từ localStorage
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);

        // Kiểm tra nếu key không phải là "loggedInUser" và không kết thúc bằng "_verificationCode" và không có đuôi "_avatar" và không có đuôi "_name"
        if (key !== "loggedInUser" && !key.endsWith("_verificationCode") && !key.endsWith("_avatar") && !key.endsWith("_name") && key.includes("@gmail")) {
            let displayName = key;
            let emailParts = key.split('@')[0].split('.');
            if (emailParts.length > 1 && key.endsWith('_name')) {
                let baseEmail = emailParts.slice(0, -1).join('.') + '@gmail.com';
                displayName = localStorage.getItem(baseEmail + "_name") || emailParts.slice(0, -1).join('.');
            }
            
            let row = accountList.insertRow();
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            let cell5 = row.insertCell(4);

            cell1.textContent = key;
            cell2.textContent = displayName;
            cell3.textContent = localStorage.getItem(key);
            cell4.textContent = localStorage.getItem(key + "_verificationCode") || "N/A";
            cell5.innerHTML = `<button onclick="changePassword('${key}')">Đổi mật khẩu</button>
                               <button onclick="changeVerificationCode('${key}')">Đổi mã dự phòng</button>
                               <button onclick="deleteAccount('${key}')">Xóa</button>`;
        }
    }
}

// Xóa tài khoản
function deleteAccount(gmail) {
    if (confirm(`Bạn có chắc muốn xóa tài khoản ${gmail} không?`)) {
        localStorage.removeItem(gmail);
        localStorage.removeItem(gmail + "_verificationCode");
        localStorage.removeItem(gmail + "_name");
        alert(`Đã xóa tài khoản ${gmail}`);
        displayAccountList();
    }
}
