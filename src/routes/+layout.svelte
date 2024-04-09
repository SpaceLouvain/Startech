<script>
    import Title from '$lib/titre.svelte'
    import '../styles/global.css'
    let navItems = [
        
        { text: 'MENU', logo: '\lamme.jpg', href: '/' },
        { text: 'PROFIL', logo: '\lamme.jpg', href: '/profil' },

    { text: 'QUESTIONS', logo: '\lamme.jpg', href: '/questions' },
    { text: 'SYNTHESES', logo:'\synthese.webp', href: '/parametres' },
    { text: 'PROGRESSION', logo: 'https://via.placeholder.com/24', href: '/progression' },
    { text: 'COMMUNAUTE', logo: '\communauté.jpg', href: '/commune' },
    { text: 'COACH', logo: '\coach.jpg', href: '/coach' },
    { text: 'PARAMETRES', logo: '\parametres.avif', href: '/parametres' },
    ];
    let message = '';
  let messages = [];
  let expanded = false;

  function toggleChatbox() {
    expanded = !expanded;
  }
  function expandChatbox() {
    expanded = true;
  }

  function shrinkChatbox() {
    expanded = false;
  }
  
  function sendMessage() {
    if (message.trim() !== '') {
      const timestamp = new Date().toLocaleTimeString(); // get the current time
      messages = [...messages, { text: message, type: 'outgoing', timestamp, sender: 'You' }];
      message = '';
    }
  }
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      expandChatbox();
    }
  }
   const timestamp = new Date().toLocaleTimeString(); // get the current time
  messages.push({ text: 'Salut!', type: 'incoming', timestamp, sender: 'Coach Antoine' });
    messages.push({ text: 'Comment puis je t aider feur', type: 'incoming', timestamp, sender:'Coach Antoine' });
    
    
  

 
</script>

<header>
    <Title title ="Super G"/>
</header>

<main>
    <!-- page content-->
    <slot> </slot>
</main>
<footer>
    <p>"Slogan du jour : 'Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte.' - Winston Churchill"
        </p>
</footer>
<footer>
    <p>
        Copyright EduHub Formation</p>
</footer>

<style>
    .chatbox p.outgoing {
    background-color: #ddd; /* change the background color of outgoing messages */
  }

  .chatbox p.incoming {
    background-color: #bbb; /* change the background color of incoming messages */
  }
    .chatbox {
    border: 1px solid #ccc;
    padding: 1em;
    margin: 1em 0;
    height: 200px;
    overflow-y: auto;
    position: fixed;
    right: 0;
    bottom: 0;
    width: 300px; /* set a fixed width */
    background-color: #f8f8f8; /* change the background color */
    border-radius: 10px; /* add rounded corners */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* add a shadow for a 3D effect */
    transition: width 0.3s ease, height 0.3s ease; /* animate size changes */
    
  }
  .chatbox.expanded {
    width: 100%; /* large size */
    height: 100%;
  }
  .chatbox-header {
    height: 50px; /* adjust as needed */
    cursor: pointer;
    background-color: aqua;
    position: fixed;

  }

  .shrink-button {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #f00; /* red */
    color: #fff; /* white */
    cursor: pointer;
    position: relative;

  }
  .chatbox p {
    background-color: #ddd; /* change the background color of messages */
    padding: 0.5em; /* add some padding to messages */
    margin: 0.5em 0; /* add some margin to messages */
    border-radius: 5px; /* add rounded corners to messages */
  }
 
  .chatbox input {
   
    width: 100%;
    padding: 0.5em;
    border: none;
    border-radius: 5px;
    text-align: right; /* align the text to the right */
  }

    
      .left-column {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100px;
    overflow: auto;
    padding: 1em;
    background-color: #9fb7ff;
  }
  .nav-item {
    display: flex;
    align-items: center;
    margin-bottom: 1em;
  }
  .nav-item img {
    margin-right: 0.5em;
  }
    header{
        display: flex;
        justify-content: center;

    }
    main {
        max-width: 960px;
        margin: 20px auto;
    }
    footer {
        text-align: center;
    }
</style>
<div class={expanded ? 'chatbox expanded' : 'chatbox'}>
    <div class="chatbox-header" on:click={expandChatbox} on:keydown={handleKeyDown}>
      <button class="shrink-button" on:click|stopPropagation={shrinkChatbox}>Shrink</button>
    </div>
    {#each messages as msg (msg.text)}
      <p class={msg.type}>
        <span class="timestamp">{msg.timestamp}</span> <span class="sender">{msg.sender}:</span> {msg.text}
      </p>
    {/each}
    <input type="text" bind:value={message} placeholder="Type a message...">
    <button on:click|stopPropagation={sendMessage}>Send</button>
  
<div class="chatbox">
    {#each messages as msg (msg.text)}
      <p class={msg.type}>
        <span class="timestamp">{msg.timestamp}</span> <span class="sender">{msg.sender}:</span> {msg.text}
      </p>
    {/each}
    <input type="text" bind:value={message} placeholder="Type a message...">
    <button on:click={sendMessage}>Send</button>
  </div>
</div>

<div class="left-column">
    {#each navItems as item (item.text)}
      <div class="nav-item">
        <img src={item.logo} alt="Logo" width="24" height="24">
        <a href={item.href}>{item.text}</a>
      </div>
    {/each}
  </div>

<div class="chatbox-header" on:click={expandChatbox} on:keydown={handleKeyDown}>
    &nbsp; <!-- non-breaking space -->
    <button class="shrink-button" on:click|stopPropagation={shrinkChatbox}>Shrink</button>
</div>
