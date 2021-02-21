const minify = require('@node-minify/core');
const gcc = require('@node-minify/google-closure-compiler');
const uglifyjs = require('@node-minify/uglify-es');

//const minify = require('@node-minify/core');
const cleanCSS = require('@node-minify/clean-css');



// Using Google Closure Compiler
/*
minify({
  compressor: gcc,
  input: 'foo.js',
  output: 'bar.js',
  callback: function(err, min) {}
});
*/


// Using Promise
var promise = minify({
  compressor: uglifyjs,
  input: [
	//'asset/js/jquery-3.1.1.min.js',
	//'asset/js/popper.min.js',
	//'asset/js/bootstrap.min.js',
	//'asset/js/bootstrap-select.min.js',
	//'asset/js/slick.js',
	'asset/js/app.js',
  ],
  output: 'asset/dest/bootstrap.js'
});

promise.then(function(min) {});


// For css
/*
minify({
  compressor: cleanCSS,
   input: [
	   'asset/css/bootstrap.min.css',
	   'asset/css/bootstrap-select.min.css',
	   'asset/css/slick.css',
	   'asset/css/slick-theme.css',
	   'asset/css/slick-custom.css',
	   'asset/css/styles.css',
   ],
	output: 'asset/dest/styles.css',
  callback: function(err, min) {}
});
*/

// Async/Await
async function doMinify() {
  const min = await minify({ compressor: uglifyjs, input: 'foo.js', output: 'bar.js' });
}


var fs = require('fs');
var path = require('path');

function copyFolderRecursiveSync( source, target ) {
    var files = [];

    // Check if folder needs to be created or integrated
    var targetFolder = path.join( target, path.basename( source ) );
    if ( !fs.existsSync( targetFolder ) ) {
        fs.mkdirSync( targetFolder );
    }

    // Copy
    if ( fs.lstatSync( source ).isDirectory() ) {
        files = fs.readdirSync( source );
        files.forEach( function ( file ) {
            var curSource = path.join( source, file );
            if ( fs.lstatSync( curSource ).isDirectory() ) {
                copyFolderRecursiveSync( curSource, targetFolder );
            } else {
                copyFileSync( curSource, targetFolder );
            }
        } );
    }
}
function copyFileSync( source, target ) {

    var targetFile = target;

    // If target is a directory, a new file with the same name will be created
    if ( fs.existsSync( target ) ) {
        if ( fs.lstatSync( target ).isDirectory() ) {
            targetFile = path.join( target, path.basename( source ) );
        }
    }

    fs.writeFileSync(targetFile, fs.readFileSync(source));
}


//copy folder asset to root folder
var srcDir = 'asset'
var destDir = '/'
//var destDir = '../'

copyFolderRecursiveSync(srcDir, destDir)