const express = require('express')
const cors = require('cors')
const request = require('request');
const dotenv = require('dotenv')

dotenv.config();

const app = express()

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

//Handle post data requests (add data)
app.post("/analyze", (req, res) => {

    var options = {
        'method': 'POST',
        'url': `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.APIkey}&url=${req.body.articleURL}&lang=${req.body.language}`,
        'headers': {}
    };

    request(options, function (error, response) {
        if (error) {
            console.log('Error in API', error);
            res.sendStatus(404)
        }
        let result = JSON.parse(response.body);
        result = [
            result.subjectivity, result.confidence, result.agreement, result.irony, result.score_tag
        ];
        res.send(result)
    });
})

// designates what port the app will listen to for incoming requests
app.listen(process.env.PORT || 8081, function () {
    console.log(`Example app listening on port ${process.env.PORT || 8081}`)
})