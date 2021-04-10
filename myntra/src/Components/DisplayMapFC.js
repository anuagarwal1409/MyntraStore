import * as React from 'react';


export const DisplayMapFC = () => {
  const mapRef = React.useRef(null);
  const H = window.H;

  function addInfoBubble(map,ui) {
    var group = new H.map.Group();
  
    map.addObject(group);
  
    // add 'tap' event listener, that opens info bubble, to the group
    group.addEventListener('tap', function (evt) {
      // event target is the marker itself, group is a parent event target
      // for all objects that it contains
      var bubble =  new H.ui.InfoBubble(evt.target.getGeometry(), {
        // read custom data
        content: evt.target.getData()
      });
      // show info bubble
      ui.addBubble(bubble);
    }, false);
  
    // addMarkerToGroup(group, {lat:23.199437029438037, lng:77.37230955928737},
    //   '<div><a href="http://www.mcfc.co.uk" target="_blank">Manchester City</a>' +
    //   '</div><div >City of Manchester Stadium<br>Capacity: 48,000</div>');
  
    // addMarkerToGroup(group, {lat:23.20468257679967, lng:81.49930150389847},
    //   '<div><a href="http://www.liverpoolfc.tv" target="_blank">Liverpool</a>' +
    //   '</div><div >Anfield<br>Capacity: 45,362</div>');
  
  }
  
  function addMarkerToGroup(group, coordinate, html) {
        var marker = new H.map.Marker(coordinate);
        marker.setData(html);
        group.addObject(marker);
  }

  function addMarkersToMap(map) {
        var parisMarker = new H.map.Marker({lat:23.199437029438037, lng:77.37230955928737});
        map.addObject(parisMarker);

        var romeMarker = new H.map.Marker({lat:23.20468257679967, lng: 81.49930150389847});
        map.addObject(romeMarker);

        var berlinMarker = new H.map.Marker({lat:21.155524201311838, lng:79.09382643838138});
        map.addObject(berlinMarker);

        var madridMarker = new H.map.Marker({lat:21.551219968915166, lng: 83.94495429666122});
        map.addObject(madridMarker);

        var londonMarker = new H.map.Marker({lat:12.9354658314237, lng:77.59906802777874});
        map.addObject(londonMarker);

        var aMarker = new H.map.Marker({lat:12.418646541698912, lng:77.08694089292962});
        map.addObject(aMarker);

        var bMarker = new H.map.Marker({lat:13.093068733391885, lng:80.3535155034048});
        map.addObject(bMarker);

        var cMarker = new H.map.Marker({lat:11.573546165238625, lng:77.4448591807503});
        map.addObject(cMarker);

        var dMarker = new H.map.Marker({lat:17.44844835879614, lng:78.49807919190246});
        map.addObject(dMarker);

        var eMarker = new H.map.Marker({lat:21.195478738898284, lng:72.84652656608034});
        map.addObject(eMarker);

        var eMarker = new H.map.Marker({lat:18.543832574199254, lng:73.89899367126982});
        map.addObject(eMarker);

        var fMarker = new H.map.Marker({lat:17.772447207636834, lng:83.37549140927077});
        map.addObject(fMarker);


  }
  React.useLayoutEffect(() => {
    if (!mapRef.current) return;
    const platform = new H.service.Platform({
        apikey: 'qlI2mORyOOQLxKbBiMMz-8v0GPuUY4IJ9OQYHibHjsA'
    });
    const defaultLayers = platform.createDefaultLayers();
    const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      center: { lat: 23, lng: 79 },
      zoom: 7,
      pixelRatio: window.devicePixelRatio || 1
    });
    

    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));
    var ui = H.ui.UI.createDefault(hMap, defaultLayers);
    addInfoBubble(hMap,ui);

    window.onload = function () {
      addMarkersToMap(hMap);
    }
   
    return () => {
      hMap.dispose();
    };
  }, [mapRef]);

  return <div className="map" ref={mapRef} style={{ height: "500px" }} />;
}