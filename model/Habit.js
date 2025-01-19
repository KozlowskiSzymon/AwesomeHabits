class Habit {
    constructor(name) {
        this.id = Date.now().toString();  // Simple unique ID
        this.name = name;
        this.createdAt = new Date();
        this.strike = 0;
      }

      complete() {
        this.completed = true;
      }

      incrementStrike() {
        this.strike++;
      }

      decrementStrike() {
        this.strike--;
      }

      reset() {
        this.strike = 0;
      }
}

export default Habit;