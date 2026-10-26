const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  nav.classList.toggle('open', !isOpen);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
    nav.classList.remove('open');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const projectInfo = {
  lms: {
    type: 'ACADEMIC PROJECT · FULL-STACK WEB APPLICATION',
    title: 'Learning Management System with Role-Based Academic Monitoring',
    summary: 'A full-stack Learning Management System with separate experiences for students, teachers, and instructors, built to support course management and academic activity tracking.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'REST APIs', 'Postman'],
    features: [
      'Implemented secure user authentication and role-based authorization.',
      'Built course creation and enrollment features for the learning platform.',
      'Developed REST APIs for user management and course operations, integrated with MongoDB.',
      'Created role-specific dashboards for course management and academic activity tracking.',
      'Used Postman to test backend authentication, authorization, and course-related APIs.'
    ],
    repo: 'https://github.com/karthikraja-3/LearningManagement',
    repoLabel: 'View project on GitHub'
  },
  billing: {
    type: 'JAVA INTERNSHIP PROJECT · NEXTGEN TECHNOLOGY',
    title: 'Medical Billing System',
    summary: 'A desktop application developed in Java Swing to manage medicine records and calculate bills.',
    tech: ['Core Java', 'Java Swing', 'AWT', 'CSV file handling'],
    features: [
      'Added, updated, and deleted medicine records with CRUD operations.',
      'Calculated bills from medicine quantity and unit price.',
      'Built a graphical interface with input forms, buttons, and a data table.',
      'Exported medicine records to CSV for future reference.',
      'Added input validation and exception handling for invalid numbers and file operations.'
    ],
    repo: 'https://github.com/karthikraja-3',
    repoLabel: 'View GitHub profile'
  },
  expiry: {
    type: 'JAVA INTERNSHIP PROJECT · NEXTGEN TECHNOLOGY',
    title: 'Grocery Expiry Reminder System',
    summary: 'A desktop application to manage grocery items and keep track of their expiry dates.',
    tech: ['Core Java', 'Java Swing', 'JDBC', 'SQLite', 'SQL'],
    features: [
      'Stored and retrieved grocery details in SQLite using JDBC.',
      'Identified item status as Fresh, Expiring Soon, or Expired.',
      'Scheduled expiry checks and displayed reminders in the console.',
      'Built a Java Swing interface to enter and display grocery information.'
    ],
    repo: 'https://github.com/karthikraja-3',
    repoLabel: 'View GitHub profile'
  }
};

const detailPage = document.querySelector('[data-project-detail]');
if (detailPage) {
  const projectId = new URLSearchParams(window.location.search).get('project');
  const project = projectInfo[projectId];

  if (!project) {
    detailPage.querySelector('.detail-error').hidden = false;
    detailPage.querySelector('.detail-type').hidden = true;
    detailPage.querySelector('.detail-title').hidden = true;
    detailPage.querySelector('.detail-summary').hidden = true;
    detailPage.querySelector('.detail-tech').hidden = true;
    detailPage.querySelector('.detail-features').hidden = true;
    detailPage.querySelector('.detail-repo').hidden = true;
  } else {
    detailPage.querySelector('.detail-type').textContent = project.type;
    detailPage.querySelector('.detail-title').textContent = project.title;
    detailPage.querySelector('.detail-summary').textContent = project.summary;

    const techList = detailPage.querySelector('.detail-tech-list');
    techList.replaceChildren(...project.tech.map((item) => {
      const tag = document.createElement('span');
      tag.textContent = item;
      return tag;
    }));

    const featureList = detailPage.querySelector('.detail-feature-list');
    featureList.replaceChildren(...project.features.map((item) => {
      const detail = document.createElement('li');
      detail.textContent = item;
      return detail;
    }));

    const repoLink = detailPage.querySelector('.detail-repo');
    repoLink.href = project.repo;
    repoLink.querySelector('span').textContent = project.repoLabel.toUpperCase();
    document.title = `${project.title} — Karthik R`;
  }
}
