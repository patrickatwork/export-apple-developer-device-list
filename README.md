# Export Apple Developer Device List

This script allow you to export the device list from Apple Developer Website. Copy and paste the code in conole of Apple Developer Device List page. It will output all device UDID.

https://developer.apple.com/account/resources/devices/list

```javascript
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
```
