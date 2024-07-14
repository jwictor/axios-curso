const formFind = document.querySelector('[data-form-find]')

const getUniqueIds = (value) => {
    const ids = value.split(',')
        .map((id) => Number.parseInt(id, 10))
        .filter(Boolean);
    const uniqueIds = [... new Set(numbers)];

    return uniqueIds;

    
}

const handleFindSubmit = (e) => {
    e.preventDefault();

    const data = getFormData(formFind);
    const ids = getUniqueIds(data.get('id'));

    const promises = ids.map((id) =>  axios.get(apiuser(id)).catch((e)=> e));

    Promise.all(promises).then((responses) => {
        const combinedData = responses.map(({data})=> data);
        const combinedheaders = responses.map(({headers})=> headers);

        printResponse({status: 200, data: combinedData, headers: combinedheaders })
    })
    .catch(e => {
        console.log(e.message)
    })

    
}



formFind.addEventListener('submit', handleFindSubmit);