document.addEventListener('event-type', function(event) {
  if (event.type !== 'wheel') {
    event.preventDefault();
  }
});
