const Recipes = [
  {
    id: 1,
    name: "Biryani",
    procedure: "Cook the chicken with spices, layer with rice, and simmer.",
    ingredients: ["chicken", "basmati rice", "onions", "yogurt", "spices"],
    duration: "25 min",
  },
  {
    id: 2,
    name: "Pasta Primavera",
    procedure: "Sauté vegetables, cook pasta, and mix together with sauce.",
    ingredients: ["pasta", "bell peppers", "zucchini", "olive oil", "parmesan"],
    duration: "30 min",
  },
  {
    id: 3,
    name: "Chicken Tacos",
    procedure: "Cook the chicken, prepare toppings, and assemble in tortillas.",
    ingredients: ["chicken", "tortillas", "lettuce", "tomato", "cheese"],
    duration: "20 min",
  },
];


//GET RRECIPES
export const getrecipes = (req, res) => {
  res
    .status(200)
    .json({ message: "Receipe Retrived Successfully", data: Recipes });
};

// GET RECEipes BY Id
export const getRecipesID = (req, res) => {
  const recipeId = req.params.id;
  const recipeDetails = Recipes.find((ele) => ele.id == recipeId);
  if (!recipeDetails) {
    res.status(404).json({ message: "Not Found" });
  }
  res
    .status(200)
    .json({ message: "Receipe Id Retrived Successfully", data: recipeDetails });
};


//post method
export const createRecipes = (req, res) => {
  const { name, procedure, ingredients, duration } = req.body;
  const newRecipe = {
    id: Recipes.length + 1,
    name: name,
    procedure: procedure,
    ingredients: ingredients,
    duration: duration,
  };
  Recipes.push(newRecipe);
  res
    .status(200)
    .json({ message: "Recepes Addect Succesfully", data: newRecipe });
};

//put method


export const recipesUpdate =(req,res) =>{
  const recipeid = req.params.id;
  const { name, procedure, ingredients, duration } = req.body;
  const recipeDetails = Recipes.findIndex((ele) => ele.id == recipeid)

  if(recipeDetails=== -1){
    res.status(404).json({message:"Not Found"})
  }
  Recipes[recipeDetails].name =name;
  Recipes[recipeDetails].procedure =procedure;
  Recipes[recipeDetails].ingredients =ingredients;
  Recipes[recipeDetails].duration =duration;

  res.status(200).json({message:"Recipes Updated....",data:Recipes[recipeDetails]})

}

//Delete Method 
export const recepiesDelete = (req,res) =>{
  const receipeId = req.params.id;
  const recipeDetails = Recipes.findIndex((ele) => ele.id == receipeId)
  if(recipeDetails=== -1){
    res.status(404).json({message:"Not Found"})
  }
  Recipes.splice(recipeDetails,1)
  res.status(200).json({message:"Recipes Susccesfully Deleted"})
}