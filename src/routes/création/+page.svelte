<script>
    import { onMount } from 'svelte';

    let email = '';
    let password = '';
    let successMessage = '';
    let errorMessage = '';

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await fetch('/src/routes/api/register.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            // Display a success message
            successMessage = 'Registration successful! Redirecting...';

            // Redirect the user to a login page
            window.location.href = '/src/routes/profil';
        } else {
            // Display an error message
            errorMessage = data.message;
        }
    }
</script>

<main>
    <h1>Create an Account</h1>

    <form on:submit|preventDefault={handleSubmit}>
        <label>
            Email:
            <input type="email" bind:value={email} required />
        </label>

        <label>
            Password:
            <input type="password" bind:value={password} required />
        </label>

        <button type="submit">Register</button>
    </form>

    {#if errorMessage}
        <p style="color: red;">{errorMessage}</p>
    {:else if successMessage}
        <p style="color: green;">{successMessage}</p>
    {/if}

</main>