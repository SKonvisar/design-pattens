export class Singletone {
  private static _instance: Singletone;

  static getInstance(): Singletone {
    if (!Singletone._instance) {
      Singletone._instance = new Singletone();
    }
    return Singletone._instance;
  }

  businessLogicA() {
    console.log("Do some action A");
  }

  businessLogicB() {
    console.log("Do some action B");
  }
}
