const fromFind = document.querySelector('[data-form-find');

const handleFindSubmit = (e) => {
    e.preventDefault();

    const data = getFormData(fromFind);
    const id = data.get('id');
    const url = apiUser(id);

    axios.head(url).then(printResponse);


}

fromFind.addEventListener('submit', handleFindSubmit);