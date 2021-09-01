// Add your code here
// const formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle",
// };

// const configurationObject = {
//     method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "applicatio/json",
//   },
//   body: JSON.stringify(formData),
// };
// const baseUrl = "http://localhost:3000/dogs";

// fetch(baseUrl, configurationObject)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     alert("Bad things! Ragnarok!");
//     console.log(error.message);
//   });

function submitData(userName, userEmail) {
  const baseUrl = "http://localhost:3000/users";
  const configObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail,
    }),
  };
  return fetch(baseUrl, configObject)
    .then((response) => response.json())
    .then((data) => appendToDOM(data.id)).catch(error => appendToDOM(error))
}

function appendToDOM(data) {
  let body = document.getElementsByTagName("body")[0];
  body.innerHTML = data;
}

submitData("Milan", "milan@zicna.com");
