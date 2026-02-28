// Importar Firebase y Realtime Database
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";

// Configuración Firebase (reemplaza con la tuya)
const firebaseConfig = {
  apiKey: "AIzaSyDvy6eiNWNw9_PJr3pl8wuHdskIWqNuMgo",
  authDomain: "misxv-mariangel.firebaseapp.com",
  databaseURL: "https://misxv-mariangel-default-rtdb.firebaseio.com",
  projectId: "misxv-mariangel",
  storageBucket: "misxv-mariangel.firebasestorage.app",
  messagingSenderId: "1043781952372",
  appId: "1:1043781952372:web:3a17f95ff7fd35fcc54221"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

console.log("✅ Firebase conectado correctamente!");

// Función para enviar un buen deseo
window.submitWish = function () {
  const name = document.getElementById("wish-name").value.trim();
  const message = document.getElementById("wish-message").value.trim();

  if (name !== "" && message !== "") {
    push(ref(db, "buenos-deseos/"), {
      nombre: name,
      mensaje: message,
      timestamp: new Date().toISOString()
    })
    .then(() => {
      alert("¡Tu buen deseo ha sido enviado! 🌟");
      document.getElementById("wish-name").value = "";
      document.getElementById("wish-message").value = "";

      // Ocultar formulario
      document.getElementById('wish-form').classList.add('hidden');

      // Mostrar lista de deseos y actualizarla
      const wishesDiv = document.getElementById('wishes');
      if (wishesDiv.classList.contains('hidden')) {
          wishesDiv.classList.remove('hidden');
      }
      cargarDeseos();
    })
    .catch((error) => {
      console.error("Error al guardar el deseo:", error);
    });
  } else {
    alert("Por favor, completa ambos campos antes de enviar.");
  }
};

// Función para cargar y mostrar los buenos deseos desde Firebase
function cargarDeseos() {
  const wishesDiv = document.getElementById('wishes');
  const wishesRef = ref(db, 'buenos-deseos/');

  onValue(wishesRef, (snapshot) => {
    const data = snapshot.val();
    if (!data) {
      wishesDiv.innerHTML = "<p>No hay deseos aún. Sé el primero 💌</p>";
      return;
    }
    const arrayWishes = Object.values(data).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    wishesDiv.innerHTML = arrayWishes.map(wish => `
      <p><strong>${wish.nombre}:</strong> ${wish.mensaje}</p>
    `).join('');
  });
}

// Exponer cargarDeseos globalmente para usar desde HTML u otros scripts
window.cargarDeseos = cargarDeseos;

// Funciones para mostrar/ocultar formulario y lista
window.toggleWishForm = function() {
  const form = document.getElementById('wish-form');
  form.classList.toggle('hidden');
};

window.toggleWishes = function() {
  const wishesDiv = document.getElementById('wishes');
  wishesDiv.classList.toggle('hidden');
};

// Cargar deseos automáticamente al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  cargarDeseos();
});

