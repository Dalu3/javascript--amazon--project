const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
  xhr.response
});

xhr.open('GET', 'https://supersimplebackend.dev' );
xhr.send();
