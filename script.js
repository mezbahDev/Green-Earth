const loadData = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => {
      displayPosts(data.categories);
    });
};

// {
// "id": 1,
// "category_name": "Fruit Tree",
// "small_description": "Trees that bear edible fruits like mango, guava, and jackfruit."
// },

const displayPosts = (posts) => {
  const categoriesList = document.getElementById("categoriesList");
  posts.forEach((post) => {
    const a = document.createElement("a");
    a.innerText = post.category_name;
    a.href = "#";
    a.className =
      "px-2 py-1 rounded hover:bg-[#15803D] hover:text-[#FFFFFF] block";
    categoriesList.appendChild(a);
  });
};

loadData();
