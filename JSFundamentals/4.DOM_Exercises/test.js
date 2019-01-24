function deleteValue(param, callback) {
    while(param++ < 1000000);
    callback();
}

function doMagic() {
    deleteValue(5, function() {
        console.log('Successfully deleted!');
    })
}

doMagic();

