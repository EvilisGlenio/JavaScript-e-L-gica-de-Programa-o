window.onload = function(){
    
    var map;

    function initialize(){
        var mapProp = {
            center: new google.maps.LatLng(-5.854708, -35.266453),
            scrollwell: false,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        map = new google.maps.Map(document.getElementById("mapa"),mapProp);
    }

    function addMarker(lat,long,icon,content,click){
        var latLng = {'lat':lat,'lng':long};

        var marker = new google.maps.Marker({
            position:latLng,
            map:map,
            icon:icon
        });

        var infoWindow = new google.maps.InfoWindow({
            content:content,
            maxWidth:200,
            pixelOffset: new google.maps.Size(0,20)
        });

        if(click == true){
            google.maps.event.addListener(marker,'click',function(){
                infoWindow.open(map,marker);
            });
        }else{
            infoWindow.open(map,marker);
        }
        
    }

    initialize();

    var conteudo = '<p style="color:black;font-size:13px;font-weight:bolder;padding:10px 5px;border:1px solid black;">Estamos aqui</p>'
    addMarker(-5.854708, -35.266453,'',conteudo,true)

}