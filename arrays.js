var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
var array = chocolateBars
var element = 'twix'


function addElementToBeginningOfArray (array, element) {
 array = [element, ...array]
   return array
}

function destructivelyAddElementToBeginningOfArray (array, element) {
 array.unshift = (element)
   return array
}
