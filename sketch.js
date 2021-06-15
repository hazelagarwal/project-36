var dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFood , addFed;
var foodObj;

//create feed and lastFed variable here
var feed , lastFed

function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);

  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  //create feed the dog button here
  addFed=createButton("Feed The Dog");
  addFed.position(600,95);
  addFed.mousePressed(addFeds);


  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

  addFood=createButton("Last Feed : 12 AM");
  addFood.position(400,95);
}

function draw() {
  background(46,139,87);
  foodObj.display();

  //write code to read fedtime value from the database 
  
  if(lastFed>=12){

  }else if(lastFed==0){
    Text("Last Feed : 12 AM" , 350 , 30);
  }else{
  
  }
  
  var food_stock_val =  foodObj.getFoodStock();
  if(food_stock_val <= 0){
    foodObj.updateFoodStock(food_stock_val  *0);
    }else{
      foodObj.updateFoodStock(food_stock_val -1)
      }
  //write code to display text lastFed time here

 
  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}


function feedDog(){
  dog.addImage(happyDog);

  //write code here to update food stock and last fed time



  
}

function addFeds(){
  foodS--;
  database.ref('/').update({
    Food:foodS
  })
}

//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}
