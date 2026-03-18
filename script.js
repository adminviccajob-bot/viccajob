const translations = {
  fr: {
    accueil: "Bienvenue sur Vicca Job ! Postez un job ou postulez facilement.",
    sabaTitle: "Saba Akazi",
    tangaTitle: "Tanga Akazi",
    jobsTitle: "Akazi Gahari",
    chatTitle: "Chat",
    loginTitle: "Login",
    registerTitle: "Register",
    notification: "Votre post sera actif pendant peu de temps. Contact Admin: adminviccajob@gmail.com | +25772206647"
  },
  en: {
    accueil: "Welcome to Vicca Job! Apply or post a job easily.",
    sabaTitle: "Apply Job",
    tangaTitle: "Offer Job",
    jobsTitle: "Available Jobs",
    chatTitle: "Chat",
    loginTitle: "Login",
    registerTitle: "Register",
    notification: "Your post will be active for a short time. Contact Admin: adminviccajob@gmail.com | +25772206647"
  },
  ki: {
    accueil: "Karibu kuri Vicca Job! Saba canke utange akazi neza.",
    sabaTitle: "Saba Akazi",
    tangaTitle: "Tanga Akazi",
    jobsTitle: "Akazi Gahari",
    chatTitle: "Chat",
    loginTitle: "Login",
    registerTitle: "Register",
    notification: "Post yawe izoguma igihe gito. Contact Admin: adminviccajob@gmail.com | +25772206647"
  },
  sw: {
    accueil: "Karibu Vicca Job! Omba au toa kazi kwa urahisi.",
    sabaTitle: "Omba Kazi",
    tangaTitle: "Toa Kazi",
    jobsTitle: "Kazi Zipo",
    chatTitle: "Chat",
    loginTitle: "Ingia",
    registerTitle: "Jisajili",
    notification: "Post yako itabaki muda mfupi. Contact Admin: adminviccajob@gmail.com | +25772206647"
  },
  ar: {
    accueil: "مرحبا في Vicca Job! قدم أو اعرض وظيفة بسهولة.",
    sabaTitle: "تقديم وظيفة",
    tangaTitle: "اعرض وظيفة",
    jobsTitle: "الوظائف المتاحة",
    chatTitle: "الدردشة",
    loginTitle: "تسجيل الدخول",
    registerTitle: "إنشاء حساب",
    notification: "سيظل منشورك نشطًا لفترة قصيرة. Contact Admin: adminviccajob@gmail.com | +25772206647"
  }
};

let currentLang = 'fr';
const langSelect = document.getElementById("lang");
langSelect.addEventListener("change",(e)=>{
  currentLang = e.target.value;
  showAccueil();
});

// Notification helper
function showNotification(){
  const n = document.getElementById("notification");
  n.innerText = translations[currentLang].notification;
  n.style.display='block';
  setTimeout(()=>{ n.style.display='none'; }, 8000);
}

// Accueil
function showAccueil(){
  document.getElementById("app").innerHTML = `<h2>${translations[currentLang].accueil}</h2>`;
  showNotification();
}

// Saba Akazi
function showSaba(){
  document.getElementById("app").innerHTML = `
    <h2>${translations[currentLang].sabaTitle}</h2>
    <form id="sabaForm">
      <input type="text" name="name" placeholder="Izina" required>
      <input type="text" name="pays" placeholder="Pays" required>
      <input type="text" name="ville" placeholder="Ville" required>
      <input type="tel" name="tel" placeholder="Numero Tel" required>
      <input type="number" name="age" placeholder="Age" required>
      <input type="text" name="residence" placeholder="Residence actuel" required>
      <input type="email" name="email" placeholder="Email" required>
      <label>Photo:</label><input type="file" name="photo" accept="image/*"><br>
      <label>Video:</label><input type="file" name="video" accept="video/*"><br>
      <label>PDF:</label><input type="file" name="pdf" accept="application/pdf"><br>
      <button type="submit">Ohereza</button>
    </form>
    <div id="message"></div>
  `;
  const form = document.getElementById("sabaForm");
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    document.getElementById("message").innerHTML = `<p style="color:green;">Post yawe yoherejwe! ${translations[currentLang].notification}</p>`;
    form.reset();
    showNotification();
  });
}

// Tanga Akazi
function showTanga(){
  document.getElementById("app").innerHTML = `
    <h2>${translations[currentLang].tangaTitle}</h2>
    <form id="tangaForm">
      <input type="text" name="entreprise" placeholder="Izina rya entreprise" required>
      <input type="text" name="pays" placeholder="Pays" required>
      <input type="text" name="ville" placeholder="Ville Av N°" required>
      <input type="tel" name="tel" placeholder="Numero zutanga akazi" required>
      <input type="email" name="email" placeholder="Email" required>
      <label>Photo:</label><input type="file" name="photo" accept="image/*"><br>
      <label>Video:</label><input type="file" name="video" accept="video/*"><br>
      <label>PDF:</label><input type="file" name="pdf" accept="application/pdf"><br>
      <button type="submit">Tangaza</button>
    </form>
    <div id="message"></div>
  `;
  const form = document.getElementById("tangaForm");
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    document.getElementById("message").innerHTML = `<p style="color:green;">Post yako yoherejwe! ${translations[currentLang].notification}</p>`;
    form.reset();
    showNotification();
  });
}

// Akazi Gahari
function showJobs(){
  document.getElementById("app").innerHTML = `<h2>${translations[currentLang].jobsTitle}</h2>
    <ul>
      <li>Chauffeur</li>
      <li>Comptable</li>
      <li>Secrétaire</li>
    </ul>`;
}

// Chat
function showChat(){
  document.getElementById("app").innerHTML = `
    <h2>${translations[currentLang].chatTitle}</h2>
    <div id="chatBox" style="border:1px solid #ccc; padding:10px; height:200px; overflow:auto;"></div>
    <input type="text" id="chatInput" placeholder="Andika message...">
    <button onclick="sendMessage()">Ohereza</button>
  `;
}
function sendMessage(){
  const input = document.getElementById("chatInput");
  if(input.value.trim()==='') return;
  const chatBox = document.getElementById("chatBox");
  chatBox.innerHTML += `<p><b>You:</b> ${input.value}</p>`;
  input.value='';
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Login/Register
function login(){
  document.getElementById("app").innerHTML = `
    <h2>${translations[currentLang].loginTitle}</h2>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Injira</button>
  `;
}
function register(){
  document.getElementById("app").innerHTML = `
    <h2>${translations[currentLang].registerTitle}</h2>
    <input type="text" placeholder="Izina">
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Register</button>
  `;
}

// Default page
showAccueil();