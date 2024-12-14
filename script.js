
var button = document.querySelector('.button');
button.addEventListener('click', data);

function data() {
    fetch("https://randomuser.me/api/")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var user = data.results[0];
            var fullName = user.name.first;
            var email = user.email;
            var gender = user.gender;
            var pictureUrl = user.picture.large;

            var card = document.querySelector('.card');
            card.innerHTML = `
              <div class="picture">
                  <img src="${pictureUrl}" alt="User Picture" style="border-radius: 50%; width: 100px; height: 100px;">
              </div>
              <h2>${fullName}</h2>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Gender:</strong> ${gender}</p>
              <p>Hi, I am ${fullName}, a ${gender}. Nice to meet you!</p>
          `;
            card.style.display = "block";
        })
}



