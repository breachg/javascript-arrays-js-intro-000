var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
var array = chocolateBars
var element = 'twix'
var array = [element, ...array]

function addElementToBeginningOfArray (array, element) {
 array = [element, ...array]
   return array
}

function destructivelyAddElementToBeginningOfArray (array, element) {
 chocolateBars.unshift("twix")
   return chocolateBars
}
