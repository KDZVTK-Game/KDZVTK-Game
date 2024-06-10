// Hàm đặt lại mật khẩu
function resetPassword() {
    let gmail = document.getElementById("forgotPasswordGmail").value;
    let verificationCode = document.getElementById("forgotPasswordCode").value;
    let newPassword = document.getElementById("forgotPasswordNewPassword").value;

    let savedPassword = localStorage.getItem(gmail);

    if (!savedPassword) {
        document.getElementById("forgotPasswordMessage").innerText = "Sai Gmail.";
        return false;
    }

    let verifyCodeRegex = /^[a-zA-Z0-9]{4,8}$/;
    if (!verifyCodeRegex.test(verificationCode)) {
        document.getElementById("forgotPasswordMessage").innerText = "Sai mã dự phòng";
        return false;
    }

    // Kiểm tra điều kiện mật khẩu
    if (newPassword.length < 6 || newPassword.length > 16) {
        document.getElementById("forgotPasswordMessage").innerText = "Mật khẩu phải từ 6 đến 16 kí tự";
        return false; // prevent form submission
    }

    let lowerCase = /[a-z]/;
    let upperCase = /[A-Z]/;
    let numeric = /[0-9]/;
    let specialChar = /[!@#$%^&*(),.?":{}|<>]/;

    let typesCount = 0;
    if (lowerCase.test(newPassword)) typesCount++;
    if (upperCase.test(newPassword)) typesCount++;
    if (numeric.test(newPassword)) typesCount++;
    if (specialChar.test(newPassword)) typesCount++;

    if (typesCount < 3) {
        document.getElementById("forgotPasswordMessage").innerText = "Mật khẩu cần phải có ít nhất 3 trong các điều kiện là chữ thường, số, chữ hoa, kí tự đặc biệt";
        return false;
    }

    let storedVerificationCode = localStorage.getItem(gmail + "_verificationCode");
    if (verificationCode !== storedVerificationCode) {
        document.getElementById("forgotPasswordMessage").innerText = "Sai mã dự phòng.";
        return false;
    }

    localStorage.setItem(gmail, newPassword);
    localStorage.removeItem(gmail + "_verificationCode");

    alert("Mật khẩu thay đổi thành công");
    window.location.href = "dangnhapdangki.html";
    return false;
}

// Chuyển đến form đăng nhập
function goToLoginForm() {
    window.location.href = "dangnhapdangki.html";
}

// Hiển thị form "Quên mật khẩu"
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("forgotPasswordForm").style.display = "block";
});
