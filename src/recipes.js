const recipes = {
  recipe1: {
    title: "Avocado Toast",
    image: "images/avocadoToast.jpg",
    shortDesc:
      "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi",
    ingredients: [
      "avocado",
      "sourdough bread",
      "sea salt",
      "good olive oil",
      "lemon juice"
    ],
    preparation: [
      "smash avocado",
      "mix with lemon juice",
      "spread on bread",
      "drizzle with olive oil",
      "season with sea salt"
    ],
    categories: ["Breakfast", "Snack"],
    rating: 0,
    level: 0,
    source:
      "https://www.olivemagazine.com/guides/13-best-ever-avocado-on-toast-recipes/"
  },
  recipe2: {
    title: "Blueberry Scones",
    image: "images/blueberryScones.jpg",
    shortDesc: "Parsley shallot courgette tatsoi pea sprouts fava bean collard",
    ingredients: [
      "flour",
      "baking powder",
      "salt",
      "sugar",
      "butter",
      "blueberries"
    ],
    preparation: [
      "preheat oven to 400°F",
      "sift together dry ingredients",
      "add cutted butter",
      "mix all together",
      "fold in blueberries",
      "form & cut scones",
      "put scones on baking sheet",
      "bake for 15 to 20 minutes"
    ],
    categories: ["Breakfast", "Dessert"],
    rating: 0,
    level: 0,
    source:
      "https://www.foodnetwork.com/recipes/tyler-florence/blueberry-scones-with-lemon-glaze-recipe-1914780"
  },
  recipe3: {
    title: "Deli Sandwich",
    image: "images/deliSandwich.jpg",
    shortDesc:
      "Nori grape silver beet broccoli kombu beet greens fava bean potato",
    ingredients: [
      "bread of choice",
      "pesto of choice",
      "mayonnaise",
      "cheese slices",
      "lots of deli meats",
      "pickles of choice",
      "thin sliced onions",
      "sliced tomatos",
      "lettuce"
    ],
    preparation: [
      "preheat oven to 400°F",
      "place bread on baking sheet",
      "mix pesto & mayonnaise",
      "spread mix on bread",
      "put cheese on bottom half",
      "bake until lightly toasted",
      "top cheese with meats, pickles & vegetables",
      "cover with top half"
    ],
    categories: ["Snack", "Lunch"],
    rating: 0,
    level: 0,
    source:
      "https://www.epicurious.com/recipes/food/views/end-of-the-week-deli-sandwich-359989"
  },
  recipe4: {
    title: "Flank Steak Tacos",
    image: "images/flankSteakTacos.jpg",
    shortDesc: "Celery quandong swiss chard chicory earthnut pea potato",
    ingredients: [
      "corn tortillas",
      "flank steak",
      "fajita seasoning",
      "vinegar",
      "olive oil",
      "diced onions",
      "diced jalapenos",
      "diced tomatoes",
      "chopped cilantro",
      "limes",
      "salt"
    ],
    preparation: [
      "mix oil, vinegar & seasoning",
      "marinate flank steak with mix over night",
      "let flank steak get to room temperature",
      "cook flank steak in pipin ghot cast iron skillet or saute pan",
      "let steak rest for 5 minutes",
      "combine onions, jalapenos, tomatoes & cilantro",
      "squeeze lime juice to mix & season",
      "slice steak thinly against grain & place in warm tortillas",
      "top with pico de gallo"
    ],
    categories: ["Lunch", "Dinner"],
    rating: 0,
    level: 0,
    source:
      "https://www.isabeleats.com/marinated-flank-steak-tacos-with-pico-de-gallo/"
  },
  recipe5: {
    title: "Healthy Gazpacho",
    image: "images/healthyGazpacho.jpg",
    shortDesc: "Soko radicchio bunya nuts gram dulse silver beet parsnip napa",
    ingredients: [
      "baby spinach",
      "garlic",
      "cucumber",
      "parsley, basil & mint",
      "avocado",
      "spring onions",
      "natural yoghurt",
      "vinegar",
      "olive oil"
    ],
    preparation: [
      "put all ingredients into food processor & blitz",
      "add water as much as needed to provide soupy consistency",
      "season with salt & pepper",
      "chill for at least 2 hours"
    ],
    categories: ["Lunch", "Dinner"],
    rating: 0,
    level: 0,
    source: "https://www.bbcgoodfood.com/recipes/green-gazpacho"
  },
  recipe6: {
    title: "Italien Sandwich",
    image: "images/italianSandwich.jpg",
    shortDesc:
      "Beetroot water spinach okra water chestnut ricebean pea catsear",
    ingredients: [
      "bread",
      "salami",
      "prosciutto",
      "provolone",
      "tomato",
      "mixed greens",
      "basil",
      "olive oil",
      "balsamic vinegar"
    ],
    preparation: [
      "cut bread in halves",
      "drizzle halves with olive oil & vinegar",
      "layer salami, prosciutto, provolone, tomatoes & mixed greens",
      "top with basil",
      "cover with top half"
    ],
    categories: ["Lunch", "Dinner"],
    rating: 0,
    level: 0,
    source: "https://www.thespruceeats.com/italian-sandwich-recipes-2937593"
  },
  recipe7: {
    title: "Melon Grape Salad",
    image: "images/melonGrapeSalad.jpg",
    shortDesc: "Kohlrabi radish okra azuki bean corn fava bean mustard",
    ingredients: [
      "quinoa or spelt",
      "grapes",
      "diced feta or gorgonzola",
      "cantaloupe balls",
      "aragula",
      "mint leaves",
      "chopped walnuts",
      "olive oil",
      "vinegar",
      "salt & pepper"
    ],
    preparation: [
      "prepare grains as stated",
      "halve grapes",
      "mix all ingredients except mint & walnuts",
      "season with oil, vinegar, salt & pepper",
      "top with mint leaves & walnuts"
    ],
    categories: ["Lunch", "Dinner"],
    rating: 0,
    level: 0,
    source: "-"
  },
  recipe8: {
    title: "Nettle Tea Mojito",
    image: "images/nettleTeaMojito.jpg",
    shortDesc:
      "Water spinach arugula pea tatsoi aubergine spring onion bush tomato",
    ingredients: [
      "lime",
      "nettle tea bags",
      "raw honey",
      "crushed ice",
      "sparkling water",
      "fresh mint leaves"
    ],
    preparation: [
      "prepare tea as stated",
      "pour tea in cocktail glasses",
      "add honey & lemon juice, stir until desolved",
      "tear some mint leaves and place into glasses",
      "add ice & water to fill to the top",
      "garnish with whole mint leaves"
    ],
    categories: ["Drink"],
    rating: 0,
    level: 0,
    source: "https://foodbymars.com/home/2017/nettle-tea-mojitos/"
  },
  recipe9: {
    title: "Homemade Pizza",
    image: "images/pizza.jpg",
    shortDesc:
      "Sea lettuce gumbo grape kale kombu cauliflower salsify kohlrabi okra ",
    ingredients: [
      "water",
      "yeast",
      "bread flour",
      "olive oil",
      "salt",
      "sugar",
      "tomato sauce",
      "firm, grated mozarella cheese",
      "fresh mozarella clumps",
      "added cheese of choice",
      "topping of choice, e.g. mushroomes, bell peppers, onions, ham, ...",
      "pesto"
    ],
    preparation: [
      "prepare dough out of water, yeast, flour, oil, salt & sugar",
      "let dough rise",
      "preheat pizzastone or pizza pan or baking sheet to 475°F",
      "prepare pizza toppings (slice, dice, mix, chop)",
      "flatten dough & stretch out into a round",
      "brush dough top with olive oil",
      "spread tomato sauce, sprinkle with cheese & add your toppings",
      "bake pizza until crust is browned & cheese is golden (about 10-15 minutes)"
    ],
    categories: ["Lunch", "Dinner"],
    rating: 0,
    level: 0,
    source: "https://www.simplyrecipes.com/recipes/homemade_pizza/"
  },
  recipe10: {
    title: "Vegan Pho",
    image: "images/veganPho.jpg",
    shortDesc:
      "Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot",
    ingredients: [
      "sliced spring onions",
      "cinnamon, star anise, cloves",
      "peppercorns",
      "finely chopped garlic",
      "vegetable stock",
      "chopped cilantro",
      "sliced fresh ginger",
      "chopped dried shiitake",
      "addins like rice noodles, bok choy, mushrooms, edamame",
      "toppings like lime wdges, cilantro, mint leaves, chili peppers, soy sauce"
    ],
    preparation: [
      "place large saucepan over low heat",
      "toast star anise, cinnamon, peppercorns & cloves until fragant",
      "add spring onion, vegetable stock, garlic, ginger, coriander roots & shiitake mushrooms",
      "bring to biol & reduce to simmer, cover & simmer for 20 minutes",
      "strain stock through fine sieve & place over heat again",
      "add bok choi & rice noodles",
      "add mushrooms & edamame just before serving",
      "devide noodles between serving bowls & ladle in the stock",
      "serve with lime wedges, cilantro, mint, chili peppers & soy sauce"
    ],
    categories: ["Lunch", "Dinner"],
    rating: 0,
    level: 0,
    source: "https://www.deliciouseveryday.com/vegan-pho-recipe/"
  }
};

export default recipes;
