

imagem.addEventListener('change', () => {
    if (imagem.files && imagem.files[0]) {
        const file = imagem.files[0];
        const validImageTypes = ['image/png', 'image/jpeg'];

        if (validImageTypes.includes(file.type)) {
            const reader = new FileReader();

            reader.onload = (e) => {
                uploadIcon.src = e.target.result; 
                uploadIcon.alt = 'Imagem carregada'; 
                setSuccessForImage();
            };

            reader.readAsDataURL(file); 
        } else {
            console.log('Formato de imagem inválido. Apenas PNG ou JPEG são permitidos.');
        }
    }
});

function checkInputs() {
    console.log("Fui chamado");

    const emailValue = email.value.trim();
    const imagemFile = imagem.files[0];
    const nameValue = name.value.trim();    
    const gitHubValue = gitHub.value.trim();

    let emailValid = false;
    let imagemValid = false;
    let nameValid = false;
    let gitHubValid = false;

    if (emailValue === "") {
        setErrorFor(email, 'O email é obrigatório');
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, 'Insira um email válido');
    } else {
        emailValid = true;
    }

    if (nameValue === "") {
        setErrorFor(name, 'O nome é obrigatório');
    } else {
        nameValid = true;
    }

    if (gitHubValue === "") {
        setErrorFor(gitHub, 'O usuário é obrigatório');
    } else{
        gitHubValid = true;
    }

    if (imagem.files.length === 0) {
        setErrorForImage(imagem, 'É obrigatório carregar uma foto');
    } else {
        const imagemFile = imagem.files[0];
        const validImageTypes = ['image/png', 'image/jpeg'];
        if (!validImageTypes.includes(imagemFile.type)) {
            setErrorForImage(imagem, 'A imagem deve ser PNG ou JPEG');
        } else if (imagemFile.size > 500 * 1024) {
            setErrorForImage(imagem, 'A imagem deve ser menor que 500KB');
        } else {
            console.log(`Imagem válida: ${imagemFile.size / 1024} KB`);
            imagemValid = true;
        }
    }
};

function geracaoTicket(){
    
}