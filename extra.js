var fakeConsole = {
  lines: [],
  log: function(line) {
    this.lines.push(line);
  },
  toString: function() {
    return String.prototype.concat.apply([], this.lines);
  }
};

