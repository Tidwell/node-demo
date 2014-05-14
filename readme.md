- quick overview (4a474948339be3dc3ae692fec6d77b7f48046722)
	- Single threaded
	- how it differs from browser js
	- creating the server
	- "core" standard lib (file access, http servers, etc)
	- request/response - callback paradigm (error object vs throw)
	- no global

- using libraries (30fd5702f9a766e44c2beaad9a4e93dd342cfb84)
	- require
	- package.json & npm
	- connect and express (middleware framework)

- organizing with require (2b29b169fd9a2418190e985f2c19cc133b88fde2)
	- requiring only specific methods
	- avoids callback hell (82f86268a4fc7627bd24a9e2d2b065743012f5bc)

- static file server (a71e5f462546d95871f86d699a71073633a77402)
	- multiple paradigms, single application (dynamic routes, static server)

- configuration
	- its just json (e339982ef724716f9952c9809cf4f34f028ada4f)
	- easily swap to multiple envs using cli arguments (846eb568e0d4052198f35329d6fc65acdb9c18d6)
	- optimist for more robust cli argument handling