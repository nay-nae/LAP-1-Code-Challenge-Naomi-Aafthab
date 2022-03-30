const express = require ('express');
const app = express();
const cors = require('cors')

const port = 5001;

const searchResults = [
    {id:1, title:'Wikipedia' , Summary: "Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikimedia Foundation.", Link: "https://en.wikipedia.org/wiki/Main_Page"},
    {id:2, title:'YouTube' , Summary: "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.", Link: "https://www.youtube.com/"},
    {id:3, title:'FaceBook' , Summary: "Create an account or log in to Facebook. Connect with friends, family and other people you know. Share photos and videos, send messages and get updates.", Link: "https://www.facebook.com/"},
    {id:4, title:'Twitter' , Summary: "From breaking news and entertainment to sports and politics, get the full story with all the live commentary.", Link: "https://twitter.com/?lang=en"},
    {id:5, title:'Instagram' , Summary: "Create an account or log in to Instagram - A simple, fun & creative way to capture, edit & share photos, videos & messages with friends & family.", Link: "https://www.instagram.com/"},
    {id:6, title:'ebay' , Summary: "Buy & sell electronics, cars, clothes, collectibles & more on eBay, the world's online marketplace. Top brands, low prices & free shipping on many items.", Link: "https://www.ebay.co.uk/"},
    {id:7, title:'Amazon' , Summary: "Sign up to Amazon Prime for unlimited free delivery. Low prices at Amazon on digital cameras, MP3, sports, books, music, DVDs, video games, home & garden", Link: "https://www.amazon.co.uk/"},
    {id:8, title:'Uber' , Summary: "Get a ride in minutes. Or become a driver and earn money on your schedule. Uber is finding you better ways to move, work, and succeed in the UK.", Link: "https://www.uber.com/gb/en/"},
    {id:9, title:'JustEats' , Summary: "Order from local restaurants and takeaways online with Just Eat, the UK's leader in food delivery with over 30000+ restaurant menus offering Pizza, Chinese, .", Link: "https://www.just-eat.co.uk/"},
    {id:10, title:'Github' , Summary: "GitHub is where over 73 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories,", Link: "https://github.com/"},
]
JSON.stringify(searchResults);

function getRandomSearch() {
    const randomNum = Math.floor(Math.random() * searchResults.length)
    return searchResults[randomNum];
  } 

app.use(cors());


const message = [{text: "Welcome to Google"}];
JSON.stringify(message);


app.get('/', (req,res)=>{
    res.send(message);
});


app.post('/', (req,res)=>{
    res.status(404).send("This Page is't availible");
  });
  
  // To do: Create a route for retrieving a random quote
  app.get('/randomSearch', (req,res)=>{
    res.send(getRandomSearch());
  });



app.get('/searchResults', (req,res)=>{
    res.send(searchResults);
});
app.get('/searchResults/:id', (req, res) => {
    if (req.params.id > 10 || req.params.id <= 0) {
      throw Error("choose a number between 1 and 15");
    } 
    try { const resultsId = req.params.id -1;
      const selectedResult = searchResults[resultsId];
      res.send(selectedResult);
  
    } catch(error) {
      console.error(error);

    } finally {
      console.log('result was attempted retrieve');
    }
});

module.exports = app;
