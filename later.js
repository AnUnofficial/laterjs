const later = {
queue: [ ],
threads: [ ],
ids: [ ],
get: function ( type ) {
switch ( type ) {
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
run: function ( id, index ) {
switch ( typeof id ) {
case "number":
switch ( typeof index ) {
case "number":
eval ( this.threads [ id ] [ index ] );
this.threads [ id ].pop ( index );
break;
default:
let len = this.get ( 1 ) [ id ].length;
for ( let i = 0; i < len; i++ ) {
eval ( this.threads [ id ] [ i ] );
}
this.reset ( id, 1 );
}
break;
default:
switch ( typeof index ) {
case "number":
eval ( this.queue [ index ] );
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
