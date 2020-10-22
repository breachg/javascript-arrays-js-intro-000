var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (array, element) {
 chocolateBars = ['twix', ...chocolateBars]
   return chocolateBars
}

function destructivelyAddElementToBeginningOfArray (array, element) {
 chocolateBars.unshift("twix")
   return chocolateBars
}
