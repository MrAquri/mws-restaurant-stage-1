// Registering Service Worker

//Checking if serviceWorker is supported by the browser
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js').then(function() {
		console.log('Registration worked!');
	}).catch(function() {
		console.log('Registration failed!');
	});
}
