<script>
  import Title from '$lib/titre.svelte';

let targetPercentage = 75; // Set your desired target percentage
let i = 0;

function move() {
  if (i === 0) {
    i = 1;
    var elem = document.getElementById("progressBar");
    var width = 1;
    var id = setInterval(frame, 10);

    function frame() {
      if (width >= targetPercentage) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.value = width;
      }
    }
  }
}
</script>
<style>
   header {
    text-align: center;
    background: rgba(188, 188, 188, 0.1);
  }

  main {
    max-width: 960px;
    margin: 20px auto;
  }

  footer {
    text-align: center;
  }

  nav {
    display: flex;
    align-items: center;
    max-width: 960px;
    margin: 0 auto;
  }

  .links {
    margin-left: auto;
  }

  a {
    margin-left: 10px;
  }
</style>

<header>
  <nav>
    <Title title={`Vous êtes prêt à ${targetPercentage}% pour l'examen d'entrée !`} />
    <div class="links">
      <a href="/">Accueil</a>
      <a href="/cours">Cours</a>
      <a href="/profil">Profil</a>
    </div>
  </nav>
</header>

<main>
  <progress id="progressBar" max="100"></progress>
  <slot></slot>
</main>

<footer>
  <p>Progression</p>
</footer>
