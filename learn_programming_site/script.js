const lessonData = {
  languages: [
    {title: "مقدمة عن لغات البرمجة", content: "هنا شرح مبسط عن لغات البرمجة."},
    {title: "تمرين", content: "اكتب برنامج يطبع Hello World."}
  ],
  web: [
    {title: "أساسيات HTML", content: "HTML هي لغة بناء صفحات الويب."},
    {title: "اختبار", content: "ما هي وسم البداية لصفحة HTML؟"}
  ],
  apps: [
    {title: "مدخل لتطوير التطبيقات", content: "شرح عن التطبيقات."},
    {title: "مشروع", content: "ابني تطبيق آلة حاسبة بسيطة."}
  ]
};

function openPath(path) {
  document.getElementById("landing").style.display = "none";
  document.getElementById("content").style.display = "block";
  const area = document.getElementById("lessonArea");
  area.innerHTML = "";
  lessonData[path].forEach(lesson => {
    let div = document.createElement("div");
    div.className = "lesson";
    div.innerHTML = `<h3>${lesson.title}</h3><p>${lesson.content}</p>`;
    area.appendChild(div);
  });
  localStorage.setItem("lastPath", path);
}

function goBack() {
  document.getElementById("landing").style.display = "block";
  document.getElementById("content").style.display = "none";
}

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

document.getElementById("musicToggle").addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  if(music.paused) music.play();
  else music.pause();
});

// استرجاع آخر مسار
window.onload = () => {
  const lastPath = localStorage.getItem("lastPath");
  if(lastPath) openPath(lastPath);
};
