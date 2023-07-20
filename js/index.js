const drumSet=document.querySelector('#drum-kit');

let arr=[];

class drumID{
    constructor(x,y){
        this.key=x;
        this.sound=y;
    }
};
function initialiseDrums(){ 
    arr[0]=new drumID('w',`sounds/tom-1.mp3`);
    arr[1]=new drumID('a',`sounds/tom-2.mp3`);
    arr[2]=new drumID('s',`sounds/tom-3.mp3`);
    arr[3]=new drumID('d',`sounds/tom-4.mp3`);
    arr[4]=new drumID('j',`sounds/kick-bass.mp3`);
    arr[5]=new drumID('k',`sounds/snare.mp3`);
    arr[6]=new drumID('l',`sounds/crash.mp3`);
}

function playSounds(e){

    let keyPressed=-1;
    if(e.type != 'click')
        keyPressed=e.key;
    //console.log(e.key);
    //console.log(this); It identifies this to the object to which we have added event listener to and not the particular div
    
    let index=-1;
    
    for(let i in arr){
        if(e.target.id == arr[i].key || keyPressed == arr[i].key){
            index=i;
        }
    }
    if(index != -1){
        let beat=new Audio(arr[index].sound);
        beat.play();
    }
}

initialiseDrums();
drumSet.addEventListener('click',playSounds);
document.addEventListener('keypress',playSounds);
