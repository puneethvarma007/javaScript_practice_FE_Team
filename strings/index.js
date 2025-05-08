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
    abbrivate_Name(str){
        var name= str.trim().split(' ');
        if(name.length > 0){
            return console.log((name[0] + ' ' +  name[1]?.charAt(0)));
        }
        return console.log(name[0]);
    }
    // 6.Write a JavaScript function that hides email addresses to prevent unauthorized access.
    protect_emai(str){
        let avg,spliteed,part1,part2;
        spliteed = str.split('@');
        part1 = spliteed[0];
        avg = part1.length/2;
        part1 = part1.substring(0,(part1.length - avg))
        part2 = spliteed[1];

        return console.log(part1 + '...@' + part2);
    }
}

const stringPractice = new StringPractice();

// stringPractice.is_string('hello');
// stringPractice.is_string([1,3,4]);


// stringPractice.is_blank('');
// stringPractice.is_blank('hii');

// stringPractice.string_to_array('hello world')
    
// stringPractice.truncate_string("Robin Singh",4)

// stringPractice.abbrivate_Name('puneeth Varma');
// stringPractice.abbrivate_Name('puneeth k');

stringPractice.protect_emai('hello@gmail.com');