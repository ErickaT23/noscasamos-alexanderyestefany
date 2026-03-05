// ✅ LISTA DE INVITADOS (adultos + niños)
const guests = [
  { id: "1", name: "Familia: Ajú Quiche", adults: 2, kids: 0, gender: "mixto" },
  { id: "2", name: "Familia: Ajú Quiche", adults: 2, kids: 0, gender: "mixto" },
  { id: "3", name: "Familia: Aguilar Ajú ", adults: 2, kids: 0, gender: "mixto" },
  { id: "4", name: "Familia: Ajú Guevara ", adults: 2, kids: 0, gender: "mixto" },
  { id: "5", name: "Familia: Ajú López", adults: 4, kids: 0, gender: "mixto" },
  { id: "6", name: "Familia: Ajú Cacoj", adults: 4, kids: 2, gender: "mixto" },
  { id: "7", name: "Familia: Ajú Ventura", adults: 2, kids: 0, gender: "mixto" },
  { id: "8", name: "Familia: Quiché Maldonado", adults: 3, kids: 2, gender: "mixto" },
  { id: "9", name: "Familia: Quiché Ajú", adults: 5, kids: 0, gender: "mixto" },
  { id: "10", name: "Familia: Apcip Quiché", adults: 2, kids: 2, gender: "mixto" },
  { id: "11", name: "Familia: Poz Palaj", adults: 4, kids: 0, gender: "mixto" },
  { id: "12", name: "Familia: Palaj Mohoh", adults: 1, kids: 2, gender: "mixto" },
  { id: "13", name: "Nilsa Morales", adults: 1, kids: 1, gender: "mixto" },
  { id: "14", name: "Familia: Ramos pacay", adults: 2, kids: 2, gender: "mixto" },
  { id: "15", name: "Familia: Hernández Mohoh", adults: 2, kids: 0, gender: "mixto" },
  { id: "16", name: "Familia: Quiej Espada", adults: 2, kids: 0, gender: "mixto" },
  { id: "17", name: "Familia: Garcia Quiche", adults: 3, kids: 0, gender: "mixto" },
  { id: "18", name: "Familia: Calderón Díaz", adults: 5, kids: 0, gender: "mixto" },
  { id: "19", name: "Familia: Guevara López", adults: 2, kids: 0, gender: "mixto" },
  { id: "20", name: "Familia: López Sánchez", adults: 2, kids: 0, gender: "mixto" },
  { id: "21", name: "Veralí Anderson López", adults: 2, kids: 0, gender: "mixto" },
  { id: "22", name: "José, Julissa Cham", adults: 2, kids: 0, gender: "mixto" },
  { id: "23", name: "Larissa Rodas", adults: 1, kids: 0, gender: "mixto" },
  { id: "24", name: "Greicy Cham", adults: 1, kids: 0, gender: "mixto" },
  { id: "25", name: "Fabiola Mendonza", adults: 1, kids: 0, gender: "mixto" },
  { id: "26", name: "Familia: Rodríguez Díaz", adults: 3, kids: 0, gender: "mixto" },
  { id: "27", name: "Familia: Cuxeva Ramos", adults: 2, kids: 0, gender: "mixto" },
  { id: "28", name: "Familia: Arenales Cuxeva", adults: 2, kids: 1, gender: "mixto" },
  { id: "29", name: "Kesly, Vilma Espinoza", adults: 2, kids: 0, gender: "mixto" },
  { id: "30", name: "Xavier González", adults: 1, kids: 0, gender: "mixto" },
  { id: "31", name: "Familia: López Flores", adults: 2, kids: 0, gender: "mixto" },
  { id: "32", name: "Isabel Reynoso", adults: 1, kids: 0, gender: "mixto" },
  { id: "33", name: "Familia: Tojil Baten", adults: 4, kids: 0, gender: "mixto" },
  { id: "34", name: "Sofía, Mariela Tojil", adults: 1, kids: 1, gender: "mixto" },
  { id: "35", name: "Familia: Martínez López", adults: 2, kids: 0, gender: "mixto" },
  { id: "36", name: "Silvia Taper", adults: 1, kids: 1, gender: "mixto" },
  { id: "37", name: "María Cujuy ", adults: 1, kids: 0, gender: "mixto" },
  { id: "38", name: "Brian Haj", adults: 1, kids: 0, gender: "mixto" },
  { id: "39", name: "Alfonso Haj", adults: 1, kids: 0, gender: "mixto" },
  { id: "40", name: "Familia: González Rivas", adults: 2, kids: 0, gender: "mixto" },
  { id: "41", name: "Familia: Reynoso López", adults: 2, kids: 0, gender: "mixto" },
  { id: "42", name: "Familia: Reynoso Estrada", adults: 2, kids: 0, gender: "mixto" },
  { id: "43", name: "Familia: Martínez Ordóñez", adults: 2, kids: 0, gender: "mixto" },
  { id: "44", name: "Familia: Martínez Hernández", adults: 2, kids: 2, gender: "mixto" },
  { id: "45", name: "Familia: Palaj Poncio", adults: 3, kids: 0, gender: "mixto" },
  { id: "46", name: "Familia: Tabelán tojil", adults: 3, kids: 1, gender: "mixto" },
  { id: "47", name: "Jimmy Loida", adults: 1, kids: 1, gender: "mixto" },
  { id: "48", name: "Familia: Reynoso Esquite", adults: 2, kids: 0, gender: "mixto" },
  { id: "49", name: "Rubén, Berta Taper", adults: 2, kids: 0, gender: "mixto" },
  { id: "50", name: "Familia: González de Leon", adults: 6, kids: 1, gender: "mixto" },
  { id: "51", name: "Familia: González Sánchez", adults: 2, kids: 0, gender: "mixto" },
  { id: "52", name: "Luis Alberto Tojil", adults: 1, kids: 0, gender: "mixto" },
];

document.addEventListener("DOMContentLoaded", function () {
  function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    if (!queryString) return params;

    const pairs = queryString.split("&");
    for (const pair of pairs) {
      const [key, value] = pair.split("=");
      params[decodeURIComponent(key)] = decodeURIComponent((value || "").replace(/\+/g, " "));
    }
    return params;
  }

  const queryParams = getQueryParams();
  const guestId = queryParams.id;

  const guest = guests.find((g) => g.id === guestId);

  if (guest) {
    // 👇 DISPONIBLE PARA script.js (WhatsApp, etc.)
    window.currentGuest = guest;

    // ✅ Normalizamos valores por si algún invitado no trae kids/adults
    const adults = Number(guest.adults || 0);
    const kids = Number(guest.kids || 0);
    const totalPasses = adults + kids;

    // ✅ Texto de invitación (invitado/a/os/as)
    let invitText = "";

    // Caso 1: solo 1 pase (1 adulto y 0 niños)
    if (totalPasses === 1) {
      invitText =
        guest.gender === "femenino"
          ? `¡${guest.name}, está invitada!`
          : `¡${guest.name}, está invitado!`;
    } else {
      // Caso 2: varios pases
      if (guest.gender === "femenino") {
        invitText = `¡${guest.name}, están invitadas!`;
      } else if (guest.gender === "masculino") {
        invitText = `¡${guest.name}, están invitados!`;
      } else {
        // mixto o no definido
        invitText = `¡${guest.name}, están invitados!`;
      }
    }

    // ✅ Texto de pases: "2 adultos y 1 niño" / "1 adulto" / "3 adultos"
    let passesText = "";

    if (kids > 0 && adults > 0) {
      passesText = `${adults} adulto${adults !== 1 ? "s" : ""} y ${kids} niño${kids !== 1 ? "s" : ""}`;
    } else if (adults > 0 && kids === 0) {
      passesText = `${adults} adulto${adults !== 1 ? "s" : ""}`;
    } else if (adults === 0 && kids > 0) {
      passesText = `${kids} niño${kids !== 1 ? "s" : ""}`;
    } else {
      // Si por error viniera 0 y 0
      passesText = "Pases no definidos";
    }

    // ✅ Pintar en pantalla
    const guestNameEl = document.getElementById("guest-name");
    const passesEl = document.getElementById("passes");

    if (guestNameEl) guestNameEl.textContent = invitText;
    if (passesEl) passesEl.textContent = passesText;

  } else {
    // ❌ Invitado no encontrado
    window.currentGuest = null;

    const guestNameEl = document.getElementById("guest-name");
    if (guestNameEl) guestNameEl.textContent = "¡Invitado no encontrado!";

    const passesEl = document.getElementById("passes");
    if (passesEl) passesEl.textContent = "";

    const section = document.querySelector(".invitation-info-section");
    if (section) section.style.display = "none";
  }
});
  