const app = require("./app");

//procura pela PORTA caso não ache, usa a 3000
app.listen(process.env.PORT || 3000);
