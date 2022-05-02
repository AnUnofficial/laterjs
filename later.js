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
multi: function(process) {
let len = process.length;
for(let i = 0; i < len; i++) {
this.queue.push(process[i]);
}
},
run: function(index) {
switch(typeof index) {
case "number":
eval(queue[index]);
this.queue.pop(index);
break;
default:
let len = this.get().length;
for(let i = 0; i < len; i++) {
eval(this.queue[i]);
}
this.reset();
}
}
