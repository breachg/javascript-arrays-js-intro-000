var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

var array[1,2]

function addElementToBeginningOfArray () {
 array = ['foo', ...array]
   return array
}

function destructivelyAddElementToBeginningOfArray () {
 chocolateBars.unshift("foo")
   return chocolateBars
}
