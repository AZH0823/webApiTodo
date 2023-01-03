 // Initialize and add the map
 function initMap() {
     // The location of Uluru
     const cityhall = {
         lat: 25.051491931654756,
         lng: 121.56509707547268
     };
     // The map, centered at Uluru
     const map = new google.maps.Map(document.getElementById("map"), {
         zoom: 18,
         center: cityhall,
     });
     // The marker, positioned at Uluru
     const marker = new google.maps.Marker({
         position: cityhall,
         map: map,
         title: "台北市政府"
     });
     const info_string =
         `<h3>台北市政府</h3><img src="https:th.bing.com/th/id/R.0cfff145f9fbcac0bf3a6e1ef3c607e3?rik=pk80iyjNNhoufg&pid=ImgRaw&r=0" alt=""><p style='color:red'>我在這喔</p>`
     const infowindow = new google.maps.InfoWindow({
         content: info_string,
         ariaLabel: "Uluru",
     });
     // marker.addListener("click", () => {
     //     infowindow.open({
     //         anchor: marker,
     //         map,
     //     });
     // });

     // Create an array of alphabetical characters used to label the markers.
     const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     // Add some markers to the map.
     const markers = locations.map((position, i) => {
         const label = labels[i % labels.length];
         const marker = new google.maps.Marker({
             position,
             label,
         });

         // markers can only be keyboard focusable when they have click listeners
         // open info window when marker is clicked
         marker.addListener("click", () => {
             infoWindow.setContent(label);
             infoWindow.open(map, marker);
         });
         return marker;
     });
     

     // Add a marker clusterer to manage the markers.
    //  new MarkerClusterer({ markers, map });
    const markerCluster = new markerClusterer.MarkerClusterer({ map, markers });
 }
 const locations = [{
         lat: 25.04827949264334,
         lng: 121.57374169723958
     },
     {
         lat: 25.046141417099847,
         lng: 121.56808078194582
     },
    
 ];
 
 window.initMap = initMap;