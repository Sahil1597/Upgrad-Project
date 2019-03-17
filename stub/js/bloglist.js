var deleteModal = document.getElementById('delete-modal');

deleteModal.style.display = 'none';

function showDeleteModal() {
    deleteModal.style.display = 'flex';
}
function hideDeleteModal() {
    deleteModal.style.display = 'none';
}

deleteModal.onclick = function(event) {
    console.log(event);
    if(event.target == deleteModal) {
        hideDeleteModal();
    }
}