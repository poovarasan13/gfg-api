const axios = require("axios");

const profileData = async (userName) => {
  try {
    const profileData = await axios.get(
      `https://authapi.geeksforgeeks.org/api-get/user-profile-info/?handle=${userName}`
    );
    return profileData.data;
  } catch (error) {
    console.log("error while fetch data");
  }
};

profileData("meganathansagnvn").then((info) => {
  console.log("Profile Information:", info.data);
});