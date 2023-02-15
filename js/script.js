$(document).ready(function() {
    var myItems;

    $.getJSON('team.json', function(data) {
        myItems = data.items;
        console.log(myItems);
        const teamContainer = document.querySelector('#team');
        $.each(data,function(key,value){

            var personName = document.createElement('h2');
            personName.textContent = value.name;

            var personPos = document.createElement('h5');
            personPos.textContent = value.position;

            var personBio = document.createElement('p');
            personBio.textContent = value.bio;

            var personDiv =document.createElement("div");

            const memberDiv = $("<div>").append(memberName, memberPosition, memberBio);
            $("#team").append(memberDiv);


        });

    });
});