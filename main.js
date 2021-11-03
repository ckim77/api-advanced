const getResidentsBtn = document.getElementById('get-residents');

const getResidentsFunction = () => {
    axios.get("https://swapi.dev/api/planets/2")
    .then((res) => {
        for (i = 0; i < res.data.residents.length; i++) {
            axios.get(res.data.residents[i])
            .then ((response) => {
                console.log(response.data);
                let header = document.createElement('h2');
                header.textContent = response.data.name;
                document.body.appendChild(header);
            })
        }
    })
}

getResidentsBtn.addEventListener('click', getResidentsFunction);