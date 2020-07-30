import { PizzaBuilder, Ingredient } from "./Builder";

export function BuilderDemo() {
  const builder = new PizzaBuilder();

  const Beef = new Ingredient("beef", 20);
  const Mashroom = new Ingredient("mashroom", 15);
  const Tomato = new Ingredient("beef", 20);
  const Cheder = new Ingredient("cheder", 50);

  builder
    .setBase("cheese")
    .setSize(30)
    .addIngredients([Beef, Mashroom, Tomato]);

  if (confirm("Would you like to add cheese ?")) {
    builder.addIngredient(Cheder);
  }

  const pizza = builder.build();

  console.log(pizza);
  console.log(pizza.price, "Pizza price");
}
