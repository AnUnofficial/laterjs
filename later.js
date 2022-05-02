const later = {
queue: [],
get: function() {
return this.queue;
},
reset: function() {
this.queue = [];
},
add: function(process) {
this.queue.push(process);
},
run: function() {
for(let i = 0; i < this.get().length; i++) {
eval(this.queue[i]);
}
this.reset;
}
}