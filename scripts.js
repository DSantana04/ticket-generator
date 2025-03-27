function geraErro(input, mensagem) {
    const inputField = input.parentElement;
    const small = inputField.querySelector('small');

    small.innerText = mensagem;
    inputField.className = 'input-field error';
}

function geraErroImagem(mensagem) {
    const formInfoSection = document.querySelector('.form_info_section');
    const small = formInfoSection.querySelector('small');

    small.innerText = mensagem;
    formInfoSection.className = 'form_info_section error';
}

function previewImage(event) {
    const preview = document.getElementById('image-preview');
    const uploadButton = document.getElementById('upload-button');
    const uploadText = document.getElementById('upload-text');
    const uploadIcon = document.getElementById('upload-icon');
    const previewImage = document.getElementById('preview-image');
    const changeButton = document.getElementById('change-button');
    const deleteButton = document.getElementById('delete-button');

    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewImage.src = e.target.result;
            preview.style.display = 'block';
    
            localStorage.setItem('image', e.target.result);

            if (uploadText.style.display !== 'none') {
                uploadText.style.display = 'none';
                uploadIcon.style.display = 'none';
                uploadButton.style.display = 'none';
            }
        }
        reader.readAsDataURL(file);
    }

    changeButton.onclick = function() {
        document.getElementById('image').click();
        // Hide upload text and icon when changing image
        uploadText.style.display = 'none';
        uploadIcon.style.display = 'none';
    }

    deleteButton.onclick = function() {
        document.getElementById('image').value = '';
        preview.style.display = 'none';
        // Show upload text and icon
        uploadText.style.display = 'flex';
        uploadIcon.style.display = 'flex';
    }
}

function generateTicket() {
    // Get input values
    const imageInput = document.getElementById('image');
    const nameInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const githubInput = document.getElementById('github');

    // Validate name
    if (nameInput.value == '') {
        geraErro(nameInput, 'Nome não pode estar em branco.');
        return;
    }

    // Validate image upload
    const file = imageInput.files[0];
    const validFormats = ['image/jpeg', 'image/png'];
    if (!validFormats.includes(file.type) || file.size > 500 * 1024 || file.size == 0) {
        geraErro(imageInput, 'Imagem inválida. Por favor, selecione uma imagem JPEG ou PNG de até 500KB.');
        return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value) || emailInput.value == '') {
        geraErro(emailInput, 'Email inválido.');
        return;
    }

    // Validate GitHub username
    if (!githubInput.value.startsWith('@') || githubInput.value == '') {
        geraErro(githubInput, 'Nome de usuário do GitHub deve começar com @.');
        return;
    }

    // Store data in local storage
    localStorage.setItem('userData', JSON.stringify({
        name: nameInput.value,
        email: emailInput.value,
        github: githubInput.value,
        image: file.name // Store the image name or handle it as needed
    }));

    // Redirect to ticket.html
    window.location.href = 'TicketPage/ticket.html';
}
