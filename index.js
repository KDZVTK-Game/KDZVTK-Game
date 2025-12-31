// ==================== DARK MODE FUNCTIONALITY ====================
// Initialize theme from stored preference or default to light
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// Toggle theme function
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Add animation class
    document.body.style.transition = 'all 0.3s ease';
}

// Initialize theme on page load
initializeTheme();

// Add event listener for theme toggle button
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
});

// ==================== ORIGINAL CODE PRESERVED ====================
// Biến để theo dõi trạng thái đã khởi tạo
let isInitialized = false;

// Cache DOM elements để tránh query nhiều lần
const domElements = {
    avatar: null,
    username: null,
    loginText: null
};

// Khởi tạo các elements một lần duy nhất
function initializeDOMElements() {
    if (!isInitialized) {
        domElements.avatar = document.querySelector('.avatar');
        domElements.username = document.querySelector('.username');
        domElements.loginText = document.getElementById('loginText');
        domElements.userProfile = document.getElementById('user-info');
        domElements.authButton = document.getElementById('auth-button');
        isInitialized = true;
    }
}

// Hàm debounce để tránh gọi hàm quá nhiều lần
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Hàm kiểm tra trạng thái người dùng
function getUserState() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    return {
        isLoggedIn: loggedInUser && loggedInUser !== 'null',
        user: loggedInUser
    };
}

// Hàm cập nhật UI một cách thông minh
function updateUI() {
    if (!isInitialized) return;

    const {isLoggedIn, user} = getUserState();
    const userProfileDiv = document.getElementById('user-info');

    if (isLoggedIn) {
        const displayName = user.split('@')[0];
        domElements.username.innerText = displayName;
        domElements.loginText.textContent = 'Logout';
        
        // Show both profile and logout button when logged in
        userProfileDiv.style.display = 'flex';
    } else {
        domElements.username.innerText = 'Tên đăng nhập';
        domElements.loginText.textContent = 'Login';
        
        // Hide profile when logged out
        userProfileDiv.style.display = 'none';
    }
}

// Xử lý avatar một cách thông minh
function handleAvatar() {
    if (!domElements.avatar) return;

    const {isLoggedIn, user} = getUserState();
    const defaultAvatar = 'images/default-avatar.png';

    if (!domElements.avatar.hasAttribute('data-error-handled')) {
        domElements.avatar.setAttribute('data-error-handled', 'true');
        
        domElements.avatar.onerror = function(e) {
            if (this.src !== defaultAvatar) {
                this.src = defaultAvatar;
            }
            // Ngăn chặn error lặp lại
            e.preventDefault();
        };
    }

    if (isLoggedIn) {
        const userAvatar = localStorage.getItem(`${user}_avatar`);
        if (userAvatar && userAvatar !== 'null' && domElements.avatar.src !== userAvatar) {
            domElements.avatar.src = userAvatar;
        }
    } else if (domElements.avatar.src !== defaultAvatar) {
        domElements.avatar.src = defaultAvatar;
    }
}

// Xử lý đăng nhập/đăng xuất
function OutorIn() {
    const {isLoggedIn} = getUserState();
    
    if (isLoggedIn) {
        localStorage.removeItem("loggedInUser");
        alert("Đăng xuất thành công");
        window.location.href = "dangnhapdangki.html";
    } else {
        window.location.href = "dangnhapdangki.html";
    }
}

// Chuyển hướng đến trang tài khoản
function redirectToTaiKhoanHienTai() {
    window.location.href = 'taikhoanhientai.html';
}

// Khởi tạo ứng dụng
document.addEventListener("DOMContentLoaded", function() {
    // Khởi tạo DOM elements
    initializeDOMElements();
    
    // Cập nhật UI lần đầu
    updateUI();
    handleAvatar();

    // Sử dụng debounce cho storage event
    const debouncedUpdate = debounce(() => {
        updateUI();
        handleAvatar();
    }, 250);

    // Lắng nghe thay đổi localStorage
    window.addEventListener('storage', debouncedUpdate);
});

// Kiểm tra đăng nhập cho các game
function isLoggedIn(user) {
    return Boolean(user && user !== 'null');
}

// Các hàm chuyển hướng game được giữ nguyên
function redirectToGame1() {
    const {isLoggedIn, user} = getUserState();
    if (isLoggedIn) {
        window.location.href = "flappybird.html";
    } else {
        alert("Hãy đăng ký và đăng nhập để có trải nghiệm tốt nhất");
        window.location.href = "flappybird.html";
    }
}
  
function redirectToGame2() {
    var loggedInUser = localStorage.getItem("loggedInUser");
    if (isLoggedIn(loggedInUser)) {
        window.location.href = "chessai.html";
    } else {
        alert("Hãy đăng ký và đăng nhập để có trải nghiệm tốt nhất");
        window.location.href = "chessai.html";
    }
}
  
function redirectToGame3() {
    var loggedInUser = localStorage.getItem("loggedInUser");
    if (isLoggedIn(loggedInUser)) {
        window.location.href = "chess.html";
    } else {
        alert("Hãy đăng ký và đăng nhập để có trải nghiệm tốt nhất");
        window.location.href = "chess.html";
    }
}
  
function redirectToGame4() {
    var loggedInUser = localStorage.getItem("loggedInUser");
    if (isLoggedIn(loggedInUser)) {
        window.location.href = "tictactoeai.html";
    } else {
        alert("Hãy đăng ký và đăng nhập để có trải nghiệm tốt nhất");
        window.location.href = "tictactoeai.html";
    }
}
  
function redirectToGame5() {
    var loggedInUser = localStorage.getItem("loggedInUser");
    if (isLoggedIn(loggedInUser)) {
        window.location.href = "tictactoe.html";
    } else {
        alert("Hãy đăng ký và đăng nhập để có trải nghiệm tốt nhất");
        window.location.href = "tictactoe.html";
    }
}
  
function redirectToGame6() {
    var loggedInUser = localStorage.getItem("loggedInUser");
    if (isLoggedIn(loggedInUser)) {
        window.location.href = "snake.html";
    } else {
        alert("Hãy đăng ký và đăng nhập để có trải nghiệm tốt nhất");
        window.location.href = "snake.html";
    }
}
  
function redirectToGame7() {
    var loggedInUser = localStorage.getItem("loggedInUser");
    if (isLoggedIn(loggedInUser)) {
        window.location.href = "Minesweeper.html";
    } else {
        alert("Hãy đăng ký và đăng nhập để có trải nghiệm tốt nhất");
        window.location.href = "Minesweeper.html";
    }
}
  
function redirectToGame8() {
    var loggedInUser = localStorage.getItem("loggedInUser");
    if (isLoggedIn(loggedInUser)) {
        window.location.href = "Thuthachdonho.html";
    } else {
        alert("Hãy đăng ký và đăng nhập để có trải nghiệm tốt nhất");
        window.location.href = "Thuthachdonho.html";
    }
}

function redirectToGame9() {
    var loggedInUser = localStorage.getItem("loggedInUser");
    if (isLoggedIn(loggedInUser)) {
        window.location.href = "ghephinh.html";
    } else {
        alert("Hãy đăng ký và đăng nhập để sử dụng");
        window.location.href = "dangnhapdangki.html";
    }
}

function redirectToGame10() {
    var loggedInUser = localStorage.getItem("loggedInUser");
    if (isLoggedIn(loggedInUser)) {
        window.location.href = "nhandang_game.html";
    } else {
        alert("Hãy đăng ký và đăng nhập để sử dụng");
        window.location.href = "dangnhapdangki.html";
    }
}
  
function redirectToApp1() {
    var loggedInUser = localStorage.getItem("loggedInUser");
    if (isLoggedIn(loggedInUser)) {
        window.location.href = "Weather.html";
    } else {
        alert("Vui lòng đăng nhập để để sử dụng App thời tiết");
        redirectToLoginPage();
    }
}
  
function redirectToApp2() {
    var loggedInUser = localStorage.getItem("loggedInUser");
    if (isLoggedIn(loggedInUser)) {
        window.location.href = "Tocdogo.html";
    } else {
        alert("Hãy đăng ký và đăng nhập để có trải nghiệm tốt nhất");
        window.location.href = "Tocdogo.html";
    }
}
  
function redirectToApp3() {
    window.location.href = "Sinhnhat.html";
}

function redirectToApp4() {
    window.location.href = "firework-with-audio/dist/index.html";
}

function redirectToApp5() {
    var loggedInUser = localStorage.getItem("loggedInUser");
    if (isLoggedIn(loggedInUser)) {
        window.location.href = "ChatbotAi.html";
    } else {
        alert("Hãy đăng ký và đăng nhập để có trải nghiệm tốt nhất");
        window.location.href = "ChatbotAi.html";
    }
}

function redirectToHbdBa() {
    window.location.href = "Birthday.html";
}

var modal = document.getElementById("updateModal");

var updateButton = document.getElementById("updateButton");

var closeBtn = document.getElementsByClassName("close")[0];

if (updateButton) {
    updateButton.onclick = function() {
        modal.style.display = "block";
    }
}

if (closeBtn) {
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.onload = function() {
    var modalDismissed = localStorage.getItem("modalDismissed");
    if (!modalDismissed) {
        if (typeof openUpdatePopup === 'function') {
            openUpdatePopup();
        }
        localStorage.setItem("modalDismissed", "true");
        setTimeout(function() {
            localStorage.removeItem("modalDismissed");
        }, 3600000); 
    }

    // Áp dụng màu nền từ localStorage nếu có
    let savedGradient = localStorage.getItem("backgroundGradient");
    if (savedGradient) {
        document.getElementsByTagName("BODY")[0].style.backgroundImage = savedGradient;
    }
};

function redirectToLoginPage() {
    window.location.href = "dangnhapdangki.html";
}

function redirectToPage1() {
    window.location.href = "dangnhap.html";
}

function redirectToPage2() {
    window.location.href = "dangki.html";
}

function redirectToAdminPage() {
    window.location.href = "admin.html"
}