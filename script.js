
window.onload = function() {
    fetchOverview();

};

function fetchOverview() {
    
    fetch('https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6')
    .then(data => {
    return data.json();
    })
    .then(post => {
        console.log(post)


    var itemswrapper = document.getElementById('itemswrapper')
    

            for (let index = 0; index < 25; index++){
            
            var itemcontainer = document.createElement('div');
            itemcontainer.className = 'col-md-4';

            //card
            var itemcard = document.createElement('div');
            itemcard.className = 'card mb-5 shadow-sm card-body align-items-center';
            
                //p
                var title = document.createElement('h3')
                title.innerHTML = post[index].name;

                //img
                var image = document.createElement('img')
                image.src = post[index].image_url;
                image.style.width = "60px";
                image.style.height = "240px";
                image.style.objectFit = "cover";
                image.style.margin = "20px 0px 30px 0px";

                //body
                var button = document.createElement('button');
                // button.addEventListener("click", displayInfo(post[index].id));
                button.innerText = 'Read more'
                button.className = 'btn btn-primary stretched-link bg-light'
                button.id = post[index].id;
                button.style.width = "130px";
                button.style.color = "rgba(17,17,17)";
                button.style.borderColor = "rgba(17,17,17)";
                button.style.borderRadius = "25px";
                button.setAttribute("data-toggle", "modal");
                button.setAttribute("data-target", "#exampleModalCenter")



            itemcard.appendChild(title);
            itemcard.appendChild(image);
            itemcard.appendChild(button)
            itemcontainer.appendChild(itemcard);
            itemswrapper.appendChild(itemcontainer)


            }

    
        // ADD EVENTLISTENER TO ALL BUTTONS
        document.querySelectorAll('.btn-primary').forEach(item => {
            item.addEventListener('click', event => {
            
                displayInfo(event.target.id)
                // console.log(event.target.id)

            })
        })       

    });

}


function displayInfo(id) {

 

        // SHOW INFO MODAL
        fetch('https://api.punkapi.com/v2/beers/' + id)
        .then(data => {
            return data.json();

        })
        .then(beer => {
        
            // console.log(beer[0].name)
            var modalTitle = document.getElementById('exampleModalLongTitle')
            modalTitle.innerText = beer[0].name
            
            var modalBody = document.getElementById('modalBody')
            modalBody.innerText = beer[0].description;
            
        })


    

}


    
