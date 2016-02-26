$(document).ready(function(){
	console.log("dom loaded");
	ymaps.ready(init);
	var myMap;

	function init(){
		myMap = new ymaps.Map("map", {
			center: [28.39722, 36.57889],
			zoom: 2,
			controls: ['zoomControl', 'typeSelector',  'fullscreenControl']
			},

		objectManager = new ymaps.ObjectManager({
				clusterize: true,
				gridSize: 32
			})
		);

		objectManager.objects.options.set('preset', 'islands#darkOrangeIcon');
		objectManager.clusters.options.set('preset', 'islands#darkOrangeClusterIcons');
		myMap.geoObjects.add(objectManager);

		$.ajax({
			url: "magic/data.json"
		}).done(function(data) {
			objectManager.add(data);
		});

	}
	console.log("map loaded");
});
