(function() {
  $(function() {
    return $("#invitationForm").on("submit", function(e) {
      var serialized, xhr;
      e.preventDefault();
      $("#invitationFormSuccess").hide();
      $("#invitationFormFail").hide();
      serialized = $("#invitationForm").serialize();
      $("#invitationForm").find("input").prop("disabled", "disabled");
      xhr = $.post("https://morning-journey-1886.herokuapp.com/invitations", serialized);
      xhr.done(function() {
        return $("#invitationFormSuccess").show();
      });
      xhr.fail(function() {
        return $("#invitationFormFail").show();
      });
      return xhr.always(function() {
        return $("#invitationForm").find("input").prop("disabled", "");
      });
    });
  });

}).call(this);
