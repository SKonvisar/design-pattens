type PizzaBase = string;

export class Ingredient {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

class Pizza {
  size: number;
  base: PizzaBase;
  ingredients: Ingredient[] = [];

  get price() {
    return this.ingredients.reduce((a, i) => a + i.price, 0);
  }
}

interface BuilderBase<T> {
  build: () => T;
  reset: () => this;
}

export class PizzaBuilder implements BuilderBase<Pizza> {
  private pizza: Pizza;

  constructor() {
    this.reset();
  }

  reset() {
    this.pizza = new Pizza();
    return this;
  }

  build() {
    const resultPizza = this.pizza;
    this.reset();
    return resultPizza;
  }

  setSize(size: number) {
    this.pizza.size = size;
    return this;
  }

  setBase(base: PizzaBase) {
    this.pizza.base = base;
    return this;
  }

  addIngredient(i: Ingredient) {
    this.pizza.ingredients.push(i);
    return this;
  }

  addIngredients(iList: Ingredient[]) {
    this.pizza.ingredients = [...this.pizza.ingredients, ...iList];
    return this;
  }
}
