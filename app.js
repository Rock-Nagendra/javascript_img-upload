let uploadform=document.querySelector('#uplaod-form');

uploadform.addEventListener('submit',function(){

    let imageFile=document.querySelector('#customFile').files[0];

    let imageName=imageFile.name;

    let reader= new FileReader();

    reader.readAsDataURL(imageFile);

    reader.addEventListener('load',function()
    {
        
        if(this.result && localStorage)
        {

            let imageList=localStorage.getItem('images') ? JSON.parse(localStorage.getItem('images')) : [];

            imageList.push(this.result);

            localStorage.setItem('images',JSON.stringify(imageList));
        }
    });

    displayImage();
    
});

//display images

let displayImage= () => {

    
    let imageList=localStorage.getItem('images') ? JSON.parse(localStorage.getItem('images')) : [];

    if(imageList.length !== 0)
    {
        let cardImgs='';

        for(let img of imageList )
        {
            
                cardImgs+=`<div class="col-md-3 mt-3">
                       <div class="card card-img" style="height:500px">
                         <img src="${img}" alt="" class="img-fluid">
                           <div class="card-body">
                             <div class="card-title">
                               <h3 class="card-title">Title</h3>
                                 <p class="card-text">Download the perfect natural pictures. Find over 100+ of the best free natural images. Free for commercial use ✓ No attribution required ✓ Copyright-free.</p>
                             </div>
                          </div>
                       </div>
                      </div>`;

            
        }

        document.querySelector('#card-row').innerHTML=cardImgs;
    }
}

displayImage();

let removebtn=document.querySelector('#remove-btn');

removebtn.addEventListener('click',function()
{
    localStorage.removeItem('images');

    displayImage();
});