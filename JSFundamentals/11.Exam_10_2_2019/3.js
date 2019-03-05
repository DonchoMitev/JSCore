function solve (arr) {
    
    let regex = /^<([a-z0-9]+)>(.*?)<\/\1>$/g;
    let final = '';
    for (let i = 0; i < arr.length; i++) {
        let text = arr[i];
       
        let result = '';
        if (regex.test(text)) {
            result = text.match(regex)[0];
            
        }

        
        final += result.replace(/(<)(script[^>]*>[^<]*(?:<(?!\/script>)[^<]*)*<\/script>|\/?\b[^<>]+>|!(?:--\s*(?:(?:\[if\s*!IE]>\s*-->)?[^-]*(?:-(?!->)-*[^-]*)*)--|\[CDATA[^\]]*(?:](?!]>)[^\]]*)*]])>)/g, ' ');
        
       
    }
    
    console.log(final.replace(/\s{2,}/g, ' ').trim());
    
}

solve (['<div><p>This</p> is</div>',
'<div><a>perfectly</a></div>',
'<divs><p>valid</p></divs>',
'<div><p>This</div></p>',
'<div><p>is not</p><div>']
);