function solve() {
    document.getElementsByTagName('button')[0].addEventListener('click', event);

    function event () {
        let input = document.getElementsByTagName('textarea')[0].value;

        let re  = /^[0-9]+/;

        let currentNum = input.match(re)[0];

        input = input.substr(currentNum.length, currentNum);

        let delimiter = input[input.length - 1];
        input = input.slice(0, input.length - 1);

        input = input.split(delimiter);

        console.log(input[1]);

        input[1] = input[1].replace(new RegExp(`[${input[0]}]`, 'g'), '');
        input[1] = input[1].replace(/[#]/g, ' ');
        document.getElementById('output').value = input[1];
    
    }
}