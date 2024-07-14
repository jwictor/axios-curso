const formFind = document.querySelector('[data-form-find]');

axios.defaults.headers.common ={
    Authorization: 'Bear Token',
    'X-API-KEY': 'xyz',
};

const handleFindSubmit = (e) => {
    e.preventDefault();

    const data = getFormData(formFind);
    const id = data.get('id');
    const url = apiUser(id);

    axios.get(url).then(printResponse);
};


formFind.addEventListener('submit', handleFindSubmit);