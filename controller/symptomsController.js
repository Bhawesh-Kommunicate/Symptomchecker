const {
  symptomsData,
  DiagonsisData,
  getSymptomsData,
} = require("../service/symptomsData.service");

const { age } = require("../service/age.service");
const { gender } = require("../service/Gender.service");
const userInfo = require("../service/userDetails");


const SymptomStore = async (req, res) => {
  // console.log(req.body.userId);

  var Userdata = await userInfo.data(req.body.userId);

  console.log(
    Userdata,
    "UserdataUserdataUserdataUserdataUserdataUserdataUserdataUserdataUserdataUserdata"
  );

  let data = await symptomsData(req.body.symptoms, CheckObj.age);
  if (!CheckObj.symptoms.includes(data.data.mentions[0].id) && CheckObj.age) {
    if (CheckObj.symptoms.length > 2) {
      CheckObj.symptoms.shift();
      CheckObj.symptoms.push(data.data.mentions[0].id);
    } else if (CheckObj.age) {
      console.log(data.data.mentions[0]);
      CheckObj.symptoms.push({
        id: data.data.mentions[0].id,
        choice_id: data.data.mentions[0].choice_id,
      });

      console.log(CheckObj);
    }
  }

  // console.log(CheckObj.age)
  if (CheckObj.symptoms.length >= 3) {
    var { question } = await diagonsis(
      CheckObj.symptoms,
      CheckObj.sex,
      CheckObj.age
    );
    //  console.log(question.text , "QQQQQQQQQQQQQQQQQQQQQq")
  }
  let symptomsSize = CheckObj.symptoms.length;

  // let ans = CheckObj.symptoms.join(" and ");

  if (question) {
    return res.status(200).json({
      message: "Successflly Added the symptoms",
      success: true,
      // data: ans,
      data: [question.text, question.items],
      len: symptomsSize,
    });
  } else {
    return res.status(201).json({
      message: "Not Getting Any value",
      success: false,
      len: symptomsSize,
    });
  }
};
// }

const diagonsis = async (arr, sex, age) => {
  let response = await DiagonsisData(arr, sex, age);
  if (response) {
    console.log("=2=2=2=2=2=2=2=2==2=2=2=2==22=", response.data);

    return response.data;
  } else {
    console.log("no response ----------");
  }
  // console.log(response.data);
};
const getDefaultSymptoms = async (req, res) => {
  console.log(
    req.body.userId,
    "____________________________________________________________________"
  );

  let Userdata = await userInfo.data(req.body.userId);
  // console.log(req.query.symptoms)
  if (Userdata) {
    let temp = ["diabetes"];
    // const response = await getSymptomsData(Userdata.age, Userdata.Gender);

    // console.log(response.data[0].name);
    // temp.push(...response.data)
    // for (let i = 0; i <2; i++) {
    //   temp.push(response.data[i].name);
    //   // temp.push("hello world")
    // }
    console.log(temp);

    return res.status(200).json({
      // data: response.data.map((item) => item.name),
      data: temp,
      message: "Successfully Got all the names",
      success: true,
    });
  } else {
    return res.status(404).json({
      message: "Please Give userId Although Please",
      success: false,
    });
  }
};

// getSymptomsController
module.exports = { SymptomStore, getDefaultSymptoms };
