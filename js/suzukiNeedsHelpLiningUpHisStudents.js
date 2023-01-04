// You will be given a string of student names. Sort them and return a list of names in descending order.

// Here is an example input:

// string = 'Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi'
// Here is an example return from your function:

//  lst = ['Takehiko',
//         'Takayuki',
//         'Takahiro',
//         'Takeshi',
//         'Takeshi',
//         'Takashi',
//         'Tadashi',
//         'Takeo',
//         'Takao']
// Names of equal length will be returned in reverse alphabetical order (Z->A) such that:

// string = "xxa xxb xxc xxd xa xb xc xd"
// Returns

// ['xxd', 'xxc', 'xxb', 'xxa', 'xd', 'xc', 'xb', 'xa']

function lineupStudents(students){
  
    return students.trim().split(' ').sort((a,b)=> b.length -a.length || b.localeCompare(a))
  }