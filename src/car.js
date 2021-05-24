'use strict';

export default class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  _m_move() {
    this.distance += 1;
  }
}
