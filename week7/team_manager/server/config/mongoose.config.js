const mongoose = require('mongoose')

const db = 'team_manager-db'
mongoose.connect(`mongodb://127.0.0.1:27017/${db}`, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
    .then(() => console.log(`Connected just fine to ${db}`))
    .catch((error) => console.log(`There are issues getting to the ${db} because of ` + error))