// Registering Service Worker

//Checking if serviceWorker is supported by the browser
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js').then(function() {
		console.log('Service Worker registered!');
	}).catch(function() {
		console.log('Service Worker registration!');
	});
}
