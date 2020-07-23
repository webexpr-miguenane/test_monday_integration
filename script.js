//Users info drop down
$( document ).ready(function() {
    document.getElementById('dd-content').style.minWidth = (document.getElementById('dd-toggle').offsetWidth+35)+'px';
});

//Sidebar nav drop downs
console.log('i got you homie');
$('#medias').click( function(e) {
    e.preventDefault();
    document.getElementById("medias_dd").classList.toggle("show");
    if ($('#medias').children().children().children().hasClass('fa-chevron-right'))
    {
        $('#medias').children().children().children().removeClass('fa-chevron-right');
        $('#medias').children().children().children().addClass('fa-chevron-down');
    }
    else
    {
        $('#medias').children().children().children().addClass('fa-chevron-right');
        $('#medias').children().children().children().removeClass('fa-chevron-down');
    }
    return false;
});

$('#folders').click( function(e) {
    e.preventDefault();
    document.getElementById("folders_dd").classList.toggle("show");
    if ($('#folders').children().children().children().hasClass('fa-chevron-right'))
    {
        $('#folders').children().children().children().removeClass('fa-chevron-right');
        $('#folders').children().children().children().addClass('fa-chevron-down');
    }
    else
    {
        $('#folders').children().children().children().addClass('fa-chevron-right');
        $('#folders').children().children().children().removeClass('fa-chevron-down');
    }

    return false;
});

$('#articles').click( function(e) {
    e.preventDefault();
    document.getElementById("articles_dd").classList.toggle("show");
    if ($('#articles').children().children().children().hasClass('fa-chevron-right'))
    {
        $('#articles').children().children().children().removeClass('fa-chevron-right');
        $('#articles').children().children().children().addClass('fa-chevron-down');
    }
    else
    {
        $('#articles').children().children().children().addClass('fa-chevron-right');
        $('#articles').children().children().children().removeClass('fa-chevron-down');
    }
    return false;
});

$('#categories').click( function(e) {
    e.preventDefault();
    document.getElementById("categ_dd").classList.toggle("show");
    if ($('#categories').children().children().children().hasClass('fa-chevron-right'))
    {
        $('#categories').children().children().children().removeClass('fa-chevron-right');
        $('#categories').children().children().children().addClass('fa-chevron-down');
    }
    else
    {
        $('#categories').children().children().children().addClass('fa-chevron-right');
        $('#categories').children().children().children().removeClass('fa-chevron-down');
    }
    return false;
});

$('#users').click( function(e) {
    e.preventDefault();
    document.getElementById("users_dd").classList.toggle("show");
    if ($('#users').children().children().children().hasClass('fa-chevron-right'))
    {
        $('#users').children().children().children().removeClass('fa-chevron-right');
        $('#users').children().children().children().addClass('fa-chevron-down');
    }
    else
    {
        $('#users').children().children().children().addClass('fa-chevron-right');
        $('#users').children().children().children().removeClass('fa-chevron-down');
    }
    return false;
});



// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    console.log('test');
    if (!event.target.matches('.ddbtn')) {
        var dropdowns = document.getElementsByClassName("drop-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                $(openDropdown).prev().children().children().children().removeClass('fa-chevron-down');
                $(openDropdown).prev().children().children().children().addClass('fa-chevron-right');
            }
        }
    }
};