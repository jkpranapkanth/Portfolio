const form = document.createElement("form");
form.id = "contactForm";
form.innerHTML = `
    <input type="text" id="name" placeholder="Your Name" required>
    <input type="email" id="email" placeholder="Your Email" required>
    <input type="number" id="number" placeholder="Your Number" required>
    <textarea id="message" placeholder="Your Message" required></textarea>
    <button type="submit">Send Message</button>
`;
const statusPara = document.createElementt("p");
statusPara.id = "formStatus";

function createSection(id, innerHTML) {
  const section = document.createElement("section");
  section.id = id;
  section.className = "fade";
  section.innerHTML = innerHTML;
  return section;
}

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



const projectsSection = createSection("projects", `
  <h2>Projects</h2>

  <div class="project">
    <h3>Wi-Fi Fall Detection System</h3>
    <p>Detects human falls using only Wi-Fi signals — without cameras or wearables.</p>
    <button class="learn-more-btn"
      data-title="Wi-Fi Fall Detection System"
      data-desc="A cutting-edge, privacy-first system that uses Wi-Fi Channel State Information (CSI) to detect human falls in real time. This solution is built for environments where surveillance is not preferred — like homes for the elderly or hospitals. Deep learning is applied on CSI signal patterns to detect sudden abnormal movements indicating a fall, ensuring quick response and patient safety."
      data-points='[
        "---  Technologies Used ---",
        "Python, TensorFlow, Scikit-learn, Pandas",
        "Intel 5300 NIC CSI Tool for signal data capture",
        "Raspberry Pi with Ubuntu for edge deployment",
        "Butterworth filter + PCA for signal denoising and dimensionality reduction",

        "---  Features ---",
        "No cameras or wearables — 100% privacy-respecting",
        "CNN + LSTM hybrid deep learning model for classification",
        "Runs on low-power embedded devices (edge computing)",
        "Real-time fall alerts via signal anomaly detection",
        "Configurable thresholds for different room sizes and shapes",

        "---  Use Cases / Impact ---",
        "Elder care monitoring in homes or hospitals",
        "Fall detection in smart home environments",
        "Foundation for gesture/activity recognition systems"
      ]'>
      Learn More
    </button>
  </div>

  <div class="project">
    <h3>Student Portal Web App</h3>
    <p>A role-based academic platform for managing student data, grades, and analytics.</p>
    <button class="learn-more-btn"
      data-title="Student Portal Web App"
      data-desc="A full-featured web application designed for schools and colleges to simplify academic data handling. With role-based access, it allows administrators, teachers, and students to log in securely and perform specific tasks like grade updates, attendance tracking, and report viewing. It includes interactive dashboards for real-time academic insights."
      data-points='[
        "---  Technologies Used ---",
        "Frontend: HTML, CSS, JavaScript (vanilla)",
        "Backend: Node.js with Express.js REST APIs",
        "Database: MongoDB using Mongoose",
        "Authentication: JWT with bcrypt encryption",
        "Charts: Chart.js for visual insights",

        "---  Features ---",
        "Secure login with user roles (Admin, Teacher, Student)",
        "Student grade and attendance management",
        "Admin panel for adding/editing/deleting users",
        "Real-time charts for performance tracking",
        "Mobile-friendly responsive layout",

        "---  Use Cases / Impact ---",
        "Helps institutions digitize academic records",
        "Enables teachers to manage students easily",
        "Empowers students to track their progress anytime"
      ]'>
      Learn More
    </button>
  </div>

  <div class="project">
    <h3>Smart Task Manager (Mobile App)</h3>
    <p>An AI-powered to-do app for students and professionals — with sync and reminders.</p>
    <button class="learn-more-btn"
      data-title="Smart Task Manager (Mobile App)"
      data-desc="A productivity-focused Android app that intelligently prioritizes and reminds users about their tasks. This app learns from your task habits, ranks urgency automatically, and syncs your tasks across devices using Firebase. Built for students and busy individuals who want to stay organized, even offline."
      data-points='[
        "---  Technologies Used ---",
        "Java with Android SDK",
        "Firebase: Realtime DB, Auth, Cloud Messaging",
        "Local Storage: SQLite for offline support",
        "Material Design components for clean UI",

        "--- Features ---",
        "AI-based task prioritization logic",
        "Daily and weekly reminder notifications",
        "Offline mode with auto-sync to cloud",
        "Task snoozing, custom categories, recurring events",
        "Dark/light mode toggle",

        "--- Use Cases / Impact ---",
        "Boosts student productivity with AI-ranked priorities",
        "Helps working professionals stay on top of deadlines",
        "Designed to reduce decision fatigue in daily planning"
      ]'>
      Learn More
    </button>
  </div>
`);
const contactSection = createSection("contact", `
  <h2>Contact Me</h2>
`);
contactSection.appendChild(form);
contactSection.appendChild(statusPara);

const dynamicContent = document.getElementById("dynamic-content");
dynamicContent.appendChild(aboutSection);
dynamicContent.appendChild(projectsSection);
dynamicContent.appendChild(contactSection);

document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const allSections = [intro, aboutSection, projectsSection, contactSection];

  
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

  document.querySelector('a[href="#about"]').addEventListener("click", (e) => {
    e.preventDefault();
    showOnly(aboutSection);
  });

  document.querySelector('a[href="#projects"]').addEventListener("click", (e) => {
    e.preventDefault();
    showOnly(projectsSection);
  });

  document.querySelector('a[href="#contact"]').addEventListener("click", (e) => {
    e.preventDefault();
    showOnly(contactSection);
  });

  document.getElementById("homeLink").addEventListener("click", (e) => {
    e.preventDefault();
    showOnly(intro);
  });
});

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

document.querySelectorAll(".learn-more-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    overlayTitle.textContent = btn.dataset.title;
    overlayDesc.textContent = btn.dataset.desc;
    const points = JSON.parse(btn.dataset.points);
    overlayPoints.innerHTML = "";
    points.forEach(p => {
      const li = document.createElement("li");
      li.textContent = p;
      overlayPoints.appendChild(li);
    });
    overlay.classList.add("show");
  });

});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("show");
});

