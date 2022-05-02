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
for(let i = 0; i < process.length; i++) {
this.queue.push(process[i]);
}
},
run: function(index) {
switch(index) {
case typeof 0:
eval(queue[index]);
this.queue.pop(index);
break;
default:
for(let i = 0; i < this.get().length; i++) {
eval(this.queue[i]);
}
this.reset();
}
}
}
