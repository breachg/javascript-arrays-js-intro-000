var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
var element = 'twix'


function addElementToBeginningOfArray (chocolateBars, element) {
 chocolateBars = ['element', ...chocolateBars]
   return chocolateBars
}

function destructivelyAddElementToBeginningOfArray () {
 chocolateBars.unshift("twix")
   return chocolateBars
}
