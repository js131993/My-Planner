(function ($) {
  const containerElement = $(".container-fluid");
  let hourObject = dayjs().hour();
  for (let i = 9; i < 20; i++) {
    let notes = localStorage.getItem(i) || ""
    const hourDiv = `<div id="hour-${i}"  class="row time-block" hour="${i}">
                    <div class="col-2 col-md-1 hour text-center py-3"> ${dayjs()
                      .hour(i)
                      .format("h A")} </div>
                    <textarea class="col-8 col-md-10 description" rows="3" id="notes-${i}"> ${notes} </textarea>
                    <button class="btn saveBtn col-2 col-md-1" aria-label="save" onclick= "saveNotes(${i})">
                        <i class="fas fa-save" aria-hidden="true"></i>
                    </button>
                </div>`;
    $(containerElement).append(hourDiv);
  }
  setTimeout(function(){
    $(".time-block").each(function () {
      var id = parseInt($(this).attr("hour"));
      console.log(id,$(this))
      if (hourObject < id) {
        $(this).addClass("future");
      } else if (hourObject == id) {
        $(this).addClass("present");
      } else {
        $(this).addClass("past");
      }
    });
  }, 1000);
  
})(jQuery);

function saveNotes(hour) {
  var el = $(`#notes-${hour}`)
  var notes = el.val()
  localStorage.setItem(hour, notes)

  // save to localstorage
  
} 
//each element runs function on each element on the list

// }
  // colors();
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

