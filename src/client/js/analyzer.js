function analyze(data) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch('http://localhost:8081/analyze', options)
        .then(res => {
            document.getElementById('results').innerHTML = '';
            console.log('res is here', res)
            return res.json()
        })
        .then((concepts) => {
            console.log(concepts)
            for (var value of concepts) {
                console.log(value)
                var node = document.createElement("span");
                var textnode = document.createTextNode(value);
                node.appendChild(textnode);
                document.getElementById("results").appendChild(node);
                document.getElementsByClassName('button')[0].disabled = false;
                document.getElementsByClassName('button')[0].value = 'Submit another URL'
            }
        }).catch((error) => {
            console.log('error in Fetch', error);
            document.getElementsByClassName('button')[0].disabled = false;
        })
}

module.exports = {
    analyze
}