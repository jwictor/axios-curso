const formUser = document.querySelector('[data-form-user');

const handleFormUser = (e) => {
    e.preventDefault();

    const data = getFormData(formUser);

    console.log(Object.fromEntries(data));

    const url = apiUser();

    axios.post(url, data).then(printResponse);

};

// const handleFormUser = (e) => {
//     e.preventDefault();

//     const data = getFormData(formUser);
//     console.log(Object.fromEntries(data));

//     const url = apiUser();

//     const options = {
//         method: 'POST',
//         url: url,
//         data: data,
//     };

//     axios(options).then(printResponse);

// };
formUser.addEventListener('submit', handleFormUser);

