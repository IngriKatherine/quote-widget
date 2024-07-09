const quotes = [
    { text: "The magic you are looking for is in the work you are avoiding.", author: "Dipen Parmar" },
    { text: "Not all efforts pay the same. Time and effort levels are finite. So, redirect them accordingly.", author: "Unknown" },
    { text: "Enterprise is better than ease...One week of neglect brings one year of regret", author: " Jim Rohn" },
    { text: "The world treats you different when you get it done", author: "Unknown" },
    { text: "There is no tough, smart, or talented. There are trained or not trained", author: "Denzel" },
    { text: "Do not neglect the easy things. What is easy to do is also easy not to do.", author: "Jim Rohn" },
    { text: "Do not major in minor things.", author: "Jim Rohn" },
    { text: "You cannot become what you cannot see.", author: "Jim Rohn" },
    { text: "Live with a sense of urgency", author: "Brian Tracy" },   
    { text: "If a man is not smart enough to use whatever is right in front of him and make it work, well then, that's just a failure of imagination.", author: "Underwood" }, 
    { text: "In 5 years, you will arrive; the question is WHERE?", author: "Jim Rohn" },
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { text: "You do not rise to the level of your goals. You fall to the level of your systems.", author: "James Clear" },
    // Add more quotes as needed
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function changeQuote() {
    const quoteElement = document.getElementById("quote");
    const authorElement = document.getElementById("author");

    const randomQuote = getRandomQuote();
    quoteElement.textContent = `"${randomQuote.text}"`;
    authorElement.textContent = `- ${randomQuote.author}`;
}
