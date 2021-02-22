// Copy and paste the below code in conole of Apple Developer Device List page. It will output all device udid.
// https://developer.apple.com/account/resources/devices/list

var result = 'Name,Identifier,Type,State';
var rows = document.querySelectorAll('.infinite-scroll-component .row[data-platform="IOS"]');
for (var row of rows) {
	let text = '';
	for (var span of row.getElementsByTagName('span')) {
		text += span.innerText + ',';
	}
	result += '\n' + text + (row.classList.contains('disabled') ? 'Disable' : 'Active');
}
console.log(result);
