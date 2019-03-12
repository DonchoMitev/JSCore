function addItem() {
    let text = $('#newItemText').val();
    let value = $('#newItemValue').val();
    let menu = $('#menu');

    let optioneElement = $('<option>');
    optioneElement.val(value);
    optioneElement.text(text);

    menu.append(optioneElement);
    reset();

    function reset() {
        $('#newItemText').val('');
        $('#newItemValue').val('');
    }
}