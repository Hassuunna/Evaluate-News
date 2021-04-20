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
            return res.json()
        })
        .then((concepts) => {
            for (var value of concepts) {
                console.log(value)
                var node = document.createElement("span"); // Create a <li> node
                var textnode = document.createTextNode(value); // Create a text node
                node.appendChild(textnode); // Append the text to <li>
                document.getElementById("results").appendChild(node); // Append <li> to <ul> with id="myList"
                document.getElementsByClassName('button')[0].disabled = false;

                document.getElementsByClassName('button')[0].value = 'Submit another URL'

                //document.getElementById('results').innerHTML += value;
            }
        })
}

module.exports = {
    analyze
}