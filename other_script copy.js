function my_reverse(word){
    var n = word.length - 1;
    var i = n;
    var rev_word = '';

    for(; i >= 0; i--) {
        rev_word = rev_word.concat("", word.substr(i,1));

    };

    var str;
    str = word + ' in reverse is ' + rev_word;
    
    return(str);
};

function calc(){
    var t = document.getElementById("target");
    t.innerHTML = my_reverse(document.getElementById('word').value);
    
}

