(function($) {
  $.fn.renderSurvey = function(options) {
    const $form = $(`
      <form>
        <h1 class="jq-rs-title"></h1>
        <div data-contain="answers"></div>
        <div data-contain="other">
          <div class="jq-rs-pill">
            <label>Other:</label>
            <input type="text" name="other">
          </div>
        </div>
      </form>
    `);
    const $answer = $(`
      <div data-contain="answer" class="jq-rs-pill">
        <label></label>
        <input type="hidden" name="answer">
      </div>
    `);

    $form.find('.jq-rs-title').text(options.question);

    $.each(options.answers, (index, answer) => {
      $answerClone = $answer.clone();
      $answerClone.find('label').text(answer);
      $answerClone.find('[name="answer"]').val(answer);
      $form.find('[data-contain="answers"]').append($answerClone);
    });

    this.append($form);

    return this;
  };
}(jQuery));
