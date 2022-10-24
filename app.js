const express = require('express');
const ownerRouter = require('./routes/ownerRoutes');
const petRouter = require('./routes/petRoutes');
const app = express();
const port = 3000; 

app.use(express.json());


/// owner routes
app.use('/owners', ownerRouter);
/// pet routes
app.use('/pets', petRouter);

app.listen(port, () => {
    console.log(`listening at port: ${port}`)
})




