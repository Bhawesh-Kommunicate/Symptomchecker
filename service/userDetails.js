require("dotenv").config();
var axios = require("axios");
const data = async (userId) => {
  var data = JSON.stringify({
    userIdList: [`${userId}`],
  });

  var config = {
    method: "post",
    url: "https://services.kommunicate.io/rest/ws/user/v2/detail",
    headers: {
      "Api-Key": `${process.env.Kommunicat_Key}`,
      "Content-Type": "application/json",
      Cookie: "JSESSIONID=7C632FD5715F1B04A40AC01CF693AABC",
    },
    data: data,
  };

  response = await axios(config)
//   console.log(response.data.response[0].metadata)
  var obj = response.data.response[0].metadata

  return obj
  
};


module.exports = {
    data
}