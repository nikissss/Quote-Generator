const quotes = {
    motivational: [
        "Start where you are. Use what you have. Do what you can. \n - Arthur Ashe ",
        "All our dreams can come true, if we have the courage to pursue them. \n - Walt Disney ",
        "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. \n - Thomas A. Edison ",
        "The future belongs to those who believe in the beauty of their dreams. \n - Eleanor Roosevelt ",
        "Don't watch the clock; do what it does. Keep going. \n - Sam Levenson ",
    ],
    happiness: [
        "Happiness is not something ready made. It comes from your own actions. \n - Dalai Lama ",
        "For every minute you are angry you lose sixty seconds of happiness. \n - Ralph Waldo Emerson ",
        "Happiness is when what you think, what you say, and what you do are in harmony. \n - Mahatma Gandhi ",
        "The purpose of our lives is to be happy. \n - Dalai Lama ",
        "Happiness depends upon ourselves. \n - Aristotle "
    ],
    life: [
        "The only way to do great work is to love what you do. \n - Steve Jobs ",
        "In the end, it's not the years in your life that count. It's the life in your years. \n - Abraham Lincoln ",
        "Life is what happens when you're busy making other plans. \n - John Lennon ",
        "You have within you right now, everything you need to deal with whatever the world can throw at you. \n - Brian Tracy ",
        "Believe you can and you're halfway there. \n - Theodore Roosevelt ",
        "The best way to predict the future is to invent it. \n - Alan Kay "
    ],
    success: [
        "Success is not final; failure is not fatal: It is the courage to continue that counts. \n - Winston S. Churchill ",
        "Don't be afraid to give up the good to go for the great. \n - John D. Rockefeller ",
        "I find that the harder I work, the more luck I seem to have. \n - Thomas Jefferson ",
        "Success usually comes to those who are too busy to be looking for it. \n - Henry David Thoreau ",
        
    ],
    friendship: [
        "A real friend is one who walks in when the rest of the world walks out. \n - Walter Winchell ",
        "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.' \n - C.S. Lewis ",
        "A single rose can be my garden... a single friend, my world. \n - Leo Buscaglia ",
        "True friendship comes when the silence between two people is comfortable. \n - David Tyson ",
        "A friend is someone who knows all about you and still loves you. \n - Elbert Hubbard "
    ]
};
const isMobile = window.innerWidth <= 480;
let currentCategory = 'motivational';
let currentCategoryKoIndex = 0;
let fontSize = isMobile ? 1 : 1;
const minSize = isMobile ? 0.4 : 0.5;
const maxSize = isMobile ? 3 : 6;
const divquote = document.getElementById('quote');

function showQuote() {
    divquote.textContent = quotes[currentCategory][currentCategoryKoIndex];
}

function updateButtons() {
    incFont.disabled = fontSize >= maxSize;
    decFont.disabled = fontSize <= minSize;
}

const selectedCategory = document.getElementById('categories');
selectedCategory.addEventListener("click", () => {
    currentCategory = selectedCategory.value;
    currentCategoryKoIndex = 0;
    showQuote();
})

document.getElementById('nextButton').addEventListener("click", () => {
    currentCategoryKoIndex++;
    if (currentCategoryKoIndex >= quotes[currentCategory].length) {
        currentCategoryKoIndex = 0
    }
    showQuote();
});

document.getElementById('prevButton').addEventListener("click", () => {
    currentCategoryKoIndex--;
    if (currentCategoryKoIndex < 0) {
        currentCategoryKoIndex = quotes[currentCategory].length - 1;
    }
    showQuote();
});

document.getElementById('randomButton').addEventListener("click", () => {
    lengthofCategory = quotes[currentCategory].length;
    currentCategoryKoIndex = Math.floor(Math.random() * lengthofCategory);
    showQuote();
});

document.getElementById('incFont').addEventListener("click", () => {
    if (fontSize <= maxSize) {
        fontSize += 0.1;
        divquote.style.fontSize = fontSize + "rem";
        updateButtons();
    }
});

document.getElementById('decFont').addEventListener("click", () => {
    if (fontSize >= minSize) {
        fontSize -= 0.1;
        divquote.style.fontSize = fontSize + "rem";
        updateButtons();
    }
});

document.getElementById("themeToggle").addEventListener("change", () => {
    document.body.classList.toggle("dark");
});

showQuote();