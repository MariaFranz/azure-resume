window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount
})

const localfunctionApi = 'http://localhost:7071/api/CreateResumeCounter';
const functionApiURL = 'https://cloud-resume-maria.azurewebsites.net/api/CreateResumeCounter?code=xjOzr6R0LAhk8VvvHifrAHbu4umUKTxfL6u3ukWo8LZPAzFuNuXiTQ==';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiURL).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API.")
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function (error) {
        console.log(error);  
    })
    return count; 
}