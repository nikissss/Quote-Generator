const quotes = {
    motivational: [
        "The only way to achieve the impossible is to believe it is possible.",
        "Push yourself, because no one else is going to do it for you.",
        "Great things never come from comfort zones.",
        "Dream it. Wish it. Do it.",
        "Don’t stop when you’re tired; stop when you’re done.",
        "Success doesn’t just find you. You have to go out and get it."
    ],
    happiness: [
        "Happiness is not something ready made. It comes from your own actions.",
        "For every minute you are angry, you lose sixty seconds of happiness.",
        "Happiness depends upon ourselves.",
        "Count your age by friends, not years. Count your life by smiles, not tears.",
        "Happiness is when what you think, what you say, and what you do are in harmony.",
        "The purpose of our lives is to be happy."
    ],
    life: [
        "Life is what happens when you're busy making other plans.",
        "In the end, it’s not the years in your life that count. It’s the life in your years.",
        "Life is either a daring adventure or nothing at all.",
        "Turn your wounds into wisdom.",
        "Do not take life too seriously. You will never get out of it alive.",
        "Life is short, and it is up to you to make it sweet."
    ],
    success: [
        "Success usually comes to those who are too busy to be looking for it.",
        "Don’t be afraid to give up the good to go for the great.",
        "I find that the harder I work, the more luck I seem to have.",
        "Success is not in what you have, but who you are.",
        "Opportunities don’t happen. You create them.",
        "The road to success and the road to failure are almost exactly the same."
    ],
    friendship: [
        "A real friend is one who walks in when the rest of the world walks out.",
        "Friendship is the only cement that will ever hold the world together.",
        "True friends are like diamonds — bright, beautiful, valuable, and always in style.",
        "A friend is someone who knows all about you and still loves you.",
        "Friendship is born at that moment when one person says to another: ‘What! You too? I thought I was the only one.’",
        "Good friends are like stars. You don’t always see them, but you know they’re always there."
    ]
};
const isMobile = window.innerWidth <= 480;
let currentCategory = 'motivational';
let currentCategoryKoIndex = 0;
let fontSize = isMobile ? 1 : 2;
const minSize = isMobile ? 0.7 : 1.2;
const maxSize = isMobile ? 3 : 5;
const divquote = document.getElementById('quote');

function showQuote() {
    divquote.textContent = quotes[currentCategory][currentCategoryKoIndex];
}

function updateButtons() {
    incBtn.disabled = fontSize >= maxSize;
    decBtn.disabled = fontSize <= minSize;
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
        fontSize += 0.2;
        divquote.style.fontSize = fontSize + "rem";
        updateButtons();
    }
});

document.getElementById('decFont').addEventListener("click", () => {
    if (fontSize >= minSize) {
        fontSize -= 0.2;
        divquote.style.fontSize = fontSize + "rem";
        updateButtons();
    }
});

document.getElementById("themeToggle").addEventListener("change", () => {
    document.body.classList.toggle("dark");
});

showQuote();