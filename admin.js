document.addEventListener("DOMContentLoaded", function() {
    displayAccountList();
});

function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "dangnhapdangki.html";
}

function Quayvetrangchinh() {
    window.location.href = "adminindex.html";
}

function createAccount() { 
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
        displayAccountList();
        return false;
    }
}

function displayAccountList() {
    let accountList = document.getElementById("accountList");
    accountList.innerHTML = ""; 

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);

        if (key !== "loggedInUser" && !key.endsWith("_verificationCode") && !key.endsWith("_avatar") && !key.endsWith("_name") && key.includes("@gmail")) {
            let name = localStorage.getItem(key + "_name");
            let row = accountList.insertRow();
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            let cell5 = row.insertCell(4);

            cell1.textContent = key;
            cell2.textContent = name || "N/A";
            cell3.textContent = localStorage.getItem(key);
            cell4.textContent = localStorage.getItem(key + "_verificationCode") || "N/A";
            cell5.innerHTML = `<button onclick="changePassword('${key}')">Đổi mật khẩu</button>
                               <button onclick="changeVerificationCode('${key}')">Đổi mã dự phòng</button>
                               <button onclick="changeAccountName('${key}')">Đổi tên tài khoản</button>
                               <button onclick="deleteAccount('${key}')">Xóa</button>`;
        }
    }
}

function changeVerificationCode(gmail) {
    let newVerificationCode = prompt(`Nhập mã dự phòng mới cho tài khoản ${gmail}`);
    if (newVerificationCode !== null) {
        localStorage.setItem(gmail + "_verificationCode", newVerificationCode);
        alert("Thay đổi mã dự phòng thành công");
        displayAccountList();
    }
}

function changePassword(gmail) {
    let newPassword = prompt(`Nhập mật khẩu mới cho tài khoản ${gmail}`);
    if (newPassword !== null) {
        localStorage.setItem(gmail, newPassword);
        alert("Thay đổi mật khẩu thành công");
        displayAccountList();
    }
}

function changeAccountName(gmail) {
    let newName = prompt(`Nhập tên mới cho tài khoản ${gmail}`);
    if (newName !== null) {
        localStorage.setItem(gmail + "_name", newName);
        alert("Thay đổi tên tài khoản thành công");
        displayAccountList();
    }
}

function deleteAccount(gmail) {
    if (confirm(`Bạn có chắc muốn xóa tài khoản ${gmail} không?`)) {
        localStorage.removeItem(gmail);
        localStorage.removeItem(gmail + "_verificationCode");
        localStorage.removeItem(gmail + "_name");
        alert(`Đã xóa tài khoản ${gmail}`);
        displayAccountList();
    }
}

function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}
