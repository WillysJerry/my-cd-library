$(document).ready(function() {
    
    AddCD("Agalloch", "The Mantle", "https://www.metal-archives.com/images/3/5/2/6/3526.jpg?5400");
    AddCD("Bolt Thrower", "...For Victory", "https://dx72k0ec4onep.cloudfront.net/product/1616/283385981478247259-640x640-887923554717.jpg");
    AddCD("Burzum", "Filosofem", "http://www.kolonyrecords.com/store/images/detailed/0/[AllCDCovers]_burzum_filosofem_1996_retail_cd-front.jpg");
    AddCD("Burzum", "Hvis Lyset Tar Oss", "https://4.bp.blogspot.com/_OBR_OdKiYfI/SmdRMwX_DZI/AAAAAAAAAs8/ngTUwRKXIBE/s1600/burzum_-_hvis_lyset_tar_oss.jpg");
    AddCD("Candlemass", "Ancient Dreams", "https://www.metal-archives.com/images/1/2/5/125.jpg");
    AddCD("Candlemass", "Nightfall", "https://www.metal-archives.com/images/1/2/4/124.jpg");
    AddCD("Disgorge", "Cranial Impalement", "https://www.metal-archives.com/images/1/2/2/4/1224.jpg?5504");
    AddCD("Dissection", "Storm Of The Light's Bane", "https://www.metal-archives.com/images/7/6/8/768.jpg?0613");
    AddCD("Mgła", "With Hearts Towards None", "http://shop.season-of-mist.com/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/M/g/Mgla-With-Hearts-Toward-None-43909-1_1.jpg");
    AddCD("Nile", "Annihilation Of The Wicked", "http://www.metal-archives.com/images/7/1/1/9/71195.jpg?4735");
    AddCD("Pallbearer", "Foundations Of Burden", "http://www.angrymetalguy.com/wp-content/uploads/2014/08/Pallbearer_Foundations_Of_Burden.jpg");
    AddCD("Pallbearer", "Sorrow And Extinction", "https://www.profoundlorerecords.com/wp-content/uploads/2012/03/Pallbearer-SorrowAndExtinction.jpg");
    AddCD("Primordial", "The Gathering Wilderness", "https://www.metal-archives.com/images/6/7/0/4/67040.jpg");
    AddCD("ZZ Top", "Eliminator", "http://pldzimages.s3.amazonaws.com/products/850193.png");

    $(".album").click(function() {

        if($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(".album.active").each(function() {
                $(this).removeClass("active");
            });
            
            $(this).addClass("active");
        }

    });
});

function AddCD(artistName, albumName, coverImgUrl) {
    $(".scene").append(GetAlbumHTML(artistName, albumName, coverImgUrl));
}

function GetAlbumHTML(artistName, albumName, coverImgUrl) {
    return `<div class="album">
        <div class="spine">
            <div class="label">
                ` + artistName + ` - ` + albumName + `
            </div>
        </div>
        <img src="` + coverImgUrl + `"/>
        
        <div class="back">
        
        </div>
    </div>`;
}