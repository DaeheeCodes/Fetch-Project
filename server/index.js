const path = require('path');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;





// Handle /api requests to /api route
app.get("/api", (req, res) => { 
    res.json({ message: "Hello Fetch Rewards!" });
  });
  
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));
  
  



app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });


