// Add a class of special to all of the elements at the second level of the nested list.
$('#selected-plays ul li ul li').addClass('special');

// Add a class of year to all of the table cells in the third column of a table.
$('table tr td:nth-child(3)').addClass('year');

// Add the class of special to the first table row that has the word Tragedy in it.
$("table:first tr td:contains('Tragedy')").addClass('special');

// Challenge: Select all of the list items containing a link . Add the class afterlink to the sibling list items that follow the ones selected.
$('li a').parent().nextAll().addClass('afterlink');

// Challenge: Add the class tragedy to the closest ancestor (ul) of any .pdf link.
$('a[href$=".pdf"]').closest('ul').addClass('tragedy');
