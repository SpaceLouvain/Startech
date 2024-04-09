<style>

  .main-content {
    padding-left: 10px; /* same as the width of the left column */
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
  }
  .main-content > div {
    box-sizing: border-box;
    padding: 1em;
    border: 1px solid #ccc;
  }
  .box2 {
    width: 50%;
    height: 50%;
  }
  .box1 {
    width: 50%;
    height: 50%;
    display: flex;
    align-items: center;
  }
  .box3 {
    width: 50%;
    height: 50%;
  }
  .box1 img{
        display: inline-block;
        filter: invert(88%) sepia(18%) saturate(886%) hue-rotate(199deg) brightness(100%) contrast(200%);
        width: 30%; /* adjust this to change the image size */
        height: auto; /* keep the aspect ratio */
        
    }
    .box1 p {
    font-size: 2em; /* adjust this to change the text size */
    margin-left: 1em; /* add some space between the image and the text */
  }
  progress {
    /* make the progress bar larger */
    width: 100%;
    height: 2em;

    /* remove the default appearance */
    -webkit-appearance: none;
    appearance: none;
  }

  /* change the color of the progress bar */
  progress::-webkit-progress-bar {
    background-color: #eee;
  }

  progress::-webkit-progress-value {
    background-color: #4caf50;
  }

  progress::-moz-progress-bar {
    background-color: #4caf50;
  }
  .progress-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1em;
  }
  

  .progress-container label {
    width: 100px; /* adjust this to change the width of the labels */
    text-align: right;
    margin-right: 1em;
  }

  .progress-container progress {
    flex-grow: 1; /* make the progress bars take up the remaining space */
  }

  .progress-container span {
    width: 20px; /* adjust this to change the width of the percentages */
    text-align: right;
    margin-left: 1em;
  }
</style>

<script>
  
</script>



<div class="main-content">
  <div class="box1">
    <img src="\flamme.jpg" alt="flamme">
    <p>Bravo ! Votre flamme est allumé depuis 3 jours !</p>
  </div>
  <div class="box2">
    <h2>Historique</h2>
    <ul>
      <li>Examen 2019 : Mathématique</li>
      <li>Biologie : ADN</li>
      <li>Biologie : Les cellules</li>
    </ul>
  </div>
  <div class="box3">
     <div class="progress-container">
      <label for="math-progress">Math:</label>
      <progress id="math-progress" value="70" max="100"></progress>
      <span>70%</span>
    </div>
    <div class="progress-container">

      <label for="physics-progress">Physique:</label>
      <progress id="physics-progress" value="50" max="100"></progress>
      <span>50%</span>

    </div>
    <div class="progress-container">

      <label for="chemistry-progress">Chimie:</label>
      <progress id="chemistry-progress" value="30" max="100"></progress>
      <span>30%</span>

    </div>
    <div class="progress-container">

      <label for="biology-progress">Biologie:</label>
      <progress id="biology-progress" value="90" max="100"></progress>
      <span>90%</span>

    </div>
  </div>
</div>