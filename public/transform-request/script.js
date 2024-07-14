const formUser = document.querySelector('[data-form-user]');

const transformRequest = (data, headers) => {
    headers.authorization = "Bearer Token";

    // data e um formData , não um objeto comum
    data.set('email', 'ahjhjasaj@adas');
    data.append('transformedRequest', true);

    return data;
}

const handleFindSubmit = (e) => {
    e.preventDefault();

    const data = getFormData(formUser);
    const url = apiUser();

    const options = {
        transformRequest: [...axios.defaults.transformRequest, transformRequest],
    }

    axios.post(url, data, options).then(printResponse);
}


formFind.addEventListener('submit', handleFindSubmit)