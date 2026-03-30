function confirmEdit(event) {
    event.preventDefault();
    document.getElementById("overlay").style.display = "flex";
    document.getElementById("successBox").style.display = "block";
}

function openDeletePopup() {
    document.getElementById("overlay").style.display = "flex";
    document.getElementById("confirmBox").style.display = "block";
    document.getElementById("successBox").style.display = "none";
}

function confirmDelete() {
    document.getElementById("confirmBox").style.display = "none";
    document.getElementById("successBox").style.display = "block";
}

function closePopup() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("confirmBox").style.display = "block";
    document.getElementById("successBox").style.display = "none";
}