document.addEventListener('DOMContentLoaded', function() {
    
    function searchRecipes() {
     
    }

    
    var reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(event) {
            event.preventDefault();
    
            
            const name = this.name.value;
            const review = this.review.value;
            const rating = this.querySelector('.star-rating input[type="hidden"]').value;
            const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
    
            
            const newReview = document.createElement('div');
            newReview.classList.add('review');
            newReview.innerHTML = `<p><strong>${name}:</strong> ${review} <span class="rating">${stars}</span></p>`;
    
          
            const reviewsContainer = document.querySelector('.reviews-container');
            reviewsContainer.appendChild(newReview);
    
            this.reset();
            document.querySelectorAll('.star-rating .star').forEach(star => star.style.color = '#ddd');
        });
    }
    

    document.querySelectorAll('.star-rating .star').forEach(function(star) {
        star.addEventListener('click', function() {
            let rating = this.getAttribute('data-value');
            document.querySelectorAll('.star-rating .star').forEach(function(innerStar, index) {
                if (index < rating) {
                    innerStar.style.color = 'gold'; 
                } else {
                    innerStar.style.color = '#ddd';
                }
            });
            document.querySelector('.star-rating input[type="hidden"]').value = rating;
        });
    });
});
const recipes = {
    appetizers: {
        'ancientGreekDolmades': {
            title: 'Ancient Greek Dolmades',
            imageUrl: 'images/Greek-Dolmades.webp',
            history: 'Dolmades, or stuffed grape leaves, were a popular dish in ancient Greece. They were often filled with rice, herbs, and sometimes minced meat, reflecting the Mediterranean flavors.',
            ingredients: ['Grape leaves', '1 cup cooked rice', '1/4 cup olive oil', '2 tbsp lemon juice', '1/2 cup chopped dill and mint', '1/2 cup pine nuts', 'Salt and pepper to taste'],
            instructions: ['Blanch grape leaves in boiling water.', 'Mix rice with herbs, pine nuts, olive oil, lemon juice, salt, and pepper.', 'Place a spoonful of the mixture on each leaf and roll tightly.', 'Steam or simmer the dolmades until fully cooked.'],
            servingTips: 'Serve warm or cold with a drizzle of olive oil and lemon juice.',
            id: 'appetizers_ancientGreekDolmades'
        },
        'japaneseMisoSoup': {
            title: 'Japanese Miso Soup',
            imageUrl: 'images/miso-soup.webp',
            history: 'Miso soup, a staple in Japanese cuisine, has been consumed in Japan since the Heian period (794-1185). It typically contains miso paste, dashi (fish stock), and various ingredients such as tofu and seaweed.',
            ingredients: ['4 cups dashi stock', '3 tbsp miso paste', '1/2 cup tofu, cubed', '1/4 cup seaweed, chopped', '2 green onions, chopped'],
            instructions: ['Heat the dashi stock in a pot over medium heat but do not boil.', 'Dissolve miso paste in a small amount of warm dashi, then add back to the pot.', 'Add tofu and seaweed and heat through.', 'Garnish with green onions before serving.'],
            servingTips: 'Serve as a starter or with a meal. It’s traditionally enjoyed with rice and pickles.',
            id: 'appetizers_japaneseMisoSoup'
        },
        'spanishTapasAlbondigas': {
            title: 'Spanish Tapas: Albondigas',
            imageUrl: 'images/spanishTapasAlbondigas.webp',
            history: 'Albondigas, or Spanish meatballs, are a popular tapas dish in Spain, with roots going back to when the Moors occupied the region. They are traditionally served in bars and enjoyed as a small, flavorful snack.',
            ingredients: ['1 lb ground beef or pork', '1 onion, finely chopped', '2 garlic cloves, minced', '1 egg', '1/2 cup breadcrumbs', '2 tsp paprika', 'Salt and pepper', 'Olive oil', 'Tomato sauce (for serving)'],
            instructions: ['Mix meat with onion, garlic, egg, breadcrumbs, paprika, salt, and pepper.', 'Form into small balls.', 'Fry meatballs in olive oil until browned and cooked through.', 'Serve with tomato sauce.'],
            servingTips: 'Serve hot as a part of a tapas spread, accompanied by other small dishes.',
            id: 'appetizers_spanishTapasAlbondigas'
        },
        'greekTzatziki': {
            title: 'Greek Tzatziki',
            imageUrl: 'images/Greek-Tzatziki-sauce.webp',
            history: 'Tzatziki is a classic Greek appetizer or meze made from thick yogurt, cucumbers, garlic, and herbs. It has its roots in the cuisine of the Ottoman Empire and is a refreshing start to a meal.',
            ingredients: ['2 cups Greek yogurt', '1 cucumber, grated and drained', '2 cloves garlic, minced', '2 tbsp olive oil', '1 tbsp dill, chopped', '1 tbsp mint, chopped', 'Lemon juice', 'Salt and pepper'],
            instructions: ['Combine Greek yogurt, grated cucumber, garlic, olive oil, dill, mint, and lemon juice.', 'Season with salt and pepper to taste.', 'Chill in the refrigerator for a few hours before serving.'],
            servingTips: 'Serve chilled with pita bread or fresh vegetables for dipping.',
            id: 'appetizers_greekTzatziki'
        },
        'mexicanGuacamole': {
            title: 'Mexican Guacamole',
            imageUrl: 'images/Guacamole.webp',
            history: 'Guacamole is an avocado-based dip first made by the Aztecs in what is now Mexico. Its name comes from an Aztec dialect and means "avocado sauce".',
            ingredients: ['3 ripe avocados', '1 lime, juiced', '1/2 red onion, finely chopped', '2 tomatoes, diced', '1/4 cup cilantro, chopped', '1 jalapeno, minced', 'Salt'],
            instructions: ['Mash avocados in a bowl.', 'Stir in lime juice, onion, tomatoes, cilantro, and jalapeno.', 'Season with salt to taste.'],
            servingTips: 'Serve with tortilla chips or as a topping for tacos.',
            id: 'appetizers_mexicanGuacamole'
        },
    
        'italianBruschetta': {
            title: 'Italian Bruschetta',
            imageUrl: 'images/bruschetta.webp',
            history: 'Bruschetta originated in Italy during the 15th century. It consists of grilled bread rubbed with garlic and topped with olive oil, salt, and fresh toppings.',
            ingredients: ['1 loaf Italian bread, sliced', '3 tomatoes, diced', '1 clove garlic, minced', '1/4 cup basil, chopped', '2 tbsp olive oil', '1 tbsp balsamic vinegar', 'Salt and pepper'],
            instructions: ['Toast the bread slices.', 'In a bowl, mix tomatoes, garlic, basil, olive oil, and balsamic vinegar.', 'Spoon the mixture onto toasted bread.', 'Season with salt and pepper.'],
            servingTips: 'Serve immediately after preparation to maintain the crispness of the bread.',
            id: 'appetizers_italianBruschetta'
        },
    },
    desserts:{
        'medievalGingerbread': {
            title: 'Medieval Gingerbread',
            imageUrl: 'images/Medieval-Gingerbread.webp',
            history: 'Unlike modern gingerbread, medieval gingerbread was made with breadcrumbs, honey, and spices. It was a favorite treat at fairs and other festivities.  Gingerbread has a long history.  Early forms of gignerbread can be traced back the the ancient Greeks and Eygtians who would use it for ceremonial purposes.  It took till the 11th-century Crusades to bring back ginger from the Middle East.  This was for the aristocrats to experiment with.  The masses wouldnt know about gingerbread until it became more affordable.',
            ingredients: ['1 cup fresh breadcrumbs', '1/2 cup honey', '1 tsp ground ginger','1/2 tsp ground cinnamon','1/4 tsp ground nutmeg','1/4 tsp ground cloves','Pinch of black pepper',],
            instructions: ['Gently heat the honey until it becomes runny.','Mix the spices into the breadcrumbs.','Pour the warm honey over the spiced breadcrumbs and mix well.','Press the mixture into a shallow dish and allow to cool.',],
            servingTips: 'Serve hot, ideally with a piece of rustic bread...',
            id: 'desserts_medievalGingerbread'
        },
        'elizabethanMarchpane': {
            title: 'Elizabethan Marchpane',
            imageUrl: 'images/elizabethanMarchpane.webp',
            history: 'Marchpane, an early form of marzipan, was a luxurious sweet in Elizabethan England. Often shaped and colored artistically for banquets, it was a symbol of wealth and creativity in the kitchen.',
            ingredients: ['2 cups ground almonds', '1 cup powdered sugar', '2 tablespoons rose water', 'Egg white (optional, for binding)'],
            instructions: ['Mix ground almonds and powdered sugar.', 'Add rose water (and egg white if used) to form a stiff dough.', 'Roll out the dough and shape as desired.', 'Bake at a low temperature until slightly hard to the touch.'],
            servingTips: 'Decorate with edible gold leaf or colored icing for a regal presentation.',
            id: 'desserts_elizabethanMarchpane'
        },
        'ottomanBaklava': {
            title: 'Ottoman Baklava',
            imageUrl: 'images/ottomanBaklava.webp',
            history: 'Baklava is a rich, sweet pastry made of layers of filo filled with chopped nuts, sweetened with syrup or honey. It was a popular dessert in the Ottoman Empire and its origin dates back to the 8th century B.C. in Assyria.',
            ingredients: ['1 package filo dough', '1 cup melted butter', '2 cups chopped nuts (walnuts, pistachios, or almonds)', '1 cup sugar', '1 tsp ground cinnamon', '1 cup water', '1/2 cup honey'],
            instructions: ['Layer sheets of filo dough, brushing each with melted butter.', 'Mix nuts with sugar and cinnamon, and spread over the filo.', 'Add more filo layers on top, then cut into diamonds.', 'Bake until golden, then pour a mixture of water and honey over the hot baklava.'],
            servingTips: 'Let it cool to allow the syrup to soak in. Serve as a luxurious treat.',
            id: 'desserts_ottomanBaklava'
        },
    
        'medievalRicePudding': {
            title: 'Medieval Rice Pudding',
            imageUrl: 'images/ricePudding.webp',
            history: 'Rice pudding was a common dessert in medieval Europe. Made with rice, almonds, and sweetened with honey or sugar, it was a dish that combined the influences of Arab culinary traditions with local European ingredients.',
            ingredients: ['1/2 cup rice', '3 cups almond milk', '1/4 cup sugar', '1/2 tsp cinnamon', '1/4 cup raisins', 'Pinch of saffron (optional)'],
            instructions: ['Cook rice in almond milk until tender.', 'Add sugar, cinnamon, raisins, and saffron.', 'Simmer until the mixture thickens.', 'Chill before serving.'],
            servingTips: 'Serve cold, garnished with a sprinkle of cinnamon or chopped almonds.',
            id: 'desserts_medievalRicePudding'
        },
    
        'aztecXocolatl': {
            title: 'Aztec Xocolatl',
            imageUrl: 'images/aztecCoco.webp',
            history: 'Xocolatl was an ancient Aztec drink, considered a beverage of the gods. Made from roasted and ground cacao beans, it was mixed with spices and sometimes with honey for sweetness, quite different from the hot chocolate we know today.',
            ingredients: ['1/4 cup roasted cacao beans, ground', '3 cups water', '1 chili pepper, finely chopped', 'Honey to taste', '1/2 tsp vanilla extract'],
            instructions: ['Mix ground cacao beans with water and chili in a pot.', 'Heat gently, stirring constantly, until it starts to simmer.', 'Add vanilla and honey to taste.', 'Whisk vigorously to create a froth.'],
            servingTips: 'Serve warm in small cups. It’s traditionally enjoyed without milk.',
            id: 'desserts_aztecXocolatl'
        },
    
        'indianGulabJamun': {
            title: 'Indian Gulab Jamun',
            imageUrl: 'images/gulab-jamun.webp',
            history: 'Gulab Jamun is a classic Indian sweet, made of milk solids kneaded into a dough, molded into balls, deep-fried, and soaked in a rose-flavored syrup. Its thought to have originated in medieval India, influenced by Persian invaders.',
            ingredients: ['1 cup powdered milk', '1/4 cup all-purpose flour', '1/4 tsp baking powder', '1/4 cup milk', '1 tbsp ghee (clarified butter)', '2 cups sugar', '4 cups water', '1 tsp rose water', 'Cardamom pods'],
            instructions: ['Mix powdered milk, flour, and baking powder. Add milk and ghee to form a dough.', 'Form small balls from the dough.', 'Deep-fry the balls until golden brown.', 'Make a syrup with sugar, water, rose water, and cardamom. Soak the fried balls in the syrup.'],
            servingTips: 'Serve warm or at room temperature as a delightful end to a meal.',
            id: 'desserts_indianGulabJamun'
        },
    },
    mainCourse:{
        'medievalPottage': {
            title: 'Medieval Pottage',
            imageUrl: 'images/medeival-pottage2.webp',
            history: 'Pottage, a staple in medieval cuisine, was a thick, often stew-like soup that varied based on available ingredients. It was commonly eaten by peasants throughout Europe, often cooked in a large pot over an open fire. The ingredients changed with the seasons and could include anything from barley, lentils, and vegetables to occasionally meat, when available. Pottage was not just a daily meal but also provided essential nutrition with its diverse ingredients.',
            ingredients: [
                '1 cup barley',
                '2 carrots, diced',
                '1 onion, chopped',
                '2 potatoes, cubed',
                '1/2 cup of peas',
                '1/2 cup of lentils',
                '4 cups vegetable broth or water',
                'Salt and pepper to taste',
                'Herbs like thyme or rosemary (optional)',
            ],
            instructions: [
                'Soak the barley overnight in water.',
                'In a large pot, add the soaked barley, diced carrots, chopped onion, cubed potatoes, peas, and lentils.',
                'Pour in the vegetable broth or water. Bring the mixture to a boil.',
                'Reduce heat and let it simmer for about 1 hour, or until all ingredients are soft.',
                'Season with salt and pepper. Add herbs as desired.',
                'Stir occasionally to prevent sticking and to ensure even cooking.',
                'If the pottage is too thick, add more water or broth to reach your desired consistency.',
            ],
            servingTips: 'Serve the pottage hot, ideally with a piece of rustic bread or a simple salad. In medieval times, this dish would be eaten from a common bowl, making it a centerpiece for communal eating and sharing. For a modern twist, top it with a sprinkle of fresh herbs or a dollop of cream.',
            id: 'mainCourse_medievalPottage'
        
        },
        
        'renaissancePottage': {
            title: 'Renaissance Pottage',
            imageUrl: 'images/renaissancePottage.webp',
            history: 'Pottage, a thick stew, was a staple in Renaissance Europe. Made with whatever vegetables and grains were on hand, it was a versatile dish that could be adapted for any season or social class.',
            ingredients: ['1 onion, chopped', '2 carrots, diced', '1 parsnip, diced', '1/2 cup pearl barley', '4 cups vegetable broth', '1/2 cup chopped kale', 'Salt and pepper to taste'],
            instructions: ['In a large pot, sauté onions, carrots, and parsnip.', 'Add barley and broth, bring to a boil.', 'Reduce heat, cover, and simmer until vegetables and barley are tender.', 'Stir in kale, season with salt and pepper.'],
            servingTips: 'Serve hot with a side of crusty bread.',
            id: 'mainCourse_renaissancePottage'
        },
        
        
        'indianChickenBiryani': {
            title: 'Indian Chicken Biryani',
            imageUrl: 'images/Chicken-Biryani.webp',
            history: 'Biryani is a mixed rice dish from the Indian subcontinent. Its a festive dish and was traditionally prepared in royal kitchens. It combines elements from the Mughal, Turkish, and Persian cuisines and varies widely across different regions of India.',
            ingredients: ['2 cups basmati rice', '1 lb chicken, cut into pieces', '2 onions, thinly sliced', '1 cup yogurt', '2 tbsp ginger-garlic paste', '2 tsp garam masala', '1 tsp turmeric', 'Saffron strands', 'Oil', 'Salt'],
            instructions: ['Marinate chicken in yogurt, ginger-garlic paste, spices, and salt.', 'Cook rice until it’s half-done.', 'Fry onions until golden and set aside.', 'Layer the marinated chicken and half-cooked rice in a pot. Sprinkle fried onions and saffron-infused water.', 'Cover and cook on low heat until the chicken is tender and the rice is cooked.'],
            servingTips: 'Garnish with fried onions, chopped cilantro, and serve with raita (yogurt sauce).',
            id: 'mainCourse_indianChickenBiryani'
        },
        'moroccanTagine': {
            title: 'Moroccan Tagine',
            imageUrl: 'images/moroccanTagine.webp',
            history: 'Tagine, a slow-cooked stew from North Africa, is named after the earthenware pot in which it is cooked. Its a traditional Moroccan dish, rich in spices and often combining sweet and savory flavors.',
            ingredients: ['2 lbs lamb, cut into chunks', '2 onions, chopped', '2 carrots, sliced', '1 cup dried apricots', '2 garlic cloves, minced', '1 tsp ground cumin', '1 tsp ground cinnamon', '1 tsp ground ginger', '2 cups chicken stock', 'Olive oil', 'Salt and pepper'],
            instructions: ['In a tagine or heavy pot, heat olive oil and brown the lamb.', 'Add onions and garlic, cook until softened.', 'Stir in spices, then add carrots, apricots, and stock.', 'Cover and simmer for 1.5 to 2 hours until the lamb is tender.'],
            servingTips: 'Serve with couscous and garnish with fresh cilantro or parsley.',
            id: 'mainCourse_moroccanTagine'
        },
    
        'chineseCongee': {
            title: 'Chinese Congee',
            imageUrl: 'images/chineseCongeewebp.webp',
            history: 'Congee, a type of rice porridge, is a traditional breakfast dish in China. It dates back to the Zhou dynasty and is often served with various toppings such as pickled vegetables, meats, and eggs.',
            ingredients: ['1 cup rice', '8 cups water or broth', 'Ginger, sliced', 'Soy sauce', 'Green onions, chopped', 'Cooked chicken or pork (optional)'],
            instructions: ['Rinse rice and add to a pot with water or broth.', 'Bring to a boil, then reduce to a simmer.', 'Add ginger slices and simmer for about 1 hour, stirring occasionally, until it reaches a creamy consistency.', 'Season with soy sauce to taste.'],
            servingTips: 'Serve hot with green onions and your choice of toppings like cooked chicken, pork, or pickled vegetables.',
            id: 'mainCourse_'
        },
    }
};
function displayRecipes() {
    const recipesGrid = document.getElementById('recipesGrid');
    if (recipesGrid) {
        recipesGrid.innerHTML = '';

        for (const category in recipes) {
            if (recipes.hasOwnProperty(category)) {
                const categoryRecipes = recipes[category];
                for (const key in categoryRecipes) {
                    if (categoryRecipes.hasOwnProperty(key)) {
                        const recipe = categoryRecipes[key];

                        // Create recipe card
                        const recipeCard = document.createElement('div');
                        recipeCard.classList.add('recipe-card');
                        recipeCard.innerHTML = `
                            <img src="${recipe.imageUrl}" alt="${recipe.title}" class="recipe-image">
                            <div class="recipe-title">${recipe.title}</div>
                        `;

                        // Add click event listener for redirecting to detail page
                        recipeCard.addEventListener('click', function() {
                            window.location.href = `recipe-detail.html?id=${category}_${key}`;
                        });

                        recipesGrid.appendChild(recipeCard);
                    }
                }
            }
        }
    }
}


function showRecipeDetails(category, recipeId) {
    const recipe = recipes[category][recipeId];
    console.log('Showing details for:', recipe);
    // Here, implement the logic to display the recipe details
}

// Call the function to display recipes
document.addEventListener('DOMContentLoaded', displayRecipes);

function displayCategoryRecipes(category) {
    const recipesGrid = document.getElementById(category + 'Grid');
    if (!recipesGrid) {
        return; // Exit if the grid element is not found
    }

    recipesGrid.innerHTML = ''; // Clear existing content

    for (const key in recipes[category]) {
        const recipe = recipes[category][key];

         // Create recipe card
         const recipeCard = document.createElement('div');
         recipeCard.classList.add('recipe-card');
         recipeCard.innerHTML = `
             <img src="${recipe.imageUrl}" alt="${recipe.title}" class="recipe-image">
             <div class="recipe-title">${recipe.title}</div>
         `;
         recipeCard.addEventListener('click', function() {
            window.location.href = `recipe-detail.html?id=${category}_${key}`;
        });
        recipesGrid.appendChild(recipeCard);
    }
};
function getRecipeFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get('id');
    if (!recipeId) return null;
    
    const [category, key] = recipeId.split('_');
    return recipes[category] ? recipes[category][key] : null;
}


function displayRecipeDetails() {
    // Check if the 'recipeDetailContainer' element exists
    const detailContainer = document.getElementById('recipeDetailContainer');
    if (!detailContainer) {
        console.error('Element with ID "recipeDetailContainer" not found.');
        return; // Exit the function if the element is not found
    }

    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get('id');
    if (!recipeId) {
        detailContainer.innerHTML = '<p>Recipe not found.</p>';
        return;
    }

    const [category, key] = recipeId.split('_');
    const recipe = recipes[category][key];

    if (!recipe) {
        detailContainer.innerHTML = '<p>Recipe not found.</p>';
        return;
    }

    let recipeHtml = `
    <div class="recipe-detail-container">
        <h1 class="recipe-detail-title">${recipe.title}</h1>
        <img src="${recipe.imageUrl}" alt="${recipe.title}" class="recipe-detail-image">
        <div class="recipe-detail-content">
            <h2>History</h2>
            <p>${recipe.history}</p>
            <h2>Ingredients</h2>
            <ul class="recipe-detail-ingredients">${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
            <h2>Instructions</h2>
            <ol class="recipe-detail-instructions">${recipe.instructions.map(step => `<li>${step}</li>`).join('')}</ol>
            <h2>Serving Tips</h2>
            <p>${recipe.servingTips}</p>
        </div>
    </div>
`;


document.getElementById('recipeDetailContainer').innerHTML = recipeHtml;
}

document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('recipeDetailContainer')) {
        displayRecipeDetails();
    }
});
function searchRecipes() {
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();
    console.log('Search term:', searchTerm);

    //Can't get the search bar to work.  comeback to this
    for (const category in recipes) {
        if (recipes.hasOwnProperty(category)) {
            const categoryRecipes = recipes[category];

            for (const key in categoryRecipes) {
                if (categoryRecipes.hasOwnProperty(key)) {
                    const recipe = categoryRecipes[key];
                    const recipeCard = document.getElementById(`recipeCard-${category}_${key}`);
                    if (recipe.title.toLowerCase().includes(searchTerm)) {
                        recipeCard.style.display = '';
                    } else {
                        recipeCard.style.display = 'none';
                    }
                }
            }
        }
    }
}
// function displayRandomRecipes() {
//     const carouselSlides = document.getElementById('carouselSlides');
//     if (!carouselSlides) return;

//     let allRecipes = [];
//     for (const category in recipes) {
//         allRecipes = allRecipes.concat(Object.entries(recipes[category]).map(([key, recipe]) => ({
//             ...recipe,
//             id: `${category}_${key}`
//         })));
//     }

//     const shuffled = allRecipes.sort(() => 0.5 - Math.random());
//     let selected = shuffled.slice(0, 5); // Display 5 recipes in the carousel

//     carouselSlides.innerHTML = selected.map(recipe => `
//         <div class="carousel-slide">
//             <a href="recipe-detail.html?id=${recipe.id}" class="carousel-slide-link">
//                 <h3>${recipe.title}</h3>
//                 <img src="${recipe.imageUrl}" alt="${recipe.title}" class="random-recipe-image">
//             </a>
//         </div>
//     `).join('');
// }

// document.addEventListener('DOMContentLoaded', displayRandomRecipes);


// Call the function on DOMContentLoaded
document.addEventListener('DOMContentLoaded', displayRandomRecipes);
function displayRandomRecipes() {
    const carouselSlides = document.getElementById('carouselSlides');
    if (!carouselSlides) return;

    let allRecipes = [];
    for (const category in recipes) {
        allRecipes = allRecipes.concat(Object.values(recipes[category]));
    }

    const shuffled = allRecipes.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 5); // Display 5 recipes in the carousel

    carouselSlides.innerHTML = selected.map(recipe => `
    <div class="carousel-slide">
      <a href="recipe-detail.html?id=${recipe.id}" class="carousel-slide-link">
        <h3>${recipe.title}</h3>
        <img src="${recipe.imageUrl}" alt="${recipe.title}" class="random-recipe-image">
        </a>
    </div>
  `).join('');
  
}

document.addEventListener('DOMContentLoaded', displayRandomRecipes);
let slideIndex = 0;

function moveSlide(step) {
    const slides = document.getElementsByClassName('carousel-slide');
    if (slides.length === 0) return;

    slideIndex = (slideIndex + step + slides.length) % slides.length;
    const totalWidth = -slideIndex * slides[0].clientWidth;
    document.getElementById('carouselSlides').style.transform = `translateX(${totalWidth}px)`;
}
