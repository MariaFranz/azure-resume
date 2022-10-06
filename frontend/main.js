window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount
})

const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';
const functionApiURl = 'https://cloud-resume-maria.azurewebsites.net/api/GetResumeCounter?code=kqPg5OBNz4YtihMXGrEVZ1xphg_DnOPCTqTYyo9mMTSwAzFu8esuLQ=='

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiURl).then(response => {
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