
module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-processhtml');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.initConfig({
	  
		pkg: grunt.file.readJSON('package.json'),
		
		uglify: {
			dist: {
				files: {			  
					'build/GameFindr.js': [
						'src/Controllers/setup.js',
						'src/Controllers/route.js',
						'src/Controllers/services.js',
						'src/Controllers/controllers.js'
					]
				}
			}
		},
		
		concat: {
			dist: {
				files: {
					'dist/GameFindr.js': [
						'node_modules/angular/angular.min.js',
						'node_modules/angular-route/angular-route.min.js',
						'src/Controllers/youtube.js',
						'build/GameFindr.js'
					]
				}
			}
		},
		
		copy: {
			dist: {
				files: [
					{ expand: true, src: ['Views/index.html'], dest: 'dist/', cwd: 'src' },
					{ expand: true, src: ['Views/home.html'], dest: 'dist/', cwd: 'src' },
					{ expand: true, src: ['Views/results.html'], dest: 'dist/', cwd: 'src' },
					{ expand: true, src: ['Views/video.html'], dest: 'dist/', cwd: 'src' },
					{ expand: true, src: ['Views/favs.html'], dest: 'dist/', cwd: 'src' },
					{ expand: true, src: ['img/tetris.jpg'], dest: 'dist/', cwd: 'src' },
					{ expand: true, src: ['styles.css'], dest: 'dist/', cwd: 'src' },
					{ expand: true, src: ['partials/photos.html'], dest: 'dist/', cwd: 'src' },
					{ expand: true, src: ['partials/details.html'], dest: 'dist/', cwd: 'src' }
				]
			}
		},
		
		processhtml: {
			dist: {
				files: [
					{ expand: true, src: ['Views/index.html'], dest: 'dist/', cwd: 'src' }
				]
			}
		},
		
		connect: {
			'dev-server': {
				options: {
					keepalive: true
				}
			}
		}
		
	});

	grunt.registerTask('default', ['uglify:dist', 'concat:dist', 'copy:dist', 'processhtml:dist' ]);
	grunt.registerTask('build', ['uglify:dist', 'concat:dist', 'copy:dist', 'processhtml:dist', 'connect:dev-server' ]);
  
};