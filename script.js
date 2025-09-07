// category API called

const categoryLoadData = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => {
      displayCategory(data.categories);
    });
};

// {
// "id": 1,
// "category_name": "Fruit Tree",
// "small_description": "Trees that bear edible fruits like mango, guava, and jackfruit."
// },

const displayCategory = (posts) => {
  const categoriesList = document.getElementById("categoriesList");

  posts.forEach((post) => {
    const a = document.createElement("a");
    a.innerText = post.category_name;
    a.href = "#";
    a.className =
      "px-2 py-1 rounded hover:bg-[#15803D] hover:text-[#FFFFFF] block";

    // click event
    a.addEventListener("click", (e) => {
      e.preventDefault();

      // add remove active class
      const allLinks = categoriesList.querySelectorAll("a");
      allLinks.forEach((link) => {
        link.classList.remove("bg-[#15803D]", "text-white");
      });

      a.classList.add("bg-[#15803D]", "text-white");

      loadCategoryPlants(post.id);
    });

    categoriesList.appendChild(a);
  });

  document.getElementById("allTrees").addEventListener("click", () => {
    loadAllPlants();
  });
};

categoryLoadData();

// load plants by category
const loadCategoryPlants = (categoryId) => {
  fetch(`https://openapi.programming-hero.com/api/category/${categoryId}`)
    .then((res) => res.json())
    .then((data) => {
      displayCards(data.plants);
    });
};

// load All Plants
const loadAllPlants = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => {
      displayCards(data.plants);
    });
};

// Tree Card API called
const cardLoadData = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => {
      displayCards(data.plants);
    });
};

// "plants": [
// {
// "id": 1,
// "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
// "name": "Mango Tree",
// "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
// "category": "Fruit Tree",
// "price": 500
// },

const displayCards = (plants) => {
  const treeCardContainer = document.getElementById("treeCardContainer");
  treeCardContainer.innerHTML = "";

  plants.forEach((plant) => {
    const card = document.createElement("div");
    card.className =
      "flex flex-col items-center w-[340px] h-[380px] p-4 bg-white gap-[12px] rounded-[8px]";
    card.innerHTML = `
            <img class="w-full h-[186px] rounded-[6px]" src="${plant.image}" alt="${plant.name}" />
                    <div class="flex flex-col gap-[6px]">
                        <h1 class="text-[14px] font-semibold text-[#1F2937]">${plant.name}</h1>
                        <p class="text-[12px]">${plant.description}</p>
                        <div class="flex items-center justify-between">
                            <a class="px-[12px] py-[4px] bg-[#DCFCE7] justify-center rounded-[400px] text-[#15803D]">Fruit
                                Tree</a>
                            <p class="font-semibold text-[14px]">৳ <span>${plant.price}</span></p>
                        </div>
                    </div>
                    <button class="bg-[#15803D] w-full rounded-[999px] py-[12px] text-white hover:bg-green-800">Add to Cart</button>
        `;
    card.querySelector("button").addEventListener("click", () => {
      sum(plant.name, plant.price);
    });

    treeCardContainer.appendChild(card);
  });
};
cardLoadData();

// cart adding function

const treeCardContainer = document.getElementById("treeCardContainer");
const cartList = document.getElementById("cartList");
const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");
let total = 0;

function sum(name, price) {
  const existingItem = Array.from(cartItems.children).find(
    (item) => item.querySelector("p").innerText === name
  );

  if (existingItem) {
    const numberSpan = existingItem.querySelector(".qty");
    const oldQuantity = parseInt(numberSpan.innerText);
    numberSpan.innerText = oldQuantity + 1;

    total += price;
  } else {
    const item = document.createElement("div");
    item.className =
      "flex items-center justify-between bg-[#DCFCE7] px-[12px] py-[8px] rounded-[8px]";
    item.innerHTML = `
     <div class="flex flex-col gap-[5px]">
                        <p class="tex-[14px] font-semibold">${name}</p>
                        <p class="text-[#1F2937]">৳ <span id="price">${price}</span> X <span class="qty">1</span></p>
                    </div>
                    <i id="close" class="fa-solid fa-xmark cursor-pointer"></i>
    `;
    item.querySelector("i").addEventListener("click", () => {
      const itemQuantity = parseInt(item.querySelector(".qty").innerText);
      const itemTotalPrice = price * itemQuantity;
      total -= itemTotalPrice;
      updateTotal();
      item.remove();
    });

    cartItems.appendChild(item);
    total += price;
  }
  updateTotal();
}

function updateTotal() {
  totalPrice.innerText = total;
}
