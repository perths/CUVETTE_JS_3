const foods = [
    {
        "id": 1,
        "foodname": "Apple",
        "calorie": 95,
        "category": "Fruit",
        "proteins": 0.3,
        "cab": 25
    },
    {
        "id": 2,
        "foodname": "Banana",
        "calorie": 105,
        "category": "Fruit",
        "proteins": 1.3,
        "cab": 27
    },
    {
        "id": 3,
        "foodname": "Orange",
        "calorie": 62,
        "category": "Fruit",
        "proteins": 1.2,
        "cab": 15
    },
    {
        "id": 4,
        "foodname": "Pear",
        "calorie": 95,
        "category": "Fruit",
        "proteins": 0.5,
        "cab": 25
    },
    {
        "id": 5,
        "foodname": "Grapefruit",
        "calorie": 42,
        "category": "Fruit",
        "proteins": 1.1,
        "cab": 11
    },
    {
        "id": 6,
        "foodname": "Strawberry",
        "calorie": 46,
        "category": "Fruit",
        "proteins": 1.5,
        "cab": 10
    },
    {
        "id": 7,
        "foodname": "Blueberry",
        "calorie": 52,
        "category": "Fruit",
        "proteins": 1.1,
        "cab": 14
    },
    {
        "id": 8,
        "foodname": "Raspberry",
        "calorie": 52,
        "category": "Fruit",
        "proteins": 1.4,
        "cab": 15
    },
    {
        "id": 9,
        "foodname": "Broccoli",
        "calorie": 34,
        "category": "Vegetable",
        "proteins": 3.3,
        "cab": 5
    },
    {
        "id": 10,
        "foodname": "Cauliflower",
        "calorie": 25,
        "category": "Vegetable",
        "proteins": 2.6,
        "cab": 5
    },
    {
        "id": 11,
        "foodname": "Green Beans",
        "calorie": 31,
        "category": "Vegetable",
        "proteins": 2.4,
        "cab": 4
    },
    {
        "id": 12,
        "foodname": "Asparagus",
        "calorie": 20,
        "category": "Vegetable",
        "proteins": 2.2,
        "cab": 2
    },
    {
        "id": 13,
        "foodname": "Spinach",
        "calorie": 23,
        "category": "Vegetable",
        "proteins": 3.5,
        "cab": 4
    },
    {
        "id": 14,
        "foodname": "Kale",
        "calorie": 33,
        "category": "Vegetable",
        "proteins": 4.3,
        "cab": 7
    },
    {
        "id": 15,
        "foodname": "Sweet Potato",
        "calorie": 103,
        "category": "Vegetable",
        "proteins": 2,
        "cab": 27
    },
    {
        "id": 16,
        "foodname": "Potato",
        "calorie": 161,
        "category": "Vegetable",
        "proteins": 4.3,
        "cab": 37
    },
    {
        "id": 17,
        "foodname": "Carrot",
        "calorie": 41,
        "category": "Vegetable",
        "proteins": 0.9,
        "cab": 9
    },
    {
        "id": 18,
        "foodname": "Onion",
        "calorie": 40,
        "category": "Vegetable",
        "proteins": 1.4,
        "cab": 9
    },
    {
        "id": 19,
        "foodname": "Egg",
        "calorie": 77,
        "category": "Protein",
        "proteins": 6.3,
        "cab": 0.5
    },
    {
        "id": 20,
        "foodname": "Chicken Breast",
        "calorie": 165,
        "category": "Protein",
        "proteins": 31,
        "cab": 0
    },
    {
        "id": 21,
        "foodname": "Salmon",
        "calorie": 206,
        "category": "Protein",
        "proteins": 22,
        "cab": 0
    },
    {
        "id": 22,
        "foodname": "Tuna",
        "calorie": 179,
        "category": "Protein",
        "proteins": 39,
        "cab": 0
    },
    {
        "id": 23,
        "foodname": "Beef",
        "calorie": 250,
        "category": "Protein",
        "proteins": 26,
        "cab": 0
    },
    {
        "id": 24,
        "foodname": "Pork",
        "calorie": 242,
        "category": "Protein",
        "proteins": 26,
        "cab": 0
    },
    {
        "id": 25,
        "foodname": "Lamb",
        "calorie": 294,
        "category": "Protein",
        "proteins": 25,
        "cab": 0
    },
    {
        "id": 26,
        "foodname": "Shrimp",
        "calorie": 85,
        "category": "Protein",
        "proteins": 20,
        "cab": 0.2
    },
    {
        "id": 27,
        "foodname": "Quinoa",
        "calorie": 120,
        "category": "Grain",
        "proteins": 4.4,
        "cab": 21
    },
    {
        "id": 28,
        "foodname": "Brown Rice",
        "calorie": 216,
        "category": "Grain",
        "proteins": 4.5,
        "cab": 45
    },
    {
        "id": 29,
        "foodname": "Oats",
        "calorie": 389,
        "category": "Grain",
        "proteins": 16.9,
        "cab": 66
    },
    {
        "id": 30,
        "foodname": "Quinoa",
        "calorie": 120,
        "category": "Grain",
        "proteins": 4.4,
        "cab": 21
    },
    {
        "id": 31,
        "foodname": "Bread",
        "calorie": 265,
        "category": "Grain",
        "proteins": 9.4,
        "cab": 49
    },
    {
        "id": 32,
        "foodname": "Pasta",
        "calorie": 131,
        "category": "Grain",
        "proteins": 5.5,
        "cab": 26
    },
    {
        "id": 33,
        "foodname": "Milk",
        "calorie": 60,
        "category": "Dairy",
        "proteins": 3.2,
        "cab": 5.1
    },
    {
        "id": 34,
        "foodname": "Cheese",
        "calorie": 402,
        "category": "Dairy",
        "proteins": 25,
        "cab": 2.4
    },
    {
        "id": 35,
        "foodname": "Yogurt",
        "calorie": 59,
        "category": "Dairy",
        "proteins": 3.5,
        "cab": 5
    },
    {
        "id": 36,
        "foodname": "Butter",
        "calorie": 717,
        "category": "Dairy",
        "proteins": 0.9,
        "cab": 0.1
    },
    {
        "id": 37,
        "foodname": "Almonds",
        "calorie": 579,
        "category": "Nuts",
        "proteins": 21,
        "cab": 22
    },
    {
        "id": 38,
        "foodname": "Walnuts",
        "calorie": 654,
        "category": "Nuts",
        "proteins": 15,
        "cab": 14
    },
    {
        "id": 39,
        "foodname": "Peanuts",
        "calorie": 567,
        "category": "Nuts",
        "proteins": 26,
        "cab": 16
    },
    {
        "id": 40,
        "foodname": "Cashews",
        "calorie": 553,
        "category": "Nuts",
        "proteins": 18,
        "cab": 30
    }
];

const divConfig = {
    allFood: {
        text: '1) List all the food items',
        function: () => {
            const headerText = 'All Foods';
            // foods.forEach((food) => console.log(food));

            displayFoodItems(headerText, foods, ['id', 'foodname', 'calorie', 'category', 'proteins', 'cab']);
        }
    },
    allVegatable: {
        text: '2) List all the food items with category vegetables',
        function: () => {
            const vegetables = [];
            foods.filter((food) => food.category == 'Vegetable' ? vegetables.push(food) : null);

            const headerText = `Total No. of Vegetables - ${vegetables.length}`;

            displayFoodItems(headerText, vegetables, ['foodname']);
        }
    },
    allFruit: {
        text: '3) List all the food items with category fruit',
        function: () => {
            const fruits = [];
            foods.filter((food) => food.category == 'Fruit' ? fruits.push(food) : null);

            const headerText = `Total No. of Fruits - ${fruits.length}`;

            displayFoodItems(headerText, fruits, ['foodname']);
        }
    },
    allProtein: {
        text: '4) List all the food items with category protein',
        function: () => {
            const proteins = [];
            foods.filter((food) => food.category == 'Protein' ? proteins.push(food) : null);

            const headerText = `Total No. of Proteins - ${proteins.length}`;

            displayFoodItems(headerText, proteins, ['foodname']);
        }
    },
    allNut: {
        text: '5) List all the food items with category nuts',
        function: () => {
            const nuts = [];
            foods.filter((food) => food.category == 'Nuts' ? nuts.push(food) : null);

            const headerText = `Total No. of Nuts - ${nuts.length}`;

            displayFoodItems(headerText, nuts, ['foodname']);
        }
    },
    allGrain: {
        text: '6) List all the food items with category grains',
        function: () => {
            const grains = [];
            foods.filter((food) => food.category == 'Grain' ? grains.push(food) : null);

            const headerText = `Total No. of Grains - ${grains.length}`;

            displayFoodItems(headerText, grains, ['foodname']);
        }
    },
    allDairy: {
        text: '7) List all the food items with category dairy',
        function: () => {
            const dairies = [];
            foods.filter((food) => food.category == 'Dairy' ? dairies.push(food) : null);

            const headerText = `Total No. of Dairy items - ${dairies.length}`;

            displayFoodItems(headerText, dairies, ['foodname']);
        }
    },
    calorieAbove100: {
        text: '8) List all the food items with calorie above 100',
        function: () => {
            const foodsCal = [];
            foods.filter((food) => food.calorie > 100 ? foodsCal.push(food) : null);

            const headerText = `Total No. of food items with calorie > 100 = ${foodsCal.length}`;

            displayFoodItems(headerText, foodsCal, ['foodname', 'calorie']);
        }
    },
    calorieBelow100: {
        text: '9) List all the food items with calorie below 100',
        function: () => {
            const foodsCal = [];
            foods.filter((food) => food.calorie < 100 ? foodsCal.push(food) : null);

            const headerText = `Total No. of food items with calorie < 100 = ${foodsCal.length}`;

            displayFoodItems(headerText, foodsCal, ['foodname', 'calorie']);
        }
    },
    sortByProteinDesc: {
        text: '10) List all the food items with highest protein content to lowest',
        function: () => {
            let sortedByProteinDesc = [];
            sortedByProteinDesc = foods.sort((a, b) => b.proteins - a.proteins);

            const headerText = 'Food items with highest protein content to lowest';

            displayFoodItems(headerText, sortedByProteinDesc, ['foodname', 'proteins'])
        }
    },
    sortByCabAsc: {
        text: '11) List all the food items with lowest cab content to highest',
        function: () => {
            let sortedByCabAsc = [];
            sortedByCabAsc = foods.sort((a, b) => a.cab - b.cab);

            const headerText = 'Food items with lowest cab content to highest';

            displayFoodItems(headerText, sortedByCabAsc, ['foodname', 'cab'])
        }
    }
};

window.addEventListener("DOMContentLoaded", (event) => {

    const mainDiv = document.getElementById("masterDiv");

    for (let key in divConfig) {
        const div = document.createElement("div");
        div.id = key;
        div.innerHTML = divConfig[key]['text'];
        
        mainDiv.appendChild(div);
        document.getElementById(key).addEventListener("click", divConfig[key]['function']);
    }
});

const displayFoodItems = (headerText, foodItems, displayFields) => {
    try {
        console.clear();
        console.log(headerText);
        console.log(foodItems);

        const displayDiv = document.getElementById('displayDiv');
        displayDiv.innerHTML = '';
        displayDiv.style.padding = '2% 2%';

        const h2 = document.createElement('h2');
        h2.innerHTML = headerText;
        displayDiv.appendChild(h2);

        const list = document.createElement('ol');
        list.id = 'displayList';
        displayDiv.appendChild(list);

        foodItems.forEach(food => {
            let li = document.createElement('li');
            li.style.padding = '1%';
            li.style.fontFamily = 'Arial';
            li.style.color = '#FFFFFF'

            let displayString = '';
            displayFields.forEach(field => displayString += `${titleCase(field)}-${food[field]} `);
            displayString = displayString.trimEnd();
            displayString = displayString.replaceAll(' ', ' | ');

            li.innerHTML = displayString;
            list.appendChild(li);
        });
    } catch (error) {
        console.log('Error in displayFoodItems', error);
    }
}

const filterByCategory = (name, category) => {
    try {
        const filteredFood = [];
        foods.filter((food) => food.category == category ? filteredFood.push(food) : null);

        const headerText = `Total No. of ${name} - ${filteredFood.length}`;
        console.log(headerText);
        console.log(name, filteredFood);

        displayFoodItems(headerText, filteredFood, ['foodname']);
    } catch (error) {
        console.log('Error in filterByCategory', error);
    }
}

const titleCase = (str) => {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}