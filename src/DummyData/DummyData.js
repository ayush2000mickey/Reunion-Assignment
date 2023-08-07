import { faker } from "@faker-js/faker";

const dummyData = [];

const bhk = ["bhk1", "bhk2", "bhk3", "bhk4"];
const furnish = ["fully", "semi"];
const preferredTenants = ["family", "bachelor", "company"];
const location = ["delhi", "noida", "gurugram", "indore", "banglore"];

const getRandomSubsetArr = (arr) => {
  let sizeOfSubArr = Math.floor(Math.random() * arr.length) + 1;

  let mySet = new Set();

  for (let i = 1; i <= sizeOfSubArr; i++) {
    mySet.add(arr[Math.floor(Math.random() * arr.length)]);
  }

  return [...mySet];
};

export const getDummyData = () => {
  for (let i = 1; i <= 50; i++) {
    const dummyObj = {
      propertyImg: faker.image.city(400, 300, true),
      propertyName: faker.person.firstName() + " Apartments",
      bhk: getRandomSubsetArr(bhk),
      furnish: getRandomSubsetArr(furnish),
      preferredTenants: getRandomSubsetArr(preferredTenants),
      location: getRandomSubsetArr(location),
    };

    dummyData.push(dummyObj);
  }

  return dummyData;
};
