// Firebase 콘솔 → 프로젝트 설정 → 내 앱(웹)에서 복사한 값을 붙여 넣어요.
// 이 값은 웹 앱에 공개되는 값이라 GitHub에 올려도 괜찮아요. 실제 잠금은 firestore.rules가 해요.
window.DANI_CONFIG = {
  firebase: {
    apiKey: "여기에_apiKey",
    authDomain: "여기에_authDomain",
    projectId: "여기에_projectId",
    storageBucket: "여기에_storageBucket",
    messagingSenderId: "여기에_messagingSenderId",
    appId: "여기에_appId"
  },
  // 엄마(소유자)의 구글 이메일. firestore.rules의 OWNER_EMAIL과 똑같이 넣어요.
  ownerEmail: "여기에_엄마_구글_이메일"
};
