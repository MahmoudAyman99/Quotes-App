
// use array to hold quotes
var arrayOfQuotes = [
    {'author': 'Oscar Wilde', 
    'quote': 'Be yourself; everyone else is already taken.'
},
    {'author': 'Marilyn Monroe', 
    'quote': 'Iam selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you canot handle me at my worst, then you sure as hell donot deserve me at my best.'
},
    {'author': 'Frank Zappa', 
    'quote': 'So many books, so little time.'
},
    {'author': 'Albert Einstein', 
    'quote': 'Two things are infinite: the universe and human stupidity; and Iam not sure about the universe.'
},
    {'author': 'Marcus Tullius Cicero', 
    'quote': 'A room without books is like a body without a soul.'
},
    {'author': 'Elbert Hubbard', 
    'quote': 'A friend is someone who knows all about you and still loves you.'
},
    {'author': 'Mahatma Gandhi', 
    'quote': 'Be the change that you wish to see in the world.'
},
    {'author': 'Mae West', 
    'quote': 'You only live once, but if you do it right, once is enough.'
}
];

function generateQuote() {
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOut').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOut').textContent = `--${arrayOfQuotes[random].author}`;
}