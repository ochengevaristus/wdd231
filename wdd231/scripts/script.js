
document.getElementById('currentyear').textContent = new Date().getFullYear();


document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;


const courses = [
    { code: 'CSE 110', name: 'Intro to Computer Science', completed: false },
    { code: 'WDD 130', name: 'Web Fundamentals', completed: false },
    { code: 'WDD 230', name: 'Web Development', completed: false },
    { code: 'CSE 210', name: 'Programming with Classes', completed: false },
    { code: 'WDD 231', name: 'Course Home Page', completed: false }
];


let totalCredits = 0;
const creditsPerCourse = 3;


function renderCourses() {
    const courseList = document.getElementById('course-list');
    const courseContainer = document.getElementById('course-container');


    courseList.innerHTML = '';
    courseContainer.innerHTML = '';

    courses.forEach((course, index) => {

        const courseItem = document.createElement('li');
        courseItem.textContent = `${course.name} (${course.code})`;
        courseList.appendChild(courseItem);

    
        const courseBox = document.createElement('div');
        courseBox.classList.add('course-box');
        courseBox.textContent = `${course.code}`;
        courseBox.classList.add(course.completed ? 'completed' : 'incomplete');
        courseBox.addEventListener('click', () => toggleCompletion(index));
        courseContainer.appendChild(courseBox);
    });


    document.getElementById('totalCredits').textContent = totalCredits;
}

function toggleCompletion(index) {
    courses[index].completed = !courses[index].completed;
    totalCredits = courses.filter(course => course.completed).length * creditsPerCourse;
    renderCourses();
}

renderCourses();
