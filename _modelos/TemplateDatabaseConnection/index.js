
const BlogContext = require('./models/BlogContext');

// Sincroniza todos modelos do banco de dados
try {
    BlogContext.sync();
}
catch (error) {
    console.log(error);
}