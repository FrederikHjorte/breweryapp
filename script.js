
window.onload = function() {
    fetchOverview();
};

function fetchOverview() {
    
    fetch('https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6')
    .then(data => {
    return data.json();
    })
    .then(post => {
    console.log(post);


    var itemswrapper = document.getElementById('itemswrapper')
    

            for (let index = 0; index < 25; index++){
            
            var itemcontainer = document.createElement('div');
            itemcontainer.className = 'col-md-4';

            //card
            var itemcard = document.createElement('div');
            itemcard.className = 'card mb-4 shadow-sm';
            itemcard.innerHTML = post[index].name;

                //img
                var image = document.createElement('img')
                image.src = post[index].image_url;
                image.style.width = "40px";
                image.style.height = "160px";
                image.style.objectFit = "cover";

                //body



            itemcard.appendChild(image);
            itemcontainer.appendChild(itemcard);
            itemswrapper.appendChild(itemcontainer)


            }


    

    });

    
    

}