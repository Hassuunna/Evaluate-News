const {
    analyze
} = require('./analyzer')

// regex is used from https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
function validateURL(str) {
    str = str.trim()
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}

function handleSubmit(event) {
    event.preventDefault()

    if (document.getElementById('name').value) {

        document.getElementById("results").innerHTML = "";

        // check what text was put into the form field
        let articleURL = document.getElementById('name').value
        let language = document.getElementById('languages').value

        document.getElementById('name').value = ''
        document.getElementsByClassName('button')[0].disabled = true;

        if (validateURL(articleURL)) {
            const data = {
                articleURL,
                language
            }
            analyze(data);
        }
    } else {
        document.getElementById("results").innerHTML = "Empty Fields, Please Check your input!";
    }
}

module.exports = {
    handleSubmit,
    validateURL
}