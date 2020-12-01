$('#q1-block').hide()
$('.q2-block').hide()
$('.q3-block').hide()
$('.q4-block').hide()
$('.anousone-block').hide()
$('.result-block').hide()
$('.teachersroom-block').hide()
$('#beginning').hide()
$('#dead').hide()
$('#alive').hide()

$('.letsplay').click(function() {
    $('#q1-block').show()
})

$('#escape').click(function() {
    $('.letsplay').hide()
    $('#q1-block').hide()
    $('.q2-block').show()
})
$('#brave').click(function() {
    $('.letsplay').hide()
    $('.q2-block').hide()
    $('.anousone-block').show()
})
$('#key').click(function() {
    $('.letsplay').hide()
    $('.anousone-block').hide()
    $('.teachersroom-block').show()
})

$('#chill').click(function() {
    $('.letsplay').hide()
    $('.teachersroom-block').hide()
    $('.q3-block').show()

})

$('#live').click(function() {
    $('.letsplay').hide()
    $('.q3-block').hide()
    $('#alive').show()

})

$('#die').click(function() {
    $('.letsplay').hide()
    $('.q3-block').hide()
    $('#dead').show()

})

$('#scared').click(function() {
    $('.letsplay').hide()
    $('.q2-block').hide()
    $('.q4-block').show()

})

$('#kahoot').click(function() {
    $('.letsplay').hide()
    $('.q4-block').hide()
    $('.result-block').show()
    $('#nicolasending').hide()
})

$('#lose').click(function() {
    $('.letsplay').hide()
    $('#lose').hide()
    $('#nicolasending').show()
})

