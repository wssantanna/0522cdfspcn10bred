const RecipeService = require('./services/RecipeService');

const Context = require('./models/Context');

// Sincroniza todos modelos do banco de dados
try {
    Context.sync();
}
catch (error) {
    console.log(error);
}
