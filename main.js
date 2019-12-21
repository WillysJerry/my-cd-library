
var albums = [];
var albumIndex = 0;

$(document).ready(function() {
    
    AddCD("Agalloch", "The Mantle", "https://www.metal-archives.com/images/3/5/2/6/3526.jpg?5400");
    AddCD("Bathory", "Blood Fire Death", "https://kanon666.files.wordpress.com/2009/07/bathory_blood_fire_death-f2.jpg");
    AddCD("Bolt Thrower", "...For Victory", "https://dx72k0ec4onep.cloudfront.net/product/1616/283385981478247259-640x640-887923554717.jpg");
    AddCD("Burzum", "Filosofem", "https://upload.wikimedia.org/wikipedia/commons/a/a1/Filosofem.jpg");
    AddCD("Burzum", "Hvis Lyset Tar Oss", "https://4.bp.blogspot.com/_OBR_OdKiYfI/SmdRMwX_DZI/AAAAAAAAAs8/ngTUwRKXIBE/s1600/burzum_-_hvis_lyset_tar_oss.jpg");
    AddCD("Candlemass", "Ancient Dreams", "https://www.metal-archives.com/images/1/2/5/125.jpg");
    AddCD("Candlemass", "Nightfall", "https://www.metal-archives.com/images/1/2/4/124.jpg");
    AddCD("Conan", "Revengeance", "http://imagescdn.juno.co.uk/full/CS595499-01A-BIG.jpg");
    AddCD("Cryptopsy", "None So Vile", "https://1.bp.blogspot.com/_nO-SKkw2jcU/S7yJEAz6-CI/AAAAAAAAAFY/t0qPylFqJiw/s1600/Cryptopsy+-+None+So+Vile+-+Front.jpg");
    AddCD("Disgorge", "Cranial Impalement", "https://www.metal-archives.com/images/1/2/2/4/1224.jpg?5504");
    AddCD("Dissection", "Storm Of The Light's Bane", "https://www.metal-archives.com/images/7/6/8/768.jpg?0613");
    AddCD("Drudkh", "Blood In Our Wells", "https://www.metal-archives.com/images/1/1/2/3/112304.jpg?3429");
    AddCD("Evoken", "Antithesis Of Light", "http://www.metallibrary.ru/bands/discographies/images/evoken/pictures/05_antithesis_of_light.jpg");
    AddCD("Finntroll", "Jaktens Tid", "http://images2.fanpop.com/image/photos/13800000/Finntroll-viking-pagan-and-folk-metal-13860840-709-709.jpg");
    AddCD("Iron Maiden", "Powerslave", "https://4.bp.blogspot.com/-qPTcVE7KvfA/UAEgDvjiBHI/AAAAAAAAAhM/hrp0z6pX3ZA/s1600/1000x1000.jpg");
    AddCD("Mgła", "With Hearts Towards None", "http://shop.season-of-mist.com/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/M/g/Mgla-With-Hearts-Toward-None-43909-1_1.jpg");
    AddCD("Nile", "Annihilation Of The Wicked", "http://www.metal-archives.com/images/7/1/1/9/71195.jpg?4735");
    AddCD("Pallbearer", "Foundations Of Burden", "http://www.angrymetalguy.com/wp-content/uploads/2014/08/Pallbearer_Foundations_Of_Burden.jpg");
    AddCD("Pallbearer", "Sorrow And Extinction", "https://www.profoundlorerecords.com/wp-content/uploads/2012/03/Pallbearer-SorrowAndExtinction.jpg");
    AddCD("Primordial", "The Gathering Wilderness", "https://www.metal-archives.com/images/6/7/0/4/67040.jpg");
    AddCD("Primordial", "To The Nameless Dead", "http://deformeathing.com/media/catalog/product/cache/1/image/520x520/9df78eab33525d08d6e5fb8d27136e95/p/r/primordial_to_the_nameless_cd.jpg");
    AddCD("Skinless", "Trample The Weak Hurdle The Dead", "https://f1.bcbits.com/img/a1294173663_10.jpg");
    AddCD("The Flight Of Sleipnir", "Skadi", "https://metalitalia.com/wp-content/uploads/2017/01/The-Flight-of-Sleipnir-Skadi-2017.jpg");
    AddCD("Thyrfing", "Vansinnesvisor", "https://www.metal-archives.com/images/1/5/0/0/1500.jpg");
    AddCD("ZZ Top", "Eliminator", "http://pldzimages.s3.amazonaws.com/products/850193.png");

    $(".album").click(function() {
        onCdClick(this);
    });
});

function AddCD(artistName, albumName, coverImgUrl) {
    $(".scene").append(GetAlbumHTML(artistName, albumName, coverImgUrl, albumIndex));
    albums[albumIndex] = {
        index: albumIndex,
        artistName: artistName,
        albumName: albumName,
        coverImgUrl: coverImgUrl
    };
    albumIndex++;

}

function GetAlbumHTML(artistName, albumName, coverImgUrl, i) {
    return `<div class="album" id="` + i + `">
        <div class="spine border">
            <div class="label">
                ` + artistName + ` - ` + albumName + `
            </div>
            <div class="overlay"></div>
        </div>
        <div class="front">
            <img class="border" src="` + coverImgUrl + `"/>
            <div class="overlay"></div>
        </div>
        <div class="back">
        
        </div>

        <div class="opposite-spine border"></div>
    </div>`;
}

function onCdClick(cd) {
    if($(cd).hasClass("active")) {
        $(cd).removeClass("active");
        setInfo(null);
    } else {
        $(".album.active").each(function(i, e) {
            $(e).removeClass("active");
        });
        
        $(cd).addClass("active");
        setInfo(cd);
    }
}

function setInfo(cd) {
    var info = $(".info");

    if(cd === null) {
        info.addClass("hidden");
        return;
    } else {
        info.removeClass("hidden");
        var i = $(cd).attr("id");
        info.children("#info-artist").html(albums[i].artistName);
        info.children("#info-album").html(albums[i].albumName);
    }

}
