const quotes = [
    {
        text: "I love you not only for what you are, but for what I am when I am with you.",
        image: "image3.jpeg" 
    },
    {
        text: "You are my sun, my moon, and all my stars.",
        image: "image4.jpeg" 
    },
    {
        text: "In all the world, there is no heart for me like yours.",
        image: "image2.jpeg" 
    },
    {
        text: "I love you to the moon and back.",
        image:"image5.jpeg"
    },
    {
        text: "You are my today and all of my tomorrows.",
        image: "image1.jpeg" 
    }
];

document.getElementById('showQuoteButton').addEventListener('click', function() {
    const quoteMessage = document.getElementById('quoteMessage');
    const quoteText = document.getElementById('quoteText');
    const quoteImage = document.getElementById('quoteImage');
    
    // Generate a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    // Display the quote and image
    quoteText.textContent = randomQuote.text;
    quoteImage.src = randomQuote.image;
    quoteImage.classList.remove('hidden');
    quoteMessage.classList.toggle('hidden');
});
