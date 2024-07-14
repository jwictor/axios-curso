const formFind = document.querySelector('[data-form-find]');

const controller = new AbortController();

const handleFindSubmit = (e) => {
    e.preventDefault();

    const data = getFormData(formFind);
    const id = data.get('id');
    const url = apiUser(id);

    const options = {
        signal: controller.signal
    };

    axios.get(url, options).then(printResponse).then(populate);

    setTimeout(() => {
        controller.abort();
}, 100);

}



formFind.addEventListener('submit', handleFindSubmit);