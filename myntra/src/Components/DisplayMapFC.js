import * as React from 'react';


export const DisplayMapFC = () => {
  const mapRef = React.useRef(null);
  const H = window.H;

  function addInfoBubble(map,ui) {
      var group = new H.map.Group();
      map.addObject(group);
      group.addEventListener('tap', function (evt) {
        var bubble =  new H.ui.InfoBubble({
          content: evt.target.getData()
        });
          ui.addBubble(bubble);
        }, false);
      
        addMarkerToGroup(group, {lat:53.439, lng:-2.221},
          '<div><a href="http://www.mcfc.co.uk" target="_blank">Manchester City</a>' +
          '</div><div >City of Manchester Stadium<br>Capacity: 48,000</div>');
      
        addMarkerToGroup(group, {lat:53.430, lng:-2.961},
          '<div><a href="http://www.liverpoolfc.tv" target="_blank">Liverpool</a>' +
          '</div><div >Anfield<br>Capacity: 45,362</div>');
  }
  
  function addMarkerToGroup(group, coordinate, html) {
        var marker = new H.map.Marker(coordinate);
        marker.setData(html);
        group.addObject(marker);
  }

  function addMarkersToMap(map) {
        var parisMarker = new H.map.Marker({lat:48.8567, lng:2.3508});
        map.addObject(parisMarker);

        var romeMarker = new H.map.Marker({lat:41.9, lng: 12.5});
        map.addObject(romeMarker);

        var berlinMarker = new H.map.Marker({lat:52.5166, lng:13.3833});
        map.addObject(berlinMarker);

        var madridMarker = new H.map.Marker({lat:40.4, lng: -3.6833});
        map.addObject(madridMarker);

        var londonMarker = new H.map.Marker({lat:51.5008, lng:-0.1224});
        map.addObject(londonMarker);
  }
  React.useLayoutEffect(() => {
    if (!mapRef.current) return;
    const platform = new H.service.Platform({
        apikey: "{'FryZm2fzns3Xu-QLiinXwPKkWp7bVNKqXa8ARK0Q8MQ'}"
    });
    const defaultLayers = platform.createDefaultLayers();
    const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      center: { lat: 50, lng: 5 },
      zoom: 4,
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
};