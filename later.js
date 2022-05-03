const later = { //The Self Evident Truth: Younger coders like me get some level of laxation from readable / maintainable code. This is beyond that
queue: [ ],
threads: [ ],
ids: [ ],
get: function ( type ) {
switch( type ) {
case 0:
return this.queue;
break;
case 1:
return this.threads;
break;
case 2:
return this.ids;
break;
}
},
reset: function ( id, type ) {
switch ( type ) {
case 0:
this.queue = [ ];
break;
case 1:
this.threads = [ ];
break;
case 2:
switch ( typeof id ) {
case "number":
this.threads [ id ] = [ ];
default:
this.ids = [ ];
}
break;
}
},
add: function ( id, process ) {
switch( typeof id ) {
case "number":
this.threads [ id ].push ( process );
break;
default:
this.queue.push ( process );
}
},
multi: function ( id, process ) {
let len = process.length;
switch ( typeof id ) {
case "number":
for ( let i = 0; i < len; i++ ) {
this.threads [ id ].push ( process [ i ] );
}
break;
default:
for ( let i = 0; i < len; i++ ) {
this.queue.push ( process [ i ] );
}
}
},
run: function ( id, index ) { //I'm going to comment here, as later.run is a beast of a function
switch( typeof id ) { //Check if user wants to run something from a thread
case "number":
switch( typeof index ) { //Do they want to run something specific?
case "number":
eval(this.threads [ id ] [ index ] ); //If so, evaluate the index then pop it
this.threads [ id ].pop ( index );
break;
default: //User wants to run all of thread
let len = this.get ( 1 ) [ id ].length;
for ( let i = 0; i < len; i++ ) { //Loop through all thread, evaluate, and reset
eval ( this.threads [ id ] [ i ]);
}
this.reset ( id, 1 );
}
break;
default: //User wants to run through main queue
switch( typeof index ) { //Does the user want to run something specific?
case "number":
eval ( this.queue [ index ] ); //If so, evaluate the index then pop it
this.queue.pop ( index );
break;
default:
let len = this.get ( ).length;
for ( let i = 0; i < len; i++ ) {
eval( this.queue [ i ] ); //Loop through all queue, evaluate, and reset
}
this.reset ( "", 0 );
}
}
},
create: function ( id ) {
switch ( this.ids.includes ( id ) ) {
case true:
return;
}
this.threads [ id ] = [ ];
this.ids.push ( id );
}
}
