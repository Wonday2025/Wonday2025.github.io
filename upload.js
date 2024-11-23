document.getElementById('uploadForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Empêche le rechargement de la page

    const fileInput = document.getElementById('fileInput');
    const status = document.getElementById('status');

    // Vérifie si un fichier est sélectionné
    if (fileInput.files.length === 0) {
        status.textContent = "Veuillez choisir un fichier.";
        return;
    }

    // Crée un objet FormData et y ajoute le fichier
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    try {
        // Envoie le fichier avec Fetch API
        const response = await fetch('upload.php', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const result = await response.text();
            status.textContent = "Fichier téléchargé avec succès : " + result;
        } else {
            status.textContent = "Erreur lors du téléchargement du fichier.";
        }
    } catch (error) {
        status.textContent = "Une erreur est survenue : " + error.message;
    }
});