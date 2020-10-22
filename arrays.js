var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray () {
  var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
 chocolateBars = ['twix', ...chocolateBars]
   return chocolateBars
}

function destructivelyAddElementToBeginningOfArray () {
 chocolateBars.unshift("twix")
   return chocolateBars
}
