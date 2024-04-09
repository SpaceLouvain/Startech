<script>
    import Image1 from '$lib/Image1.svelte';
  </script>
  
  <style>
    main {
      max-width: 960px;
      margin: 20px auto;
    }
  
    footer {
      text-align: center;
    }
  
    nav {
      display: block;
      align-items: stretch;
      max-width: 960px;
      margin: 20px auto;
      background: rgba(19, 4, 238, 0.1);
    }
  
    .links {
      margin-left: auto;
      text-align: center;
    }
  
    a {
      margin-left: 10px;
    }
  
    .index {
      text-align: center;
      display: block;
      margin: 20px auto;
      /* Set Image1 as background */
     /*  background-image: url('/topg.jpg'); /* Replace with the actual path to your image */
     /*  background-size: cover; Adjust according to your needs */
    /*   background-position: center center; /* Adjust according to your needs */
     /*  color: white; /* Text color on top of the background image */
     /*  padding: 200px; /* Add padding as needed */
    }
  </style>
  
  <div class="index">
    <h2>Startech </h2>
    <p>A website made by Louis, Antoine, and Mehdi</p>
  </div>
  
  <nav>
    <div class="links">
      <a href="/home">Progression</a>
      <a href="/cours">Cours</a>
      <a href="/profil">Profil</a>
      <a href="/contact">Contact</a>
    </div>
  </nav>
  