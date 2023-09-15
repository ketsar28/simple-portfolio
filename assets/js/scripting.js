// const menuToggle = document.querySelector(".menuToggle");
const navigation = document.querySelector(".navigation");
const toggle = document.getElementById("toggle");

window.addEventListener("scroll", function () {
  const header = document.querySelector("header").classList.toggle("sticky", window.scrollY > 0);
  toggle.classList.remove("active");
  navigation.classList.remove("active");
});

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
});

//// == tes ==
// function toggleMenu() {
//   menuToggle.classList.toggle("active");
//   navigation.classList.toggle("active");
// }

const getSun = document.querySelector(".dark-mode");
const target = document.querySelector(".moon");
// // == cara 1 ==
// getSun.addEventListener("click", () => {
//   getSun.classList.toggle("active");
//   if (getSun.classList.contains("active")) {
//     document.body.classList.add("dark");
//     target.name = "sunny";
//   } else {
//     document.body.classList.remove("dark");
//     target.name = "moon";
//   }
// });

// == cara 2 ==
// local storage
// jika data distoragenya belum menerima event valuenya akan tetap dark/light
if (localStorage.getItem("value") == null) {
  localStorage.setItem("value", "light");
}

// buat event handler
getSun.addEventListener("click", () => {
  // buatkan classlist toggle pada body
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    // buat pengkondisian untuk icon dan local storage & ubah data pada local storage jika kondisi tertentu
    target.name = "sunny";
    localStorage.setItem("value", "dark");
  } else {
    target.name = "moon";
    localStorage.setItem("value", "light");
  }
});

let WStr = localStorage.getItem("value");

if (WStr == "light") {
  // buat pengkondisian untuk icon dan body supaya sinkron dengan data pada local storage
  target.name = "moon";
  document.body.classList.remove("dark");
} else if (WStr == "dark") {
  target.name = "sunny";
  document.body.classList.remove("dark");
}

// ======= typing text ========

let typing = new Typed(".typed-text", {
  strings: ["", "Web Developer", "Student on VH School", "Front End Developer"],
  loop: true,
  typeSpeed: 200,
});

// ======= dropdown skills =======

// const contentSkill = document.getElementsByClassName("content-skill");

const skills = document.querySelectorAll(".wrapper-data");
const skillsHead = document.querySelectorAll(".header-skill");

skills.forEach((el) => {
  el.parentElement.addEventListener("click", (e) => {
    // const openChev = document.querySelectorAll(".open-chevron").forEach((b) => {
    //   b.addEventListener("click", (e, i) => {
    //     e[i].classList.toggle("aktif");
    //   });
    // });

    if (e.target.classList.contains("open-programming")) {
      e.target.classList.toggle("aktif");
      el.classList.toggle("aktif");
      const write = document.querySelector(".write-skill").classList.remove("aktif");
    } else if (e.target.classList.contains("open-writter")) {
      e.target.classList.toggle("aktif");
      const program = document.querySelector(".programming-skill").classList.remove("aktif");
      el.classList.toggle("aktif");
    }
  });
});

// function toggleSkill() {
//   let getByClass = this.parentNode.getElementsByClassName;
//   for (let i = 0; i < contentSkill.length; i++) {
//     contentSkill[i].className = "content-skill";
//   }
//   if ((getByClass = "content-skill close")) {
//     this.parentNode.getByClass = "content-skill open";
//   }
// }

// skillsHead.forEach((el) => {
//   el.addEventListener("click", toggleSkill());
// });

// btnChevron.addEventListener("click", () => {
//   btnChevron.classList.toggle("aktif");
//   skills.classList.toggle("aktif");
// });

// ======== validation form ========

// username validation
function runName() {
  const contextName = document.getElementById("innerInputName");
  const getName = document.getElementById("username").value;
  const req = 8;
  const operasi = req - getName.length;
  if (getName.length == 0) {
    contextName.innerHTML = "Masukan Username Dengan Benar";
    contextName.style.color = "red";
    contextName.style.fontWeight = "bold";
    return false;
  }
  if (operasi > 0) {
    contextName.innerHTML = "Kurang " + operasi + " Lagi";
    contextName.style.color = "orange";
    contextName.style.fontWeight = "bold";
    return false;
  }
  contextName.innerHTML = "Username Valid";
  contextName.style.color = "green";
  contextName.style.fontWeight = "bold";
  return true;
}

// no.telp validation
function runTelp() {
  const contextNumber = document.getElementById("innerInputNumber");
  const getTel = document.getElementById("telphone").value;
  const validasi = /^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/;

  if (getTel.length == 0) {
    contextNumber.innerHTML = "Masukan No.Telphone Dengan Benar";
    contextNumber.style.color = "red";
    contextNumber.style.fontWeight = "bold";
    return false;
  }
  if (getTel.length !== 12) {
    contextNumber.innerHTML = "Maksimal 12 Digit";
    contextNumber.style.color = "orange";
    contextNumber.style.fontWeight = "bold";

    return false;
  }
  if (getTel.match(validasi)) {
    contextNumber.innerHTML = "Jangan Masukan Selain Angka";
    contextNumber.style.color = "red";
    contextNumber.style.fontWeight = "bold";
    return false;
  }

  contextNumber.innerHTML = "No.Telphone Valid";
  contextNumber.style.color = "green";
  contextNumber.style.fontWeight = "bold";
  return true;
}

// email vallidation
function runEmail() {
  const getEmail = document.getElementById("email").value;
  const innerInputEmail = document.getElementById("innerInputEmail");

  //   let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   if (getEmail.match(regexEmail)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // let emailAdress = "test@gmail.com";
  // console.log(runEmail(getEmail));
  if (getEmail.length == 0) {
    innerInputEmail.innerHTML = "Masukan Email Anda";
    innerInputEmail.style.color = "red";
    innerInputEmail.style.fontWeight = "bold";
    return false;
  }
  if (!getEmail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    innerInputEmail.innerHTML = "Email Tidak Cocok";
    innerInputEmail.style.color = "red";
    innerInputEmail.style.fontWeight = "bold";
    return false;
  }
  innerInputEmail.innerHTML = "Email Cocok";
  innerInputEmail.style.color = "green";
  innerInputEmail.style.fontWeight = "bold";
  return true;
}

// message validation
function runMessage() {
  const contextMessage = document.getElementById("innerInputMessage");
  const getMessage = document.getElementById("message").value;
  const requset = 20;
  const operasiSisa = requset - getMessage.length;
  if (getMessage.length == 0) {
    contextMessage.innerHTML = "Masukan Komentar atau Pesan Anda";
    contextMessage.style.color = "red";
    contextMessage.style.fontWeight = "bold";
    return false;
  }
  if (operasiSisa > 0) {
    contextMessage.innerHTML = "Kurang " + operasiSisa + " Lagi";
    contextMessage.style.color = "orange";
    contextMessage.style.fontWeight = "bold";
    return false;
  }
  contextMessage.innerHTML = "Message Sudah Terengkapi";
  contextMessage.style.color = "green";
  contextMessage.style.fontWeight = "bold";
  return true;
}

// submit validation
function submitCheck() {
  const send = document.getElementById("error-submit");
  if (!runName() || !runTelp() || !runEmail() || !runMessage()) {
    send.innerHTML = "Silahkan Cek Kembali Inputan Anda!";
    send.style.display = "block";
    send.style.color = "red";
    send.style.fontWeight = "bold";
    setTimeout(() => {
      send.style.display = "none";
    }, 3000);
    return false;
  }
  send.innerHTML = "Form Input Tervalidasi";
  alert("Format Yang Anda Masukan Sudah Terkirim!");
  send.style.color = "green";
  send.style.fontWeight = "bold";
  return true;
}
//======== akhir validation ========

// === scroll reveal ===
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(".profiles .img,.header-section,.info-wrapper h2");
sr.reveal(".const-text", { delay: 700 });
sr.reveal(".profiles .social-media ", { delay: 1000, origin: "bottom", scale: 2 });

sr.reveal("hr, .about aside,.input-wrapper", { delay: 600, origin: "right" });
sr.reveal(".info-box.one", { delay: 900, origin: "left" });
sr.reveal(".info-box.two", { delay: 1200, origin: "left" });
sr.reveal(".info-box.three", { delay: 1400, origin: "left" });
sr.reveal(".about .img", { delay: 900, origin: "left" });
sr.reveal(".programming", { delay: 900, origin: "right" });
sr.reveal(".writter", { delay: 900, origin: "left" });
sr.reveal("footer");

// sr.reveal(".education .two", { delay: 600, scale: 2 });

// === akhir ===

// =============================================
// event pada link pada saat di klik
$(".page-scroll").on("click", function (e) {
  // ambil isi href
  let tujuan = $(this).attr("href");

  //tangkap element yang bersangkutan
  let elemenTujuan = $(tujuan);

  // pindahkan scroll
  $("html,body").animate(
    {
      scrollTop: elemenTujuan.offset().top - 50,
    },
    700,
    "easeInOutCirc"
  );

  e.preventDefault();
});

// $(window).scroll(function () {
//   var wScroll = $(this).scrollTop();

//   $(".banner h2").css({
//     transform: "translate(0px, " + wScroll / 2.2 + "%)",
//   });

//   $(".banner p").css({
//     transform: "translate(0px, " + wScroll / 2 + "%)",
//   });

//   $(".banner .btn").css({
//     transform: "translate(0px, " + wScroll / 1 + "%)",
//   });
// });
