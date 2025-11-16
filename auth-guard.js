// auth-guard.js — versão simplificada e segura
if (!firebase.apps.length) {
  // Firebase já é inicializado em firebase-init.js
  console.log("Firebase inicializado globalmente");
}

const auth = firebase.auth();
auth.onAuthStateChanged(user => {
  if (!user) {
    console.warn("Usuário não logado. Redirecionando...");
    window.location.href = "login.html";
  }
});
