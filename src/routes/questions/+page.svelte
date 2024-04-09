<script>
    let questions = [
        {
            id: 1,
            question: "Quelle est la capitale de la France ?",
            options: ["Paris", "Londres", "Berlin", "Rome"],
            answer: "Paris"
        },
        {
            id: 2,
            question: "Quelle est la couleur du ciel ?",
            options: ["Bleu", "Vert", "Rouge", "Jaune"],
            answer: "Bleu"
        },
        // Ajoutez d'autres questions ici
    ];

    let selectedQuestion = null;

    function selectQuestion(question) {
        selectedQuestion = question;
    }
</script>

<h1>Liste des questions</h1>

<ul>
    {#each questions as question}
        <li on:click={() => selectQuestion(question)}>
            {question.question}
        </li>
    {/each}
</ul>

{#if selectedQuestion}
    <h2>Question QCM</h2>
    <p>{selectedQuestion.question}</p>

    <ul>
        {#each selectedQuestion.options as option}
            <li>{option}</li>
        {/each}
    </ul>
{/if}