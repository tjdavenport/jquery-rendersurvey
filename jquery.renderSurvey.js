(function($) {
  $.fn.renderSurvey = function(options) {
    const $form = $(`
      <form method="POST" action="${options.submitUrl}">
        <h1 class="jq-rs-title">${options.question}</h1>
        <div data-contain="answers"></div>
        <div style="clear:both;"></div>
        <div data-contain="other">
          <div class="jq-rs-pill jq-rs-centered">
            <table>
              <tr>
                <td>
                  <label>Other:</label>
                </td>
                <td style="vertical-align:middle;width:100%;padding-left:10px;padding-right:15px;">
                  <input type="text" name="other_answer">
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div data-contain="submit">
          <button disabled="disabled" class="jq-rs-btn jq-rs-centered" type="submit">Submit</button>
        </div>
      </form>
    `);
    const $answer = $(`
      <div data-value="" data-selected="0" data-contain="answer" class="jq-rs-pill jq-rs-pill-floated">
        <label></label>
      </div>
    `);
    const $selected = $(`<div data-role="selected" class="jq-rs-selected"></div>`);

    function formIsValid() {
      const $selected = $form.find('[data-selected="1"]');
      const $other = $form.find('[data-contain="other"] [name="other_answer"]');
      const atLeastOneSelect = !!$selected.length;
      const otherSpecified = !!$other.val();

      if (atLeastOneSelect || otherSpecified) {
        return true;
      } else {
        return false;
      }
    }

    function toggleForm(enabled) {
      if (enabled) {
        $form.find('[data-contain="submit"] [type="submit"]').removeAttr('disabled');
      } else {
        $form.find('[data-contain="submit"] [type="submit"]').attr('disabled', 'disabled');
      }
    }

    $.each(options.answers, (index, answer) => {
      const $answerClone = $answer.clone();

      $answerClone.click((e) => {
        const selected = !!parseInt($answerClone.attr('data-selected'));
        const value = $answerClone.attr('data-value');

        if (selected) {
          $answerClone.find('[data-role="selected"]').remove();
          $answerClone.find('input').remove();
          $answerClone.attr('data-selected', 0);
        } else {
          let $input = $(`<input type="hidden" name="answers[]" value="${value}">`);
          $answerClone.append($selected.clone());
          $answerClone.append($input);
          $answerClone.attr('data-selected', 1);
        }

        toggleForm(formIsValid());
      });

      $answerClone.attr('data-value', answer);
      $answerClone.find('label').text(answer);
      $answerClone.find('[name="answer"]').val(answer);
      $form.find('[data-contain="answers"]').append($answerClone);
      $form.attr('')
    });

    $form.find('[data-contain="other"] [name="other_answer"]').on('input', () => {
      toggleForm(formIsValid());
    });

    this.append($form);

    return this;
  };
}(jQuery));
