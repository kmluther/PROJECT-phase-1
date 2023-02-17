const drinksAPI = "http://localhost:3000";

const vodkaAPI = `${drinksAPI}/vodkaDrinks`;
const ginAPI = `${drinksAPI}/ginDrinks`;
const tequilaAPI = `${drinksAPI}/tequilaDrinks`;

const reviewForm = el('review-form');
let liquorSelection = el('liquor-types');

liquorSelection.addEventListener("change", () => {
        switch(liquorSelection.value) {
            case "vodka":
                fetch(vodkaAPI)
                    .then(res => res.json())
                    .then(renderCocktailList);
                    break;
            case "gin":
                fetch(ginAPI)
                    .then(res => res.json())
                    .then(renderCocktailList);
                    break;
            case "tequila":
                fetch(tequilaAPI)
                    .then(res => res.json())
                    .then(renderCocktailList);
                    break;
        }
    })

function renderCocktailList(drinks) {
    drinks.forEach(renderCocktailCards);
};

function renderCocktailCards(liquor) {
    const newCard = document.createElement('li');
    newCard.textContent = liquor.strDrink;
    el('cocktail-cards').append(newCard);

    console.log(liquor);

    newCard.addEventListener('click', renderRecipe);
    function renderRecipe() {
        el('ingredients').textContent = liquor.strIngredients;
        el('instructions').textContent = liquor.strInstructions;
        el('cocktail-image').src = liquor.strDrinkThumb;
    }
};

// event listener on form for rating / review

reviewForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    console.log("Form Submitted");
}

function el(id) {
    return document.getElementById(id);
}