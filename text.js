// // // // // // // NOTE: Don't change the function name or arguments.
// // // // // // // exports.responseHandler = async (input, callback) => {
// // // const axios = require("axios");
// // // // // // async function myinput(input){

// // const { default: axios } = require("axios");

// // // // // //     try {
// // // // // //    function myAge(str) {
// // // // // //              // var str = "jhkj7682834";
// // // // // //              var matches = str.match(/(\d+)/);

// // // // // //              if (matches) {
// // // // // //                  return matches[0]
// // // // // //              }else{
// // // // // //                 return 20
// // // // // //              }
// // // // // //          }
// // // // // //        let Currage =  myAge(input.message)
// // // // // //        let resp = await axios.post(
// // // // // //           " https://4c5f-103-157-168-126.in.ngrok.io/symptoms/api/v1/age" ,{
// // // // // //             "age" :Currage,
// // // // // //              'include_tokens': true
// // // // // //          },
// // // // // //        );
// // // // // // //        const response = await axios.post(
// // // // // // //      'https://4c5f-103-157-168-126.in.ngrok.io/symptoms/api/v1/age',
// // // // // // //      new URLSearchParams({
// // // // // // //          'age': Currage
// // // // // // //      })
// // // // // // //  ).then((data) => {
// // // // // // //     return data
// // // // // // //  });
// // // // // //        // let todo = response
// // // // // //     //    callback([{
// // // // // //         //    "message": Currage
// // // // // //     //    }]);

// // // // // //     console.log(resp , "====================")
// // // // // //     } catch(err) {
// // // // // //     //    callback([{
// // // // // //         //    "message" : `Please Enter Correct Age ${Currage}`
// // // // // //     //    }]);
// // // // // //     console.log("Please Enter the valid Data " ,err ,"}}}}}}}}}}}}}}}}}}}}}}}}}}}")
// // // // // //     }
// // // // // //  }
// // // // // //  myinput({
// // // // // //     message:"my age is 44"
// // // // // //  })
// // // // // var axios = require('axios');
// // // // // var qs = require('qs');
// // // // // var data = qs.stringify({
// // // // //   'age': '45'
// // // // // });
// // // // // var config = {
// // // // //   method: 'post',
// // // // //   url: 'https://4c5f-103-157-168-126.in.ngrok.io/symptoms/api/v1/age',
// // // // //   headers: {
// // // // //     'Content-Type': 'application/x-www-form-urlencoded'
// // // // //   },
// // // // //   data : data
// // // // // };

// // // // // axios(config)
// // // // // .then(function (response) {
// // // // //   console.log(JSON.stringify(response.data));
// // // // // })
// // // // // .catch(function (error) {
// // // // //   console.log(error);
// // // // // });

// // // // let response = fetch('https://4c5f-103-157-168-126.in.ngrok.io/symptoms/api/v1/age', {
// // // //     method: 'POST',
// // // //     body: {
// // // //         'age': '45'
// // // //     }
// // // // }).then((resp) => resp.json()).then((data) => console.log(data , "======="));
// // // // var bodyFormData = new FormData()
// // // // bodyFormData.append('age', 45);
// // // // axios({
// // // //     method: "post",
// // // //     url: 'https://4c5f-103-157-168-126.in.ngrok.io/symptoms/api/v1/age',
// // // //     data: JSON.stringify("age", "45"),
// // // //     headers: { "Content-Type": "application/json" },
// // // //   })
// // // //     .then(function (response) {
// // // //       //handle success
// // // //       console.log(response);
// // // //     })
// // // //     .catch(function (response) {
// // // //       //handle error
// // // //       console.log(response);
// // // //     });

// // // var myHeaders = new Headers();
// // // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

// // // var urlencoded = new URLSearchParams();
// // // urlencoded.append("age", "45");

// // // var requestOptions = {
// // //   method: "POST",
// // //   headers: myHeaders,
// // //   body: urlencoded,
// // //   redirect: "follow",
// // // };

// // // const resp = fetch(
// // //   "https://41da-103-157-168-126.in.ngrok.io/symptoms/api/v1/age",
// // //   requestOptions
// // // )
// // //   .then((response) => response.text())
// // //   .then((data) => {
// // //     console.log(data);
// // //   });

// // // //   console.log(resp)

// // function myAge(str) {
// //   // var str = "jhkj7682834";
// //   var matches = str.match(/(\d+)/);

// //   if (matches) {
// //     return matches[0];
// //   } else {
// //     return 20;
// //   }
// // }
// // let Currage = myAge("my age is 21");
// // console.log(Currage)

// // // var myHeaders = new Headers();
// // // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

// // // var urlencoded = new URLSearchParams();
// // // urlencoded.append("age", `${Currage}`);
// // var raw = JSON.stringify({
// //     "age": `${Currage}`
// //   });
// // var requestOptions = {
// //   method: "POST",
// //   headers: {
// //     "Content-Type" : "application/json"
// //   },
// //   body: raw,
// //   redirect: "follow",
// // };
// // let ans;
// // var data = JSON.stringify({
// //     "age": `${Currage}`
// //   });

// //   var config = {
// //     method: 'post',
// //     url: 'https://41da-103-157-168-126.in.ngrok.io/symptoms/api/v1/age',
// //     headers: {
// //       'Content-Type': 'application/json'
// //     },
// //     data : data
// //   };
// //   axios(config).then((data) => console.log(data))
// //   .catch((error) => console.log("error", error));

// // // console.log(resp);
// const axios = require("axios");
// async function cal() {
//   const response = await axios.post(
//     "https://api.infermedica.com/v3/diagnosis",
//     // '{\n    "sex": "male",\n    "age": {\n      "value": 30\n    },\n    "evidence": [\n        {\n          "id": "s_1193",\n          "choice_id": "present",\n          "source": "initial"\n        },\n        {\n          "id": "s_488",\n          "choice_id": "present"\n        },\n        {\n          "id": "s_418",\n          "choice_id": "present"\n        }\n    ]\n}',
//     {
//       sex: "male",
//       age: {
//         value: 30,
//       },
//       evidence: [
//         {
//           id: "s_1193",
//           choice_id: "present",
//           // 'source': 'initial'
//         },
//         {
//           id: "s_488",
//           choice_id: "present",
//         },
//         {
//           id: "s_418",
//           choice_id: "absent",
//         },
//       ],
//     },
//     {
//       headers: {
//         "App-Id": "6b2c1128",
//         "App-Key": "ed31ef2357c0a91740327294a146c97d",
//         "Content-Type": "application/json",
//       },
//     }
//   );

//   console.log(response.data.question.items[0].choices);
// }

// cal();
