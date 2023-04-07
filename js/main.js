var arrOfQuotes = [
    {
        'quote': '“Be brave to stand for what you believe in even if you stand alone.”',
        'author': '― Roy T. Bennett, The Light in the Heart',
    },
    {
        'quote': '“Never lose hope. Storms make people stronger and never last forever.”',
        'author': '― Roy T. Bennett, The Light in the Heart',
    },
    {
        'quote': '“Do not fear failure but rather fear not trying.”',
        'author': '― Roy T. Bennett, The Light in the Heart',
    },
    {
        'quote': '“Let the improvement of yourself keep you so busy that you have no time to criticize others.”',
        'author': '― Roy T. Bennett, The Light in the Heart',
    },
    {
        'quote': '“Believe in your infinite potential. Your only limitations are those you set upon yourself.”',
        'author': '― Roy T. Bennett, The Light in the Heart',
    },
    {
        'quote': "“If you can't explain it to a six year old, you don't understand it yourself.”",
        'author': '― Albert Einstein',
    },{
        'quote': "“I have not failed. I've just found 10,000 ways that won't work.”",
        'author': '― Thomas A. Edison',
    },{
        'quote': '“Be the change that you wish to see in the world.”',
        'author': '― Mahatma Gandhi',
    },{
        'quote': "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        'author': '― Albert Einstein',
    },{
        'quote': '“Be yourself; everyone else is already taken.”',
        'author': '― Oscar Wilde',
    },
]

function randomQuote() {
    var quote = Number.parseInt(Math.random() * arrOfQuotes.length + 1)
    document.getElementById('outPutQuote').innerHTML = arrOfQuotes[quote].quote;
    document.getElementById('outPutAuthor').innerHTML = arrOfQuotes[quote].author;


};