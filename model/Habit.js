class Habit {
    constructor(name) {
        this.id = Date.now().toString();  // Simple unique ID
        this.name = name;
        this.createdAt = new Date();
        this.completed = false;
      }

      complete() {
        this.completed = true;
      }
}

export default Habit;