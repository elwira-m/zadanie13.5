process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
			// metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if(input !== null) {
			// teraz jest sens cokolwiek wyświetlać - użytkownik wpisał coś
        var instruction = input.toString().trim();
		switch (instruction) {
			case 'exit':
				process.stdout.write('Quitting app!');
				process.exit();
			break;
			case 'language':
				console.log(process.env.LANG);
			break;
			case 'version':
				console.log(process.versions.node);
			break;
			default:
				process.stderr.write('Wrong instruction!\n');
		}
	}
});

var OSinfo = require('./modules/OSinfo');
OSinfo.print();
