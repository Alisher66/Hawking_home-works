// 1-задача
const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");

loadBtn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  const searchValue = searchInput.value.trim().toLowerCase();
  try {
    const response = await fetch(`https://api.github.com/users/${searchValue}`);
    if (response.ok) {
      const data = await response.json();
      renderUser(data);
    } else {
      renderUser(null);
      throw new Error("Данные не найдены");
    }
  } catch (err) {
    console.log(err.message);
  }
});

function renderUser(data = null) {
  if (data) {
    resultsContainer.innerHTML = `<div class="response-container">
        <img src="${data.avatar_url}">
        <p> Имя: <span>${data.name}</span><p>
        <p> О себе: <span>${data.bio}</span><p>
        <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
      </div>`;
  } else {
    resultsContainer.innerHTML = "<p>Данные не найдены</p>";
  }
}

// ------------------------------------------------------------------

// 2-задача axios
const loadBtn2 = document.querySelector(".js-load2");
const resultsContainer2 = document.querySelector(".js-results2");
const searchInput2 = document.querySelector(".js-input2");

loadBtn2.addEventListener("click", async (evt) => {
  evt.preventDefault();
  const searchValue = searchInput2.value.trim();
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users`,
      { params: { id: searchValue } }
    );
    renderUser2(response.data);
  } catch (err) {
    console.log(err.message);
  }
});

function renderUser2(users = []) {
  console.log(users);
  if (users.length > 0) {
    resultsContainer2.innerHTML = users
      .map(
        (user) => `<div class="response-container">
        <p> Имя: <span>${user.name}</span><p>
        <p> e-mail: <span>${user.email}</span><p>
        <p> Номер телефона: <span>${user.phone}</span><p>
      </div>`
      )
      .join(",");
  } else {
    resultsContainer2.innerHTML = "<p>Данные не найдены</p>";
  }
}
