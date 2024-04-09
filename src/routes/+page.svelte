
<script>
  import { open } from 'sqlite';
  import { navigate } from 'svelte-routing';

  let db;
  let email = '';
  let password = '';
  let successMessage = ''; // Variable to store the message
  let errorMessage = ''; // Variable to store the error message 



  // Function to open the SQLite database
  async function openDb() {
    db = await open({
      filename:  './my-database.db',
      driver: sqlite3.Database
    });
  }

  // Function to check user credentials
  async function handleVerification() {
            try {
                const response = await fetch('/src/routes/api/checkRegistration.js', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email
                    })
                });

                if (response.ok) {
                    // Verification successful, show success message
                    successMessage = 'Verification successful!';
                    errorMessage = '';
                } else {
                    // Verification failed, handle the error
                    const error = await response.json();
                    errorMessage = error.message || 'Verification failed.';
                    console.error('Verification failed:', errorMessage);
                }
            } catch (error) {
                errorMessage = 'An error occurred. Please try again later.';
                console.error('Error:', error);
            }
        }
  // Function to handle login button click
  async function handleClick() {
    await handleVerification(); // Check credentials on button click
  }

  // Function to handle enter key press
  async function handleKeyPress(event) {
    if (event.key === 'Enter') {
      await handleVerification(); // Check credentials on enter key press
    }
  }


  
</script>


<div class="login-form">
  <img src="/personne.png" alt="Person Logo">

  <form on:submit|preventDefault={handleVerification}>
    <label>
        Email:
        <input type="email" bind:value={email} required />
    </label>
    <label>
        Password:
        <input type="password" bind:value={password} required on:keydown={handleKeyPress} />
    </label>
  
    <button type="submit">Se connecter</button>
  </form>
  <a href="/création">Créer un compte</a>
  <a href="/forgot-password">Mot de passe oublié ?</a>
</div>

{#if errorMessage}
<p style="color: red;">{errorMessage}</p>
{:else if successMessage}
<p style="color: green;">{successMessage}</p>
{/if}


<style>
  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .login-form img {
    width: 100px;
    height: 100px;
    margin-bottom: 1em;
  }

  .login-form input {
    margin-bottom: 1em;
  }
</style>
