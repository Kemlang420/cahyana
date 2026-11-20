// Ganti nomor di bawah dengan nomor WhatsApp bisnis Cahyana (format internasional tanpa +).
const WHATSAPP_NUMBER = '6280000000000';
const waLink = document.getElementById('wa-link');
const waMessage = 'Halo Cahyana, saya ingin bertanya tentang pesanan kue.';
waLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '✕' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.textContent = '☰';
}));

document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.filter.active').classList.remove('active');
  button.classList.add('active');
  const category = button.dataset.filter;
  document.querySelectorAll('.product-card').forEach(card => {
    card.hidden = category !== 'all' && card.dataset.category !== category;
  });
}));

let toastTimer;
const toast = document.querySelector('.toast');
document.querySelectorAll('.quick-add').forEach(button => button.addEventListener('click', () => {
  const name = button.dataset.name;
  const price = Number(button.dataset.price).toLocaleString('id-ID');
  toast.textContent = `${name} — Rp${price}. Hubungi kami untuk memesan.`;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}));
