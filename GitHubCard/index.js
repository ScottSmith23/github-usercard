/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/ScottSmith23')
  .then (response => {
    cardDOM.appendChild(createCard(response.data))
    console.log(response.data)
});
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
const cardDOM = document.querySelector(".cards");


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

//mvp version

// const followersArray = [`frankie95667`,`idongessien`,`ardissam0`,'cgiroux86','teaguehannam'];

// followersArray.forEach(el =>{
//   axios.get(`https://api.github.com/users/${el}`)
//   .then (response => {
//     cardDOM.appendChild(createCard(response.data))
// });

// });

// Stretch get followers using API/chain promises
axios.get('https://api.github.com/users/ScottSmith23/followers')
  .then (response => {
    response.data.forEach(follower => {
      axios.get(follower.url)
  .then (response => {
    cardDOM.appendChild(createCard(response.data))
    console.log(response.data) 
  
})})});

// axios.get('https://api.github.com/users/ScottSmith23/followers')
//   .then((response) => {
//     return axios.get(response.data); // using response.data
//   })
//   .then((response) => {
//     console.log('Response', response);
//   });
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/
function createCard(cardObj){
  //creating elements
  const cardNew = document.createElement('div');
  const cardIMG = document.createElement('img');
  const cardInfo = document.createElement('div');
  const cardName = document.createElement('h3');
  const userP = document.createElement('p');
  const locationP = document.createElement('p');
  const profileP = document.createElement('p');
  const linkN = document.createElement('a');
  const followersP = document.createElement('p');
  const followingP = document.createElement('p');
  const bioP = document.createElement('p');
  const calendar = document.createElement('div');

//add classes
cardNew.classList.add('card');
cardInfo.classList.add('card-info');
calendar.classList.add('calendar');
// cardInfo.classList.add(`card-hider`);
cardName.classList.add('name');
userP.classList.add('username');
//data
cardName.textContent = cardObj.name;
cardIMG.src = cardObj.avatar_url;
userP.textContent = cardObj.login;
locationP.textContent =`Location: ${cardObj.location}`;
profileP.textContent = `Profile: `
linkN.innerText = cardObj.html_url;
linkN.href = cardObj.html_url;
followersP.textContent = `Followers: ${cardObj.followers}`;
followingP.textContent = `Following: ${cardObj.following}`;
bioP.textContent = `Bio: ${cardObj.bio}`;

// constructing component
profileP.appendChild(linkN);
cardInfo.appendChild(cardName);
cardInfo.appendChild(userP);
cardInfo.appendChild(locationP);
cardInfo.appendChild(profileP);
cardInfo.appendChild(followersP);
cardInfo.appendChild(followingP);
cardInfo.appendChild(bioP);
// cardInfo.appendChild(calendar);
cardNew.appendChild(cardIMG);
cardNew.appendChild(cardInfo);

  return cardNew;
}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
