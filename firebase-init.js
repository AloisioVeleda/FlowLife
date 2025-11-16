// Sua configuração do Firebase que você já forneceu
const firebaseConfig = {
  apiKey: "AIzaSyB1SkVDfElDAYlNQBpY_t2CC7lBIVLDm7o",
  authDomain: "flowlifeapp-d7e44.firebaseapp.com",
  projectId: "flowlifeapp-d7e44",
  storageBucket: "flowlifeapp-d7e44.firebasestorage.app",
  messagingSenderId: "247804779175",
  appId: "1:247804779175:web:aff51eefa8b1f149d15982"
};

// Inicializa o Firebase, garantindo que isso aconteça apenas uma vez
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Disponibiliza os serviços de Autenticação e Banco de Dados globalmente
// para que qualquer outro script da sua aplicação possa usá-los.
const auth = firebase.auth();
const db = firebase.firestore();
