let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('"La vida es o una gran aventura o nada".')
  .pauseFor(200)
  .deleteChars(10)
  .start();
