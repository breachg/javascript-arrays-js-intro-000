var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (array, element) {
 chocolateBars = ['foo', ...chocolateBars]
   return chocolateBars
}

function destructivelyAddElementToBeginningOfArray () {
 chocolateBars.unshift("twix")
   return chocolateBars
}
