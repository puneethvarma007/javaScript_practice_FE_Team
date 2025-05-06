class StringPractice{
    constructor(str){
        this.text = str;
    }
    // 1 . Write a JavaScript function to check whether an 'input' is a string or not.
    is_string(str){
    console.log(typeof(str) === 'string' ? true : false);
    }
    // 2. Write a JavaScript function to check whether a string is blank or not.
    is_blank(str){
    console.log(str.length > 0 ? true : false)
    }
    // 3. Write a JavaScript function to split a string and convert it into an array of words.
    string_to_array(str){
        console.log(str.split(' '))
    }
    // 4. Write a JavaScript function to extract a specified number of characters from a string.
    truncate_string(str,i){
        console.log(str.slice(0,i));
    }
    // 5. Abbreviate Name
}

const stringPractice = new StringPractice();

// stringPractice.is_string('hello');
// stringPractice.is_string([1,3,4]);


// stringPractice.is_blank('');
// stringPractice.is_blank('hii');

// stringPractice.string_to_array('hello world')
    
// stringPractice.truncate_string("Robin Singh",4)