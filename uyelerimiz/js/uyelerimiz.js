const personPics = [
  "Cardppl_pictures.png",
  "Cardppl_pictures-1.png",
  "Cardppl_pictures-2.png",
  "Cardppl_pictures-3.png",
  "Cardppl_pictures-4.png",
  "Cardppl_pictures-5.png",
  "Cardppl_pictures-6.png",
];

const names = [
  "Aaren",
  "Aarika",
  "Abagael",
  "Abagail",
  "Abbe",
  "Abbey",
  "Abbi",
  "Abbie",
  "Abby",
  "Abbye",
  "Abigael",
  "Abigail",
  "Abigale",
  "Abra",
  "Ada",
  "Adah",
  "Adaline",
  "Adan",
  "Adara",
  "Addi",
  "Addia",
  "Addie",
  "Addy",
  "Adel",
  "Adela",
  "Adelaida",
  "Adelaide",
  "Adele",
  "Adelheid",
  "Adelice",
  "Adelina",
  "Adelind",
  "Adeline",
  "Adella",
  "Adelle",
  "Adena",
  "Adey",
  "Adi",
  "Adiana",
  "Adina",
];

const surnames = [
  "Genni",
  "Gennie",
  "Gennifer",
  "Genny",
  "Genovera",
  "Genvieve",
  "George",
  "Georgeanna",
  "Georgeanne",
  "Georgena",
  "Georgeta",
  "Georgetta",
  "Georgette",
  "Georgia",
  "Georgiana",
  "Georgianna",
  "Georgianne",
  "Georgie",
  "Georgina",
  "Georgine",
  "Geralda",
  "Geraldine",
  "Gerda",
  "Gerhardine",
  "Geri",
  "Gerianna",
  "Gerianne",
  "Gerladina",
  "Germain",
  "Germaine",
  "Germana",
  "Gerri",
  "Gerrie",
  "Gerrilee",
  "Gerry",
  "Gert",
  "Gerta",
  "Gerti",
  "Gertie",
  "Gertrud",
  "Gertruda",
  "Gertrude",
  "Gertrudis",
];

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
];

const selectRandomPic = () => {
  const randIndex = Math.floor(Math.random() * personPics.length);
  return personPics[randIndex];
};

const selectRandomName = () => {
  const randNameIndex = Math.floor(Math.random() * names.length);
  const randSurnameIndex = Math.floor(Math.random() * surnames.length);
  return `${names[randNameIndex]} ${surnames[randSurnameIndex]}`;
};
const uyelerContainer = document.querySelector(".uyeler-container");

const createUyebox = (name, role) => {
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

const populateUyelerContainer = (elem) => {
  uyelerContainer.appendChild(elem);
  console.log("Successfully added member");
};



const pics = document.querySelectorAll(".pp-placeholder img");

for (let i = 0; i < 11; i++) {
  const role = roles[Math.floor(Math.random() * roles.length)];
  populateUyelerContainer(createUyebox(selectRandomName(), role));
}
