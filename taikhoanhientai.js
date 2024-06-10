document.addEventListener('DOMContentLoaded', () => {
    const gmail = localStorage.getItem("loggedInUser"); // Lấy giá trị gmail đã đăng nhập từ localStorage

    if (!gmail) {
        alert("Bạn chưa đăng nhập");
        window.location.href = "dangnhapdangki.html";
        return;
    }

    // Kiểm tra và lấy giá trị từ localStorage
    document.getElementById('accountName').innerText = localStorage.getItem(gmail + '_name') || 'Chưa có tên tài khoản';
    document.getElementById('accountEmail').innerText = gmail;
    document.getElementById('accountPassword').innerText = localStorage.getItem(gmail) || 'Chưa có mật khẩu';
    document.getElementById('accountBackupCode').innerText = localStorage.getItem(gmail + '_verificationCode') || 'Chưa có mã dự phòng';

    const avatar = localStorage.getItem(gmail + '_avatar');
    if (avatar) {
        document.querySelector('.avatar').src = avatar;
    }

     // Kiểm tra nếu tài khoản là admin
     if (gmail === "Kietadmin@gmail.com") {
        document.getElementById('adminButton').style.display = 'block';
    }
});

function showUpdateForm(field) {
    document.getElementById('updateForm').style.display = 'block';
    document.getElementById('updateForm').dataset.field = field;
}

function updateAccountInfo() {
    const field = document.getElementById('updateForm').dataset.field;
    const newValue = document.getElementById('newValue').value.trim();
    const gmail = localStorage.getItem("loggedInUser"); // Lấy giá trị gmail đã đăng nhập từ localStorage

    if (field === 'name') {
        if (newValue === "") {
            document.getElementById('registerMessage').innerText = "Tên không được để trống";
            return;
        }
        localStorage.setItem(gmail + '_name', newValue);
    } else if (field === 'password') {
        if (newValue.length < 6 || newValue.length > 16) {
            document.getElementById('registerMessage').innerText = "Mật khẩu phải từ 6 đến 16 kí tự";
            return;
        }
        let lowerCase = /[a-z]/;
        let upperCase = /[A-Z]/;
        let numeric = /[0-9]/;
        let specialChar = /[!@#$%^&*(),.?":{}|<>]/;
        let typesCount = 0;
        if (lowerCase.test(newValue)) typesCount++;
        if (upperCase.test(newValue)) typesCount++;
        if (numeric.test(newValue)) typesCount++;
        if (specialChar.test(newValue)) typesCount++;
        if (typesCount < 3) {
            document.getElementById('registerMessage').innerText = "Mật khẩu cần phải có ít nhất 3 trong các điều kiện là chữ thường, số, chữ hoa, kí tự đặc biệt";
            return;
        }
        localStorage.setItem(gmail, newValue);
    } else if (field === 'backupCode') {
        let verifyCodeRegex = /^[a-zA-Z0-9]{4,8}$/;
        if (!verifyCodeRegex.test(newValue)) {
            document.getElementById('registerMessage').innerText = "Mã dự phòng cần ít nhất từ 4 số trở lên và 8 số trở xuống";
            return;
        }
        localStorage.setItem(gmail + '_verificationCode', newValue);
    }

    document.getElementById('registerMessage').innerText = "Cập nhật thành công";
    document.getElementById('newValue').value = "";
    document.getElementById('updateForm').style.display = 'none';

    // Cập nhật lại thông tin hiển thị
    document.getElementById('accountName').innerText = localStorage.getItem(gmail + '_name');
    document.getElementById('accountPassword').innerText = localStorage.getItem(gmail);
    document.getElementById('accountBackupCode').innerText = localStorage.getItem(gmail + '_verificationCode');
}

function updateBackground() {
    const gmail = localStorage.getItem("loggedInUser"); // Lấy giá trị gmail đã đăng nhập từ localStorage
    const fileInput = document.getElementById('backgroundInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            localStorage.setItem(gmail + '_avatar', e.target.result);
            document.querySelector('.avatar').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

function Quayvetrang() {
    window.location.href = "index.html";
}

function redirectToAdmin() {
    window.location.href = "admin.html";
}