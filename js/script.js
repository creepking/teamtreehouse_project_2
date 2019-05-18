/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// creating global variables to be accessed throughout the document

const studentList = document.getElementsByClassName('student-item cf');
const itemsPerPage = 10;

/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show. The loop iterates through the
   entire student list, then hides the ones not in the 1st ten because of the
   page parameter being set to the number 1.

***/
const showPage = (list, page) => {
  let startIndex = (page * itemsPerPage) - itemsPerPage;
  let endIndex = (page * itemsPerPage) - 1;
  for (let i = 0; i < studentList.length; i++) {
    if (i >= startIndex && i <= endIndex) {
      studentList[i].style.display = "block";
    } else {
      studentList[i].style.display = "none";
    }
  }
};
showPage(studentList, 1);

/***
   The appendPageLinks function dynamically creates and appends the pagination
   buttons based on the number of pages. The number of pages was determined by dividing the
   total number of students by 10 per page.
***/
const appendPageLinks = (list) => {
  var numPages = Math.ceil(studentList.length / itemsPerPage);
  var pageChild = document.createElement('div');
  pageChild.className += 'pagination';
  pageDiv = document.querySelector('.page');
  pageDiv.appendChild(pageChild);
  var theUl = document.createElement('ul');
  theUl.className += "pagination";

  // This for loop iterates through the newly created div and adds 'li' and
  // 'a' tags which will give them functionality and styling from the CSS sheet. The
  // 'i' variable is applied to the link which will associate it with the page being shown and
 // requested.
  for (let i = 1; i <= numPages; i++) {
    var pageLi = document.createElement('li');
    var pageA = document.createElement('a')
    pageA.textContent = i;
    pageA.setAttribute('href', '#');
    pageDiv.appendChild(pageLi);
    pageLi.appendChild(pageA);
    pageChild.appendChild(pageLi);

    // This section adds an event listener to each a tag and shows the page that
    // corresponds to the link selected. The correct page is shown because the showPage
    // function calculates the correct group of students based on groups of 10. 
    const a = document.querySelectorAll("a");
    a[0].className = "active";
    for (let i = 0; i < a.length; i++) {
      a[i].addEventListener("click", () => {
        currentPage = event.target.textContent;
        showPage(list, currentPage);

        for (let i = 0; i < a.length; i++) {
          a[i].classList.remove("active");
        }
        event.target.classList.add("active");
      });
    }
  };
}

appendPageLinks(studentList);
