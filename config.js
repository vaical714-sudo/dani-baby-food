// Firebase 콘솔 → 프로젝트 설정 → 내 앱(웹)에서 복사한 값을 붙여 넣어요.
// 이 값은 웹 앱에 공개되는 값이라 GitHub에 올려도 괜찮아요. 실제 잠금은 firestore.rules가 해요.
window.DANI_CONFIG = {
  firebase: {
    apiKey: "AIzaSyAhcXLQUkbyt08xh0TSXAV6Dov3l48rfBg",
    authDomain: "dani-baby-food.firebaseapp.com",
    projectId: "dani-baby-food",
    storageBucket: "dani-baby-food.firebasestorage.app",
    messagingSenderId: "433899641846",
    appId: "1:433899641846:web:d60a1e104bd9573a00c5d7"
  },
  // 엄마(소유자)의 구글 이메일. firestore.rules의 OWNER_EMAIL과 똑같이 넣어요.
  ownerEmail: "vaical714@gmail.com"
};
