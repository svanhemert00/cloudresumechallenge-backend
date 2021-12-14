function visitorCounter(){
    fetch("https://pkhvq883sf.execute-api.us-east-2.amazonaws.com/visitorCounter")
        .then(response => response.text())
        .then((body) => {
            document.getElementById("visitor-counter").innerHTML=body
        })       
}