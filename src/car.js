export default class Car {
	constructor(name) {
    this.name = name;
    this.position = 0;
  }

  movePosition() {
    this.position += 1;
  }

  // initPosition() {
  //   this.position = 0;
  // }
}