var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray () {
 chocolateBars = ['foo', ...chocolateBars]
   return chocolateBars
}

function destructivelyAddElementToBeginningOfArray () {
 chocolateBars.unshift("foo")
   return chocolateBars
}
