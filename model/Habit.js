class Habit {
  constructor(name) {
    this.id = Date.now().toString(); // Simple unique ID
    this.name = name;
    this.createdAt = new Date();
    this.dates = []; // Stores dates in "DD/MM" format
    this.strike = 0;
    this.overall = 0;
  }

  incrementOverall(date) {
    if (!this.dates.includes(date)) {
      this.dates.push(date);
      this.overall = this.dates.length;
      this.calculateStrike(); // Update strike after adding a date
    }
  }

  decrementOverall(date) {
    const index = this.dates.indexOf(date);
    if (index > -1) {
      this.dates.splice(index, 1);
      this.overall = this.dates.length;
      this.calculateStrike(); // Update strike after removing a date
    }
  }

  calculateStrike() {
    if (this.dates.length === 0) {
      this.strike = 0;
      return;
    }

    // Get today's and yesterday's date in "DD/MM" format
    const today = new Date();
    const todayStr = this.formatDate(today);

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = this.formatDate(yesterday);

    // Determine the starting date for strike calculation
    let startDateStr = this.dates.includes(todayStr) ? todayStr : yesterdayStr;
    let checkDate = this.parseDate(startDateStr);

    let count = 0;

    // Sort stored dates in descending order (latest first)
    const sortedDates = [...this.dates]
      .map(dateStr => this.parseDate(dateStr))
      .sort((a, b) => b - a);

    for (let date of sortedDates) {
      if (this.formatDate(checkDate) === this.formatDate(date)) {
        count++;
        checkDate.setDate(checkDate.getDate() - 1); // Move to previous day
      } else {
        break; // Stop counting if there's a missing date
      }
    }

    this.strike = count;
  }

  resetStrike() {
    this.strike = 0;
  }

  // Convert "DD/MM" string to Date object
  parseDate(dateStr) {
    const [day, month] = dateStr.split('/').map(Number);
    const year = new Date().getFullYear(); // Assume current year
    return new Date(year, month - 1, day);
  }

  // Format Date object to "DD/MM" string
  formatDate(date) {
    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    return `${day}/${month}`;
  }
}

export default Habit;
