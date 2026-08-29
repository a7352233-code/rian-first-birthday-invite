// Basic interactive JS: RSVP modal and simple reveal animations
document.addEventListener('DOMContentLoaded', function(){
  const openBtn = document.getElementById('openRsvp');
  const modal = document.getElementById('rsvpModal');
  const closeBtn = document.getElementById('closeRsvp');
  const cancelBtn = document.getElementById('cancelRsvp');
  const form = document.getElementById('rsvpForm');

  function openModal(){ modal.setAttribute('aria-hidden','false'); modal.style.opacity = '1'; }
  function closeModal(){ modal.setAttribute('aria-hidden','true'); modal.style.opacity = '0'; }

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  cancelBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e)=>{
    if(e.target === modal) closeModal();
  });

  form.addEventListener('submit', function(evt){
    evt.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || '';
    const email = data.get('email') || '';
    const message = data.get('message') || '';
    const phone = '463-212-4894';
    // Build mailto
    const to = encodeURIComponent('assel@example.com'); // replace with actual email if desired
    const subject = encodeURIComponent(`RSVP for Rian's 1st Birthday / Тұсаукесер — ${name}`);
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone (if you prefer to be contacted): ${phone}`,
      `Message: ${message}`,
      ``,
      `-- RSVP sent from the digital invitation`
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));
    const mailto = `mailto:${to}?subject=${subject}&body=${body}`;
    // open mail client
    window.location.href = mailto;
    closeModal();
  });

  // gentle reveal on scroll
  const revealElems = document.querySelectorAll('.detail, .message .card, .signature, .rsvp');
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.style.opacity = 1;
        e.target.style.transform = 'translateY(0px)';
        obs.unobserve(e.target);
      }
    });
  }, {threshold:0.15});
  revealElems.forEach(el=>{
    el.style.opacity = 0;
    el.style.transform = 'translateY(10px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
    obs.observe(el);
  });

});
