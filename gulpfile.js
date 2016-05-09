var eslint                 = require('gulp-eslint'),
    gulp                   = require('gulp')

gulp.task('lint', function () {

    return gulp.src([
      'app-generator.js',
      'bucket-generator.js',
      'document-generator.js',
      'field-generator.js',
      'index.js',
      'organization-generator.js',
      'taxonomy-generator.js',
      'template-generator.js',
      'user-generator.js'
    ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError())

})
