const StudentSection = document.getElementById("facultydata");
const container = document.getElementById("ak");
const loader = document.createElement("div");
loader.className = "loader"; // Assuming you have some CSS for this loader
loader.innerHTML = `<!-- Skeleton Loader for Student Sections -->
 <div id="loader" class="d-flex justify-content-center align-items-center" style="height: 80vh;">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

`;

// Show loader
const showLoader = () => container.appendChild(loader);
const hideLoader = () => container.removeChild(loader);

// Fetch Data
const getData = async () => {
  try {
    showLoader(); // Show loader while fetching data
    const response = await fetch("https://nirbhay-singh-cs-department-git-main-abhay395s-projects.vercel.app/student/getAll?course=BCA&examYear=2023");
    const data = await response.json();
    if (!data || data.length === 0) {
      StudentSection.innerHTML = `
    <div class="col-12 text-center" style='height:70vh'>
      <p class="text-muted">No Student data available at the moment.</p>
    </div>`;
      return null;
    }
    return data;
  } catch (error) {
    console.error(error);
    // Display error message to the user
    StudentSection.innerHTML = "<p>Failed to load student data. Please try again later.</p>";
  } finally {
    hideLoader(); // Hide loader once data is fetched
  }
};

// Populate student data into UI
const setStudentUI = async () => {
  try {
    const students = (await getData()) || [];

    students.forEach((item) => {
      const studentWithYear = document.createElement("div");
      studentWithYear.className = "course-info";
      studentWithYear.innerHTML = `
        <div class="course-info" style="font-size: 1.25rem">
          <span>Bachelor of Computer Applications (BCA)</span>
          <span>${item.examYear-1}-${item.examYear}</span>
        </div>
        ${createYearSection('Student1stYear', '1st year')}
        ${createYearSection('Student2ndYear', '2nd year')}
        ${createYearSection('Student3rdYear', '3rd year')}
      `;
      container.appendChild(studentWithYear);

      const student1stYearSection = studentWithYear.querySelector("#Student1stYear");
      const student2ndYearSection = studentWithYear.querySelector("#Student2ndYear");
      const student3rdYearSection = studentWithYear.querySelector("#Student3rdYear");

      populateStudents(item["1stYearStudents"], student1stYearSection);
      populateStudents(item["2ndYearStudents"], student2ndYearSection);
      populateStudents(item["3rdYearStudents"], student3rdYearSection);
    });
  } catch (error) {
    console.error(error);
  }
};

// Helper function to create student year sections
const createYearSection = (id, yearTitle) => `
  <div class="row g-4" id="${id}" style="margin-bottom: 20px">
    <h1>${yearTitle}</h1>
  </div>
`;

// Helper function to populate students
const populateStudents = (students, section) => {
  students.forEach((student,index) => {
    const studentDiv = document.createElement("div");
    studentDiv.className = "col-md-4";
    studentDiv.innerHTML = `
      <div class="card mb-4">
        <div class="card-image">
          <img class="img-fluid" src="${student.image}?height=300&width=300" alt="${student.name}">
          ${student.isTopper ? `<span class="topper-badge">Topper</span>` : ""}
        </div>
        <div class="card-content p-3">
          <h2 class="student-name">${student.name}</h2>
          <div class="student-stats d-flex justify-content-between">
            <div class="stat">
              <div class="stat-label">${student.cgpa >10 ? 'Percentage' : 'AGPA' }</div>
              <div class="stat-value">${student.cgpa}</div>
            </div>
            <div class="stat">
              <div class="stat-label">Rank</div>
              <div class="stat-value">${index+1}</div>
            </div>
          </div>
        </div>
      </div>
    `;
    section.appendChild(studentDiv);
  });
};

// Initialize the UI
setStudentUI();

