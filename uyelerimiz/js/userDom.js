import { USER_PER_PAGE, numberOfUsers } from "./mock_config.js";
import { roles } from "./mockup.js";
import { selectRandomPic, createRandomName } from "./utils.js";

const DOMCache = {
  membersContainer: document.querySelector(".uyeler-container"),
};

// An element in the grid
const createMemberGridItem = (name, role) => {
  const uyeboxDiv = document.createElement("div");
  uyeboxDiv.classList.add("uyebox");

  const memberPP = document.createElement("div");
  memberPP.classList.add("member-profile-picture");
  const ppContainer = document.createElement("div");
  ppContainer.classList.add("pp-placeholder");
  const profilePicture = document.createElement("img");
  profilePicture.src = `./assets/people_pics/${selectRandomPic()}`;

  memberPP.appendChild(ppContainer);
  ppContainer.appendChild(profilePicture);
  uyeboxDiv.appendChild(memberPP);

  const detailsContainer = document.createElement("div");
  detailsContainer.classList.add("member-details");
  const detailsPlaceholder = document.createElement("div");
  detailsPlaceholder.classList.add("details-placeholder");
  detailsContainer.appendChild(detailsPlaceholder);

  const memberName = document.createElement("div");
  memberName.classList.add("member-name");
  memberName.innerText = name;
  detailsPlaceholder.appendChild(memberName);

  const memberRole = document.createElement("div");
  memberRole.classList.add("member-role");
  memberRole.innerText = role;
  detailsPlaceholder.appendChild(memberRole);

  const memberConnect = document.createElement("div");
  memberConnect.classList.add("member-connect");
  memberConnect.innerHTML = `
      <div class="member-social">
                                  <div><a href="https://www.google.com"><img src="./assets/Vectoruyeler_git.png" alt="" srcset=""></a></div>
                                  <div><img src="./assets/uye_divider.png" alt=""></div>
                                  <div><a href="https://www.google.com"><img src="./assets/uye_linkedin.png" alt="" srcset=""></a></div>
                              </div>
                              <div class="member-cv">
                                  <div><img id="cv-modal" src="./assets/uye_details_icon.png" alt=""></div>
                                  <div><a href="https://www.google.com"><img src="./assets/uye_cv_dl.png" alt=""></a></div>
                              </div>
      `;

  detailsPlaceholder.appendChild(memberConnect);

  uyeboxDiv.appendChild(detailsContainer);

  return uyeboxDiv;
};

const createMockUserData = () => {
  let tempMemberArr = [];
  for (let i = 0; i < numberOfUsers; i++) {
      const role = roles[Math.floor(Math.random() * roles.length)];
      tempMemberArr.push(createMemberGridItem(`${i}`+ createRandomName(), role))
    }
  
  return tempMemberArr;
}

const userGridItems = createMockUserData();



// Fills the grid with boxes
export const populateMemberGridContainer = (elem) => {
  if (!elem) return;
  DOMCache.membersContainer.appendChild(elem);
};

export const fillGrid = (currPage) => {
  let currentPage = currPage;

  for (
    let memberIndex = (currPage - 1) * USER_PER_PAGE;
    memberIndex < USER_PER_PAGE * (currPage - 1) + 12;
    memberIndex++
  ) {
    populateMemberGridContainer(userGridItems[memberIndex]);
    currentPage = Math.floor(memberIndex / 12) + 1;
  }
};

export const clearGrid = () => {
  DOMCache.membersContainer.innerHTML = "";
};
