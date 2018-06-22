
# Productbase Web Site

Gulp, Jekyll build pipeline for prductbase website: http://productbase.org.uk/

## Contents

*	`content`: jekyll folder containing source, scripts, plugins and distributable copy

*	`versions`: deployable snapshot versions of static site manually taken from time to time

## Installation

Requirements: ruby (2.1.2+), [jekyll](https://jekyllrb.com/) (3.7.2), 

Clone this repository

`cd content`

`npm install` # installs the JS dependencies for gulp pipeline

## Create new website version

Apply edits or new pages in markdown or html format as required into `content/src`

Run `gulp` to generate site (which will appear in `content/dist`)

FTP contents of `content/dist` to production server

