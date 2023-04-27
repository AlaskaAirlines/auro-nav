const anchornavExample = document.querySelector('#anchornavExample');

console.log(anchornavExample);

const anchorlinks = [...anchornavExample.shadowRoot.querySelectorAll('anchorlinks')];

anchorlinks.forEach((link) => {
  link.addEventListener('click', (evt) => {
    console.log("example link clicked");
    evt.preventDefault();
  })
});
