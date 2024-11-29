
/* Scripts pour ajouter et supprimer dynamiquement des lignes de produits dans le tableau et gérer la soumission du formulaire. */

function addRow() {
    const table = document.getElementById('productTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.innerHTML = '<input type="text" name="reference[]" required>';
    cell2.innerHTML = '<input type="number" name="quantity[]" required>';
    cell3.innerHTML = '<input type="text" name="remarks[]">';
    cell4.innerHTML = '<button type="button" onclick="removeRow(this)">Supprimer</button>';
}

function removeRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}



document.getElementById('reclamationForm').onsubmit = function(event) {
    event.preventDefault();
    alert('Formulaire envoyé avec succès !');
};






document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[name="reclamationType"]');
    const additionalFieldsSection = document.getElementById('additionalFieldsSection');
    const lotNumber = document.getElementById('lotNumber');
    const approNumber = document.getElementById('approNumber');
    const serialNumber = document.getElementById('serialNumber');
    const finalInvoice = document.getElementById('finalInvoice');

    
    //vérification de la raison de  la demande sav , si déf/qual ou/et pb de livraison ouvrir nouv form
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.value === 'defective' || this.value === 'unboxingIssue') {
                if (this.checked) {
                    additionalFieldsSection.style.display = 'block';
                    lotNumber.required = true;
                    approNumber.required = true;
                    //serialNumber.required = true;
                    finalInvoice.required = true;
                } else {
                    let anyChecked = Array.prototype.slice.call(checkboxes).some(cb => 
                        (cb.value === 'defective' || cb.value === 'unboxingIssue') && cb.checked
                    );
                    if (!anyChecked) {
                        additionalFieldsSection.style.display = 'none';
                        lotNumber.required = false;
                        approNumber.required = false;
                        //serialNumber.required = false;
                        finalInvoice.required = false;
                    }
                }
            }
        });
    });

    /* vérifie que toutes les cases du form sont remplies */

     document.getElementById('reclamationForm').onsubmit = function(event) {
        let atLeastOneChecked = Array.prototype.slice.call(checkboxes).some(x => x.checked);
        if (!atLeastOneChecked) {
            alert('Veuillez cocher au moins une case de type de réclamation.');
            event.preventDefault();
        } 
        else {
            if ((document.querySelector('input[value="defective"]').checked || document.querySelector('input[value="unboxingIssue"]').checked) &&
                (!lotNumber.value || !approNumber.value || /* !serialNumber.value || */ !finalInvoice.value)) {
                alert('Veuillez remplir tous les champs supplémentaires requis.');
                event.preventDefault();
            } 
            
            else {
                alert('Formulaire soumis avec succès !');
            }
        }
    };
}); 


    document.addEventListener("input", function (event) {
        if (event.target.tagName === "TEXTAREA" || event.target.tagName === "INPUT") {
            const element = event.target;
            element.style.width = "auto"; // Réinitialise la largeur
            element.style.height = "auto"; // Réinitialise la hauteur
            element.style.width = (element.scrollWidth + 10) + "px"; // Ajuste selon le contenu
            element.style.height = (element.scrollHeight + 10) + "px"; // Ajuste selon le contenu
        }
    });

    
 /*    document.addEventListener("input", function (event) {
        if (event.target.tagName === "TEXTAREA") {
            const element = event.target;
            element.style.height = "auto"; // Réinitialiser la hauteur
            element.style.height = (element.scrollHeight) + "px"; // Ajuster à la hauteur du contenu
        }
    }); */
   
/*    const countryCodeSelect = document.getElementById("country-code");
    const phoneNumberInput = document.getElementById("phone-number");
  
    countryCodeSelect.addEventListener("change", () => {
      phoneNumberInput.placeholder = countryCodeSelect.value + " XXXXXXX";
    });
 */
 console.log(test);
