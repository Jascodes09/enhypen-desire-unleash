gsap.from(".header", {
  duration: 1,
  opacity: 0,
  y: -20,
  ease: "power2.out"
});

gsap.from(".hero .text", {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "power2.out"
});

gsap.from(".album-cover", {
  duration: 1,
  scale: 0.8,
  opacity: 0,
  delay: 0.3,
  ease: "back"
});

gsap.utils.toArray("section").forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
  });
});

// Album version switch
function switchVersion(version) {
  // Hide all covers
  document.querySelectorAll(".version-cover").forEach((img) => img.classList.add("hidden"));
  document.getElementById(version).classList.remove("hidden");

  // Hide all labels/descriptions
  document.querySelectorAll(".version-label").forEach((label) => label.classList.add("hidden"));
  document.querySelectorAll(".version-desc").forEach((desc) => desc.classList.add("hidden"));

  // Show selected label + description
  const label = document.getElementById("label-" + version);
  const desc = document.getElementById("desc-" + version);

  label.classList.remove("hidden");
  desc.classList.remove("hidden");

  // Animate with GSAP
  gsap.fromTo(label, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
  gsap.fromTo(desc, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 });
}
function loadVideo() {
  document.querySelector('.custom-video').classList.add('hidden');
  document.getElementById('videoContainer').classList.remove('hidden');
}
// Vanilla Tilt
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 0.3,
});
// Scroll-to-top button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};// Floating red particles background (vampire mist vibes)
const songs = [
  { name: "Flashover", link: "https://open.spotify.com/track/4uj7LoS14txqhRylMR4Fj1?si=6beac1d00cd0413e" },
  { name: "Bad Desire (With or Without You)", link: "https://open.spotify.com/track/38pEX03GFZ0PfFDaOrpKOM?si=161067c48b86424c" },
  { name: "Loose", link: "https://open.spotify.com/track/2tqj80s8UMqFrhMAdxLuh6?si=a9c46cdd9ead4cbe" },
  { name: "Helium", link: "https://open.spotify.com/track/48jRAABr5TxjWHvoNWClGG?si=5ae897c3f8bc4b99" },
  { name: "Outside", link: "https://open.spotify.com/track/0IXWLMBZeK33mOb044Sxu6?si=e25320826c8d4dc3" },
  { name: "Too Close", link: "https://open.spotify.com/track/6gezrIScVLEnV1szuZxhvA?si=d2475f6b046f4093" }
];

document.getElementById("songButton").addEventListener("click", () => {
  const random = songs[Math.floor(Math.random() * songs.length)];
  const display = document.getElementById("randomSong");

  display.innerHTML = `
    <a href="${random.link}" target="_blank">🎧 ${random.name} → Listen on Spotify</a>
  `;

  gsap.fromTo(display, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
});
