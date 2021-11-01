let categories = [
    { id: 1, category: "Web Development", cssId: "web-dev" },
    { id: 2, category: "Security", cssId: "security" },
    { id: 3, category: "Design", cssId: "design" },
    { id: 4, category: "Mobile Development", cssId: "mobile-dev" },
    { id: 5, category: "Data Science", cssId: "data-science" },
    { id: 6, category: "Machine Learning", cssId: "machine-learning" },
]



initCoursesPage()

function initCoursesPage() {
    let myCategories = document.getElementById("my-categories");
    //Addin Categories to html page 
    for (const index in categories) {
        myCategories.innerHTML += `
            <div class="form-check">
                <input class="form-check-input shadow-none" type="radio" name="radio-for-categories" id="${categories[index].cssId}">
                <label class="form-check-label" for="${categories[index].cssId}">
                    ${categories[index].category}
                </label>
            </div>`
    }

}