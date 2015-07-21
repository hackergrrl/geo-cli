#!/usr/bin/env node

var gps = require('wifi-location')

gps.getTowers(function(err, towers){
  if (err) {
    console.error(err)
    process.exit(1)
  }
 
  gps.getLocation(towers, function(err, loc){
    if (err) {
      console.error(err)
      process.exit(2)
    }
    if (!loc || !loc.latitude || !loc.longitude) {
      console.error('location not known')
      process.exit(3)
    }
    console.log(loc.latitude + ' ' + loc.longitude)
  })
})

