function showInstructorCourses() {
    const myCourses = document.getElementById("instructor-courses-id");
    const myBio = document.getElementById("instructor-biography-id");

    myCourses.style.display = "block";
    myBio.style.display = "none";
}

function showInstructorBio() {
    const myCourses = document.getElementById("instructor-courses-id");
    const myBio = document.getElementById("instructor-biography-id");

    myCourses.style.display = "none";
    myBio.style.display = "block";
}