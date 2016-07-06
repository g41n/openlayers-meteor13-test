angular.module('starter')
    .controller('MapCtrl', ['$scope', function($scope) {

        var mc = this;

        mc.initMap = initMap;

        function initMap() {
            $scope.view = new ol.View({
                // the view's initial state
                center: ol.proj.fromLonLat([12.5, 41.9]),
                zoom: 6
            });
            $scope.mapSource = new ol.source.OSM();
            //$scope.mapSource.setUrl("https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png");
            $scope.mapSource.setUrl("map/{a-c}.{z}.{x}.{y}.png");
            $scope.map = new ol.Map({
                layers: [
                    new ol.layer.Tile({
                        preload: 4,
                        source: $scope.mapSource
                    })
                ],
                // Improve user experience by loading tiles while animating. Will make
                // animations stutter on mobile or slow devices.
                loadTilesWhileAnimating: true,
                target: 'map',
                controls: [],
                interactions: ol.interaction.defaults({
                    mouseWheelZoom: false,
                    doubleClickZoom: false,
                    pinchZoom: false,
                    pinchRotate: false,
                    dragPan: false
                }),
                view: $scope.view
            });
            $scope.map.setSize([512, 704]);
        }
    }]);
