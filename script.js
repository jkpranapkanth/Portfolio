const form = document.createElement("form");
form.id = "contactForm";
form.innerHTML = `
    <input type="text" id="name" placeholder="Your Name" required>
    <input type="email" id="email" placeholder="Your Email" required>
    <input type="number" id="number" placeholder="Your Number" required>
    <textarea id="message" placeholder="Your Message" required></textarea>
    <button type="submit">Send Message</button>
`;
const statusPara = document.createElement("p"); // ✅ fixed typo
statusPara.id = "formStatus";

function createSection(id, innerHTML) {
  const section = document.createElement("section");
  section.id = id;
  section.className = "fade";
  section.innerHTML = innerHTML;
  return section;
}

// About Section
const aboutSection = createSection("about", `
  <h2>About Me</h2>
  <p>Hello! I'm <strong>Danail Raj</strong>, a passionate and creative full-stack developer with a strong interest in innovative technologies like AI, machine learning, and IoT.</p>
  <p>I love solving real-world problems through clean code and user-friendly design. My current focus is on building smart, responsive web applications and exploring the potential of Wi-Fi-based sensing systems.</p>
  <p>When I'm not coding, I enjoy reading about emerging tech, participating in hackathons, and mentoring fellow developers.</p>
  <ul>
    <li><strong>Languages:</strong> JavaScript, Python, Java, C++</li>
    <li><strong>Tools:</strong> React, Node.js, Express, Firebase, MongoDB</li>
    <li><strong>Hobbies:</strong> Tech blogging, Robotics, Cycling</li>
  </ul>
`);

// Projects Section
const projectsSection = createSection("projects", `
  <h2>Projects</h2>

  <div class="project">
    <h3>Wi-Fi Fall Detection System</h3>
    <p>Detects human falls using only Wi-Fi signals — without cameras or wearables.</p>
    <button class="learn-more-btn"
      data-title="Wi-Fi Fall Detection System"
      data-desc="A cutting-edge, privacy-first system that uses Wi-Fi Channel State Information (CSI) to detect human falls in real time."
      data-points='["Uses TensorFlow", "Runs on Raspberry Pi", "Real-time fall alerts"]'>
      Learn More
    </button>
  </div>

  <div class="project">
    <h3>Student Portal Web App</h3>
    <p>A role-based academic platform for managing student data, grades, and analytics.</p>
    <button class="learn-more-btn"
      data-title="Student Portal Web App"
      data-desc="A full-featured web application designed for schools and colleges to simplify academic data handling."
      data-points='["Frontend: HTML, CSS, JS", "Backend: Node.js", "Database: MongoDB"]'>
      Learn More
    </button>
  </div>
`);

// Contact Section
const contactSection = createSection("contact", `
  <h2>Contact Me</h2>
`);
contactSection.appendChild(form);
contactSection.appendChild(statusPara);

// Append sections
const dynamicContent = document.getElementById("dynamic-content");
dynamicContent.appendChild(aboutSection);
dynamicContent.appendChild(projectsSection);
dynamicContent.appendChild(contactSection);

document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const allSections = [intro, aboutSection, projectsSection, contactSection];

  // show intro initially
  allSections.forEach(section => section.classList.remove("show"));
  intro.classList.add("show");

  function showOnly(sectionToShow) {
    allSections.forEach(section => {
      if (section === sectionToShow) {
        section.classList.add("show");
      } else {
        section.classList.remove("show");
      }
    });
  }

  // ✅ use event delegation (safer)
  document.querySelector(".sidebar").addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      e.preventDefault();
      const target = e.target.getAttribute("href");
      if (target === "#about") showOnly(aboutSection);
      else if (target === "#projects") showOnly(projectsSection);
      else if (target === "#contact") showOnly(contactSection);
      else if (target === "#intro") showOnly(intro);
    }
  });
});

// ✅ Form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    number: document.getElementById("number").value.trim(),
    message: document.getElementById("message").value.trim(),
  };
  
  fetch("", {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(() => {
      statusPara.textContent = "Message sent successfully!";
      statusPara.style.color = "green";
      form.reset();
    })
    .catch(() => {
      statusPara.textContent = "Error sending message.";
      statusPara.style.color = "red";
    });
});
const overlay = document.getElementById("project-overlay");
const overlayTitle = document.getElementById("overlay-title");
const overlayDesc = document.getElementById("overlay-description");
const overlayPoints = document.getElementById("overlay-points");
const closeBtn = document.getElementById("close-overlay");

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("learn-more-btn")) {
    overlayTitle.textContent = e.target.dataset.title;
    overlayDesc.textContent = e.target.dataset.desc;
    const points = JSON.parse(e.target.dataset.points);
    overlayPoints.innerHTML = "";
    points.forEach(p => {
      const li = document.createElement("li");
      li.textContent = p;
      overlayPoints.appendChild(li);
    });
    overlay.classList.add("show");
  }
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("show");
});
