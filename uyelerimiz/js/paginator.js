import { clearGrid, fillGrid } from "./UserDom.js";
import { numberOfPages } from "./mock_config.js";

const DOMCache = {
  membersContainer: document.querySelector(".uyeler-container"),
};

export let currPage = 1;

export const createPaginatorContainer = () => {
  const paginatorContainer = document.createElement("div");
  paginatorContainer.classList.add("paginator-container");
  return paginatorContainer;
};

const updateActivePageNumber = () => {
  //let activePage = document.querySelector(".active-page");
  //activePage.classList.toggle("active-page"); // remove active-page class
  //activePage = document.querySelector(`.page-${currPage}`);
  //activePage.classList.toggle("active-page"); // add active-page class to whatever is current page number
};

// const outerWrapper = document.createElement("div"); // for extracting inner html

const uyelerimizPagesContainer = document.createElement("div");
uyelerimizPagesContainer.classList.add("uyelerimiz-pages");


const createPaginatorNumbers = () => {
  console.log("geldim", uyelerimizPagesContainer.firstChild)

  let startingPageNumber = currPage-2;
  let lastNumberPage = numberOfPages <= 5 ? numberOfPages : numberOfPages > 5 ? Number(currPage)+2 : currPage;
 console.log(lastNumberPage)

  uyelerimizPagesContainer.innerHTML = "";
  for (let i = startingPageNumber <= 0? 1 : startingPageNumber; i <= (lastNumberPage > numberOfPages ? numberOfPages : lastNumberPage); i++) {
    const pageLink = document.createElement("div");
    pageLink.innerText = i;
    pageLink.classList.add(`page-${pageLink.innerText}`);
    pageLink.classList.add(`${pageLink.innerText}`);
    console.log(i === currPage);
    uyelerimizPagesContainer.appendChild(pageLink);
  }



  uyelerimizPagesContainer.childNodes.forEach(c => {
    if (c.classList[1] == currPage) c.classList.add('active-page')
    else  c.classList.remove('active-page')
    
  })


  const paginator = document.createElement("div");
  paginator.classList.add("paginator");

  // console.log(outerWrapper.innerHTML)
  // paginator.innerHTML = `
  //   <div class="uyelerimiz-left-arrow"><</div> 
  //       ${outerWrapper.innerHTML}
  //     <div class="uyelerimiz-right-arrow">></div>`;
  const la = document.createElement('div');
  la.innerText = "<"
  la.classList.add("uyelerimiz-left-arrow")

  const ra = document.createElement('div');
  ra.innerText = ">"
  ra.classList.add("uyelerimiz-right-arrow")

  ra.addEventListener("click", () => {
    if (currPage == numberOfPages) return;
    ++currPage;
    updateActivePageNumber();
    const paginator = createPaginatorNumbers();
    paginatorContainer.innerHTML = "";
    paginatorContainer.appendChild(paginator);
    clearGrid();
    fillGrid(currPage);
  
  });
  
  
  
  la.addEventListener("click", () => {
    if (currPage === 1) return;
    --currPage;
    updateActivePageNumber();
    const paginator = createPaginatorNumbers();
    paginatorContainer.innerHTML = "";
    paginatorContainer.appendChild(paginator);
    clearGrid();
    fillGrid(currPage);
  });
  
  
  console.log("before appending", uyelerimizPagesContainer)
  
  paginator.appendChild(la)
  console.log("geldim")
  paginator.appendChild(uyelerimizPagesContainer)
  console.log("gittim")
  paginator.appendChild(ra)


  uyelerimizPagesContainer.childNodes.forEach((p) => {
    p.addEventListener("click", () => {
      const startingIndex = p.classList[1];
      currPage = startingIndex;
      updateActivePageNumber();
      const paginator = createPaginatorNumbers();
      paginatorContainer.innerHTML = "";
      paginatorContainer.appendChild(paginator);
      clearGrid();
      fillGrid(currPage);
      
  
    });
  });




  



  return paginator;
};

const mainContainer = document.querySelector(".main-container");

const paginatorContainer = createPaginatorContainer();
const paginator = createPaginatorNumbers();
paginatorContainer.appendChild(paginator);
mainContainer.appendChild(paginatorContainer);



const pages = document.querySelector(".uyelerimiz-pages");
pages.childNodes.forEach((p) => {
  p.addEventListener("click", () => {
    const startingIndex = p.classList[1];
    currPage = startingIndex;
    updateActivePageNumber();
    const paginator = createPaginatorNumbers();
    paginatorContainer.innerHTML = "";
    paginatorContainer.appendChild(paginator);
    clearGrid();
    fillGrid(currPage);
    

  });
});

// const rightArr = document.querySelector(".uyelerimiz-right-arrow");

// rightArr.addEventListener("click", () => {
//   if (currPage == numberOfPages) return;
//   ++currPage;
//   updateActivePageNumber();
//   const paginator = createPaginatorNumbers();
//   paginatorContainer.innerHTML = "";
//   paginatorContainer.appendChild(paginator);
//   clearGrid();
//   fillGrid(currPage);

// });

// const leftArr = document.querySelector(".uyelerimiz-left-arrow");

// leftArr.addEventListener("click", () => {
//   if (currPage === 1) return;
//   --currPage;
//   updateActivePageNumber();
//   const paginator = createPaginatorNumbers();
//   paginatorContainer.innerHTML = "";
//   paginatorContainer.appendChild(paginator);
//   clearGrid();
//   fillGrid(currPage);
// });
