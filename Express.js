const express = require('express');
const app = express();


app.get('/numbers', (req, res) => {
    const urls = req.query.url;
    curl http://localhost:3000/numbers?url=http://20.244.56.144/numbers/primes
  
  if (urls) {
    
    const urlArray = Array.isArray(urls) ? urls : [urls];
    
    
    res.json({ urls: urlArray });
  } else {
    
    res.status(400).json({ error: 'Missing "url" parameter' });
  }
});


app.listen(3000, () => {
  console.log('number-management-service is running on port 3000');
});