// -------------------------
// 1️⃣ Translations (Multilingual)
const translations = {
  fr: { "navbar.title":"Vicca Job","navbar.search":"Rechercher...","navbar.login":"Login","navbar.logout":"Logout",
        "tabs.accueil":"Accueil","tabs.demande":"Demande d'emploi","tabs.donner":"Donner l'emploi",
        "tabs.emploi":"Amploi dispo","tabs.messages":"Messages","tabs.contact":"Contact",
        "sabaForm.name":"Nom","sabaForm.country":"Pays","sabaForm.city":"Ville","sabaForm.phone":"Numero Tel",
        "sabaForm.email":"Email","sabaForm.photo":"Photo","sabaForm.video":"Video","sabaForm.pdf":"PDF","sabaForm.submit":"Envoyer",
        "tangaForm.company":"Nom d'entreprise","tangaForm.country":"Pays","tangaForm.city":"Ville","tangaForm.phone":"Numero Tel",
        "tangaForm.email":"Email","tangaForm.photo":"Photo","tangaForm.video":"Video","tangaForm.pdf":"PDF","tangaForm.submit":"Envoyer",
        "chat.input":"Écrire un message...","chat.send":"Envoyer"},
  en: { "navbar.title":"Vicca Job","navbar.search":"Search...","navbar.login":"Login","navbar.logout":"Logout",
        "tabs.accueil":"Home","tabs.demande":"Job Request","tabs.donner":"Give Job",
        "tabs.emploi":"Available Jobs","tabs.messages":"Messages","tabs.contact":"Contact",
        "sabaForm.name":"Name","sabaForm.country":"Country","sabaForm.city":"City","sabaForm.phone":"Phone Number",
        "sabaForm.email":"Email","sabaForm.photo":"Photo","sabaForm.video":"Video","sabaForm.pdf":"PDF","sabaForm.submit":"Submit",
        "tangaForm.company":"Company Name","tangaForm.country":"Country","tangaForm.city":"City","tangaForm.phone":"Phone Number",
        "tangaForm.email":"Email","tangaForm.photo":"Photo","tangaForm.video":"Video","tangaForm.pdf":"PDF","tangaForm.submit":"Submit",
        "chat.input":"Write a message...","chat.send":"Send"},
  sw: { "navbar.title":"Vicca Job","navbar.search":"Tafuta...","navbar.login":"Ingia","navbar.logout":"Toka",
        "tabs.accueil":"Nyumbani","tabs.demande":"Omba Kazi","tabs.donner":"Toa Kazi",
        "tabs.emploi":"Kazi Zinazopatikana","tabs.messages":"Ujumbe","tabs.contact":"Wasiliana",
        "sabaForm.name":"Jina","sabaForm.country":"Nchi","sabaForm.city":"Mji","sabaForm.phone":"Namba ya Simu",
        "sabaForm.email":"Barua Pepe","sabaForm.photo":"Picha","sabaForm.video":"Video","sabaForm.pdf":"PDF","sabaForm.submit":"Tuma",
        "tangaForm.company":"Jina la Kampuni","tangaForm.country":"Nchi","tangaForm.city":"Mji","tangaForm.phone":"Namba ya Simu",
        "tangaForm.email":"Barua Pepe","tangaForm.photo":"Picha","tangaForm.video":"Video","tangaForm.pdf":"PDF","tangaForm.submit":"Tuma",
        "chat.input":"Andika ujumbe...","chat.send":"Tuma"},
  rn: { "navbar.title":"Vicca Job","navbar.search":"Shakisha...","navbar.login":"Injira","navbar.logout":"Sohoka",
        "tabs.accueil":"Uruhuriro","tabs.demande":"Saba Akazi","tabs.donner":"Tanga Akazi",
        "tabs.emploi":"Akazi Kahari","tabs.messages":"Ubutumwa","tabs.contact":"Contact",
        "sabaForm.name":"Izina","sabaForm.country":"Igihugu","sabaForm.city":"Umujyi","sabaForm.phone":"Numero Tel",
        "sabaForm.email":"Email","sabaForm.photo":"Ifoto","sabaForm.video":"Video","sabaForm.pdf":"PDF","sabaForm.submit":"Ohereza",
        "tangaForm.company":"Izina rya company","tangaForm.country":"Igihugu","tangaForm.city":"Umujyi","tangaForm.phone":"Numero Tel",
        "tangaForm.email":"Email","tangaForm.photo":"Ifoto","tangaForm.video":"Video","tangaForm.pdf":"PDF","tangaForm.submit":"Ohereza",
        "chat.input":"Andika ubutumwa...","chat.send":"Ohereza"},
  ar: { "navbar.title":"فيكا جوب","navbar.search":"بحث...","navbar.login":"تسجيل الدخول","navbar.logout":"تسجيل الخروج",
        "tabs.accueil":"الرئيسية","tabs.demande":"طلب وظيفة","tabs.donner":"إعطاء وظيفة",
        "tabs.emploi":"وظائف متاحة","tabs.messages":"الرسائل","tabs.contact":"الاتصال",
        "sabaForm.name":"الاسم","sabaForm.country":"الدولة","sabaForm.city":"المدينة","sabaForm.phone":"رقم الهاتف",
        "sabaForm.email":"البريد الإلكتروني","sabaForm.photo":"صورة","sabaForm.video":"فيديو","sabaForm.pdf":"PDF","sabaForm.submit":"إرسال",
        "tangaForm.company":"اسم الشركة","tangaForm.country":"الدولة","tangaForm.city":"المدينة","tangaForm.phone":"رقم الهاتف",
        "tangaForm.email":"البريد الإلكتروني","tangaForm.photo":"صورة","tangaForm.video":"فيديو","tangaForm.pdf":"PDF","tangaForm.submit":"إرسال",
        "chat.input":"اكتب رسالة...","chat.send":"إرسال"}
};

// -------------------------
// 2️⃣ Update Language Function
function updateLanguage(lang){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.getAttribute('data-i18n');
    if(translations[lang] && translations[lang][key]){
      if(el.tagName==="INPUT") el.placeholder=translations[lang][key];
      else el.innerText=translations[lang][key];
    }
  });
}
document.getElementById('langSelector').addEventListener('change', e=>updateLanguage(e.target.value));
updateLanguage('fr'); // default

// -------------------------
// 3️⃣ Tabs functionality
document.querySelectorAll('.tab-btn').forEach(tab=>{
  tab.onclick=()=>{
    document.querySelectorAll('.tab-content').forEach(tc=>tc.classList.remove('active'));
    document.getElementById(tab.dataset.target).classList.add('active');
  };
});

// -------------------------
// 4️⃣ Login / Logout
let users=[]; let currentUser=localStorage.getItem("viccaJobUser")||null;
if(currentUser) users.push(currentUser);

document.getElementById('loginBtn').onclick=()=>{
  const username=prompt("Entrez votre nom:");
  if(!username) return;
  currentUser=username;
  if(!users.includes(username)) users.push(username);
  localStorage.setItem("viccaJobUser",username);
  renderContacts();
  alert(`${username} connecté`);
};
document.getElementById('logoutBtn').onclick=()=>{
  localStorage.removeItem("viccaJobUser");
  currentUser=null;
  alert("Déconnecté");
};

// -------------------------
// 5️⃣ Contact + Chat
let messages={}; let currentChatUser=null;
function renderContacts(){
  const container=document.getElementById('contactList'); container.innerHTML="";
  users.forEach(u=>{
    const div=document.createElement('div'); div.classList.add('contact-item');
    div.innerHTML=`<span>${u}</span>
      <button onclick="startChat('${u}')">Chat</button>
      <button onclick="callUser('${u}')">Call</button>`;
    container.appendChild(div);
  });
}
function startChat(username){
  currentChatUser=username;
  const chatWindow=document.querySelector('.messages-list'); chatWindow.innerHTML="";
  if(messages[username]) messages[username].forEach(m=>{
    const div=document.createElement('div');
    div.innerText=m.type==="text"?m.msg:`[${m.type.toUpperCase()}] ${m.msg}`;
    chatWindow.appendChild(div);
  });
}
function callUser(username){ alert(`Appel à ${username}... (simulation)`); }
renderContacts();

// -------------------------
// 6️⃣ Posts + Saba/Tanga
let posts=[];
document.getElementById('sabaForm').onsubmit=e=>{
  e.preventDefault();
  const data=new FormData(e.target);
  const post={type:"saba",name:data.get("name"),country:data.get("country"),city:data.get("city"),
    phone:data.get("phone"),email:data.get("email"),photo:data.get("photo")?.name||"",
    video:data.get("video")?.name||"",pdf:data.get("pdf")?.name||""};
  posts.push(post); renderPosts();
  alert("Saba akazi witeguye neza kugakora"); e.target.reset();
};
document.getElementById('tangaForm').onsubmit=e=>{
  e.preventDefault();
  const data=new FormData(e.target);
  const post={type:"tanga",company:data.get("company"),country:data.get("country"),city:data.get("city"),
    phone:data.get("phone"),email:data.get("email"),photo:data.get("photo")?.name||"",
    video:data.get("video")?.name||"",pdf:data.get("pdf")?.name||""};
  posts.push(post); renderPosts();
  alert("Ntutinye gutanga akazi saba ibimuranga"); e.target.reset();
};

// -------------------------
// 7️⃣ Render posts
function renderPosts(){
  const container=document.getElementById('postsList'); container.innerHTML="";
  const jobsContainer=document.getElementById('jobsList'); jobsContainer.innerHTML="";
  posts.forEach(p=>{
    const div=document.createElement('div');
    div.innerText=p.type==="saba"?`${p.name} - ${p.city}, ${p.country}`:`${p.company} - ${p.city}, ${p.country}`;
    container.appendChild(div);
    const jDiv=document.createElement('div'); jDiv.innerText=div.innerText; jobsContainer.appendChild(jDiv);
  });
}

// -------------------------
// 8️⃣ Search bar
document.getElementById('postSearch').oninput=e=>{
  const val=e.target.value.toLowerCase();
  document.querySelectorAll('#postsList div').forEach(d=>d.style.display=d.innerText.toLowerCase().includes(val)?"block":"none");
  document.querySelectorAll('#jobsList div').forEach(d=>d.style.display=d.innerText.toLowerCase().includes(val)?"block":"none");
};

// -------------------------
// 9️⃣ Chat send
document.getElementById('sendMsg').onclick=()=>{
  const input=document.getElementById('chatInput'); const fileInput=document.getElementById('chatFile');
  if(!currentChatUser){alert("Sélectionnez un contact"); return;}
  if(input.value){ if(!messages[currentChatUser]) messages[currentChatUser]=[];
    messages[currentChatUser].push({msg:input.value,type:"text"}); input.value=""; }
  if(fileInput.files.length){ const f=fileInput.files[0];
    if(!messages[currentChatUser]) messages[currentChatUser]=[];
    const type=f.type.startsWith("image")?"photo":f.type.startsWith("video")?"video":"pdf";
    messages[currentChatUser].push({msg:f.name,type}); fileInput.value=""; }
  startChat(currentChatUser);
};