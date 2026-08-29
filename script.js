// Music Player Functionality
const musicToggle = document.getElementById('musicToggle');
const bgAudio = document.getElementById('bgAudio');
const musicStatus = document.getElementById('musicStatus');
let isPlaying = false;

// Initialize audio with lower volume
bgAudio.volume = 0.4;

// Toggle music on button click
musicToggle.addEventListener('click', () => {
  if (isPlaying) {
    bgAudio.pause();
    isPlaying = false;
    musicToggle.classList.remove('playing');
    musicStatus.textContent = 'Click to play';
  } else {
    bgAudio.play().catch(err => {
      console.log('Audio playback failed:', err);
      musicStatus.textContent = 'Playback not available';
    });
    isPlaying = true;
    musicToggle.classList.add('playing');
    musicStatus.textContent = 'Now playing...';
  }
});

// Update status when audio ends
bgAudio.addEventListener('ended', () => {
  // Auto-replay since we have loop attribute
  bgAudio.currentTime = 0;
  bgAudio.play();
});

// Handle audio errors
bgAudio.addEventListener('error', (e) => {
  console.error('Audio error:', e);
  musicStatus.textContent = 'Error loading audio';
  musicToggle.classList.remove('playing');
  isPlaying = false;
});

// RSVP Modal Functionality
const openRsvp = document.getElementById('openRsvp');
const closeRsvp = document.getElementById('closeRsvp');
const cancelRsvp = document.getElementById('cancelRsvp');
const rsvpModal = document.getElementById('rsvpModal');
const rsvpForm = document.getElementById('rsvpForm');

openRsvp.addEventListener('click', () => {
  rsvpModal.setAttribute('aria-hidden', 'false');
  rsvpModal.style.display = 'flex';
});

closeRsvp.addEventListener('click', closeModal);
cancelRsvp.addEventListener('click', closeModal);

function closeModal() {
  rsvpModal.setAttribute('aria-hidden', 'true');
  rsvpModal.style.display = 'none';
}

// Close modal when clicking outside
rsvpModal.addEventListener('click', (e) => {
  if (e.target === rsvpModal) {
    closeModal();
  }
});

// Handle RSVP form submission
rsvpForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(rsvpForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // Create email body
  const emailBody = `
RSVP Received:
Name: ${name}
Email: ${email}
Message: ${message}
Date: ${new Date().toLocaleString()}
  `.trim();

  // Create mailto link
  const mailtoLink = `mailto:assel@example.com?subject=RSVP: ${name}&body=${encodeURIComponent(emailBody)}`;
  
  // Show success message
  alert(`Thank you, ${name}!\n\nYour RSVP has been recorded. We look forward to celebrating with you!`);
  
  // Reset form
  rsvpForm.reset();
  closeModal();
});

// Smooth scroll for any anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add fade-in animation on page load
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});
