var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray () {
 array = ['foo', ...array]
   return array
}

function destructivelyAddElementToBeginningOfArray () {
 chocolateBars.unshift("foo")
   return chocolateBars
}
