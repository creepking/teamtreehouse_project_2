/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing



// creating global variables to be accessed throughout the document

const studentList = document.getElementsByClassName('student-item cf');
const itemsPerPage = 10;

/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

***/
const showPage = (list, page) => {
  let startIndex = (page * itemsPerPage) - itemsPerPage;
  let endIndex = page * itemsPerPage;
    for (let i = 0; i <= studentList.length-1; i++) {
      if (i >= startIndex && i <= endIndex) {
        studentList[i].style.display = "block";
      } else {
        studentList[i].style.display = "none";
    }
  }
};
showPage(studentList,1);

/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/
const appendPageLinks = (list) => {
  var numPages = studentList.length/itemsPerPage;
  var pageChild = document.createElement('div');
  pageChild.classList.add('pagination');
  pageDiv = document.querySelector('.page');
  pageDiv.appendChild(pageChild);
  var theUl = document.createElement('ul');
  pageChild.appendChild(theUl);
    for (let i =1; i<=numPages; i++) {
      var pageLi = document.createElement('li');
      var pageA = document.createElement('a').textContent = i;
      pageA.setAttribute('href','#');
      pageDiv.appendChild(pageLi);
      pageLi.appendChild(pageA);
    
      // adding an event listener to each a tag
      const a = document.querySelectorAll("a");
      a[0].classList.add("active");
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
  