var quotes = [
    {
        quote: " “Be yourself; everyone else is already taken.” ",
        author: " ― Oscar Wilde",
    },

    {
        quote: " “I'm selfish, impatient and a little insecure.I make mistakes, I am out of control and at times hard to handle.But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” ",
        author: "― Marilyn Monroe",
    },

    {
        quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”  ",
        author: "― Albert Einstein",
    },
    {
        quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”  ",
        author: "― Bernard M. Baruch",
    },

    {
        quote: `“You've gotta dance like there's nobody watching,
        Love like you'll never be hurt,
        Sing like there's nobody listening,
        And live like it's heaven on earth.”  `,
        author: "― William W. Purkey",
    },

    {
        quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”  ",
        author: "― Dr. Seuss",
    },

]




function generateQuote() {
    var i = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = quotes[i].quote;
    document.getElementById("author").innerHTML = quotes[i].author;
}