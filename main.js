const getResidentsBtn = document.getElementById('get-residents');

const getResidentsFunction = () => {
    axios.get("https://swapi.dev/api/planets/2")
    .then((res) => {
        console.log(res.data);
    })
}

getResidentsBtn.addEventListener('click', getResidentsFunction);