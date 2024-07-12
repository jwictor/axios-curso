const formFind = codument.querySelector('[data-form-find]');
const formUser = document.querySelector('[data-form-user]');
const avatarInput = document.querySelector('[data-avatar]');
const uploadButton = document.querySelector('[data-upload]');
const progressBar = document.querySelector('[data-progress');

const handleFindSubmit = (e) => {
    e.preventDefault();
    const data = getFormData(formFind);
    const id = data.get('id');
    const url = apiuser(id);

    axios.get(url).then(printResponse).then(populate);
}


formFind.addEventListener('submit', handleFindSubmit);
formUser.addEventListener('submit', handleUserSubmit);

