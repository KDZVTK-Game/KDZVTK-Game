document.addEventListener("DOMContentLoaded", function() {
  updateUserInfo();
  openUpdatePopup();
});

document.addEventListener('DOMContentLoaded', () => {
  const gmail = localStorage.getItem("loggedInUser"); // Lấy giá trị gmail đã đăng nhập từ localStorage
  if (gmail) {
    document.getElementById('accountEmail').innerText = gmail;
    // Ẩn nút Đăng nhập và hiển thị nút Đăng xuất nếu đã đăng nhập
    document.getElementById('loginButton').style.display = 'none';
    if (gmail !== "Kietadmin@gmail.com") {
      document.getElementById('logoutButton').style.display = 'block';
    }
  } else {
    document.getElementById('logoutButton').style.display = 'none';
    document.getElementById('loginButton').style.display = 'block';
  }
});

function updateUserInfo() {
  var userInfoDiv = document.getElementById("user-info");

  var loggedInUser = localStorage.getItem("loggedInUser");

  if (isLoggedIn(loggedInUser)) {
      var avatar = localStorage.getItem(loggedInUser + '_avatar');
      var username = localStorage.getItem(loggedInUser + '_name') || loggedInUser;

      if (avatar) {
          document.querySelector('.avatar').src = avatar;
      }

      document.querySelector('.username').innerText = username;
  } else {
      userInfoDiv.innerHTML = "Gmail: Không đăng nhập";
  }
}

function isLoggedIn(email) {
  return email && isValidGmail(email);
}

function isValidGmail(email) {
  return email.endsWith("@gmail.com") && !email.includes("x") && email !== "xxxxx@gmail.com";
}

function redirectToGame1() {
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (isLoggedIn(loggedInUser)) {
      window.location.href = "flappybird.html";
  } else {
      alert("Hãy đăng kí và đăng nhập để có trải nghiệm tốt nhất");
      window.location.href = "flappybird.html";
  }
}

function redirectToGame2() {
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (isLoggedIn(loggedInUser)) {
      window.location.href = "chessai.html";
  } else {
      alert("Hãy đăng kí và đăng nhập để có trải nghiệm tốt nhất");
      window.location.href = "chessai.html";
    }
}

function redirectToGame3() {
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (isLoggedIn(loggedInUser)) {
      window.location.href = "chess.html";
  } else {
      alert("Hãy đăng kí và đăng nhập để có trải nghiệm tốt nhất");
      window.location.href = "chess.html";
  }
}

function redirectToGame4() {
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (isLoggedIn(loggedInUser)) {
      window.location.href = "tictactoeai.html";
  } else {
      alert("VHãy đăng kí và đăng nhập để có trải nghiệm tốt nhất");
      window.location.href = "tictactoeai.html";
  }
}

function redirectToGame5() {
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (isLoggedIn(loggedInUser)) {
      window.location.href = "tictactoe.html";
  } else {
      alert("Hãy đăng kí và đăng nhập để có trải nghiệm tốt nhất");
      window.location.href = "tictactoe.html";
  }
}

function redirectToGame6() {
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (isLoggedIn(loggedInUser)) {
      window.location.href = "ransanmoi.html";
  } else {
      alert("Hãy đăng kí và đăng nhập để có trải nghiệm tốt nhất");
      window.location.href = "ransanmoi.html";
  }
}

function redirectToGame7() {
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (isLoggedIn(loggedInUser)) {
      window.location.href = "Minesweeper.html";
  } else {
      alert("Hãy đăng kí và đăng nhập để có trải nghiệm tốt nhất");
      window.location.href = "Minesweeper.html";
  }
}

function redirectToApp() {
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (isLoggedIn(loggedInUser)) {
      window.location.href = "Weather.html";
  } else {
      alert("Vui lòng đăng nhập để Để sử dụng App thời tiết");
      redirectToLoginPage();
  }
}

function redirectToNhac() {
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (isLoggedIn(loggedInUser)) {
      window.location.href = "Phatnhac.html";
  } else {
      alert("Vui lòng đăng nhập để nghe nhạc.");
      redirectToLoginPage();
  }
}

var modal = document.getElementById("updateModal");

var updateButton = document.getElementById("updateButton");

var closeBtn = document.getElementsByClassName("close")[0];

updateButton.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function closeUpdatePopup() {
    modal.style.display = "none";
}

function openUpdatePopup() {
  var modal = document.getElementById("updateModal");
  modal.style.display = "block";
  modal.style.top = "50%";
  modal.style.left = "50%";
  modal.style.transform = "translate(-50%, -50%)";
  setTimeout(function() {
      closeUpdatePopup();
  }, 3600000); 
}

window.onload = function() {
  var modalDismissed = localStorage.getItem("modalDismissed");
  if (!modalDismissed) {
      openUpdatePopup();
      localStorage.setItem("modalDismissed", "true");
      setTimeout(function() {
          localStorage.removeItem("modalDismissed");
      }, 3600000); 
  }
};

function redirectToTaiKhoanHienTai() {
  window.location.href = 'taikhoanhientai.html';
}

function redirectToLoginPage() {
  window.location.href = "dangnhapdangki.html";
}

function redirectToPage1() {
  window.location.href = "dangnhap.html";
} // bay màu 

function redirectToPage2() {
  window.location.href = "dangki.html";
} // bay màu

function redirectToAdminPage() {
  window.location.href = "admin.html"
}

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "dangnhapdangki.html";
}
