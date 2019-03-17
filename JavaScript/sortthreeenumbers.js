var x = prompt("Enter value X");
var y= prompt("Enter value Y");
var z= prompt("Enter value Z");

if(x>y && x>z){
    if(y>z){
        alert( y + " is bigger than " + z);
    }
    else{
        alert( z + " is bigger than " + y );
    }

}

else if(y>x && y>z){
    if( x>z){
        alert ( x + " is bigger than " + z);
    }
    else{
        alert ( z + " is bigger than " + x);
    }
}

else if (z>x && z>y){
if( x>y) {
        alert ( x + " is bigger than " + z);
    }
    else {
        alert ( y + " is bigger than " + x);
    }
}   
