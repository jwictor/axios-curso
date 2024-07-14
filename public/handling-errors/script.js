const formFind = document.querySelector('[data-form-find]');

// const handleFindSubmit = (e) => {
//     e.preventDefault();

//     const data = getFormData(formFind);
//     const id = data.get('id');
//     const url = apiUser(id);

//     const options = {
//         validateStatus: (status) => {
//             // false significa invalido, catch (Promise.reject).
//             // true significa valido, then (Promise.resolve).
//             return status < 300;
//         },
//     };

//     axios.get(url, options).then(printResponse).catch((e) => {
//         console.log('Aconteceu algum erro');
//     })
// };

const handleFindSubmit = (e) => {
    e.preventDefault();

    const data = getFormData(formFind);
    const id = data.get('id');
    const url = apiUser(id);


    axios.get(url).then(printResponse).catch((error) => {
        if(error.response) {
            console.log('error.response.data', error.response.data);
            console.log('error.response.headers'.error.response.headers);
            console.log('error.response.status', error.response.status);
           // alert(`A resposta da requisição foi ${error.response.status}`);
        }

        if(error.request){
            console.log('error.request', error.response.request);
          
        }

        if(error.config) {
            console.log('error.config', error.response.request);
        }

        console.log('Error', error.message);
    })
};


formFind.addEventListener('submit', handleFindSubmit);