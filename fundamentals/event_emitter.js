function Events() {
  this.events = {};
}

Events.prototype.on = function(type, listener) {
  if(!this.events[type]) {
    this.events[type] = [listener];
  } else {
    this.events[type].push(listener);
  }
};

Events.prototype.trigger = function(type, ...args) {
  let event = this.events[type];

    if (!event) {
      return;
    } else {
      for (let i = 0; i < event.length; i++) {
        event[i](...args);
      }
    }
};

Events.prototype.off = function(type, listener) {
  let event = this.events[type];
  if(!listener && event) {
    this.events[type] = [];
  }
  if(event) {
    for(let i = 0; i < event.length; i++) {
      if(event[i] === listener) {
        event.splice(i, 1);
      }
    }
  }
};

module.exports = Events;
