import { numberOfUsers } from "./mock_config.js";
import { roles, names, surnames, personPics } from "./mockup.js";


export const createRandomName = () => {
    const randNameIndex = Math.floor(Math.random() * names.length);
    const randSurnameIndex = Math.floor(Math.random() * surnames.length);
    return `${names[randNameIndex]} ${surnames[randSurnameIndex]}`;
  };

export const selectRandomPic = () => {
    const randIndex = Math.floor(Math.random() * personPics.length);
    return personPics[randIndex];
  };


