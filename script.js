const navigacijaMob = () => {
  const mob = document.querySelector('.mob');
  const navigacija = document.querySelector('.navigacija');

mob.addEventListener('click', () => {
  navigacija.classList.toggle('navigacija-active');
});

}

navigacijaMob();
