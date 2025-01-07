function letterFinder(word, match){
    
for(var i = 0 ; i <= word.length -1  ; i++){

if ( word[i] === match){

    console.log("found the", match, "at", i)

}else{ 

    console.log("---no match found at:", i)

}}};

letterFinder("test", "t");


