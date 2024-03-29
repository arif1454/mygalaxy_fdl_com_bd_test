/**
 * Product:        Social - Premium Responsive Admin Template
 * Version:        v1.5.1
 * Copyright:      2013 CesarLab.com
 * License:        http://themeforest.net/licenses
 * Live Preview:   http://go.cesarlab.com/SocialAdminTemplate
 * Purchase:       http://go.cesarlab.com/PurchaseSocial
 *
*/

var FormWizard;

FormWizard = (function($) {
  "use strict";
  /**/

  var addChosenValidator, handleAdvancedExampleForm, handleAdvancedExampleValidation, handleAdvancedExampleWizard, handleBasicExampleWizard, handleColoredBasicExampleWizard, handleLateralBasicExampleWizard, init;
  init = function() {
    handleBasicExampleWizard();
    handleColoredBasicExampleWizard();
    handleLateralBasicExampleWizard();
    handleAdvancedExampleForm();
    handleAdvancedExampleWizard();
    addChosenValidator();
    handleAdvancedExampleValidation();
  };
  /**/

  handleBasicExampleWizard = function() {
    $("#basicwizard").bootstrapWizard({
      onTabShow: function(tab, navigation, index) {
        var $current, $percent, $total;
        $total = navigation.find("li").length;
        $current = index + 1;
        $percent = ($current / $total) * 100;
        $("#basicwizard").find(".bar").css({
          width: $percent + "%"
        });
        if ($current >= $total) {
          $("#basicwizard").find(".button-next").hide();
          $("#basicwizard").find(".button-last").hide();
          $("#basicwizard").find(".button-finish").show();
          $("#basicwizard").find(".button-finish").removeClass("disabled");
        } else {
          $("#basicwizard").find(".button-next").show();
          $("#basicwizard").find(".button-last").show();
          $("#basicwizard").find(".button-finish").hide();
        }
        if ($current === 1) {
          $("#basicwizard").find(".button-first").addClass("disabled");
          return $("#basicwizard").find(".button-previous").addClass("disabled");
        } else {
          $("#basicwizard").find(".button-first").removeClass("disabled");
          return $("#basicwizard").find(".button-previous").removeClass("disabled");
        }
      },
      nextSelector: ".button-next",
      previousSelector: ".button-previous",
      firstSelector: ".button-first",
      lastSelector: ".button-last"
    });
    $("#basicwizard .button-finish").click(function() {
      $("#finish-modal").modal("show");
    });
  };
  /**/

  handleColoredBasicExampleWizard = function() {
    $("#basicwizard2").bootstrapWizard({
      onTabShow: function(tab, navigation, index) {
        var $current, $percent, $total;
        $total = navigation.find("li").length;
        $current = index + 1;
        $percent = ($current / $total) * 100;
        $("#basicwizard2").find(".bar").css({
          width: $percent + "%"
        });
        if ($current >= $total) {
          $("#basicwizard2").find(".button-next").hide();
          $("#basicwizard2").find(".button-last").hide();
          $("#basicwizard2").find(".button-finish").show();
          $("#basicwizard2").find(".button-finish").removeClass("disabled");
        } else {
          $("#basicwizard2").find(".button-next").show();
          $("#basicwizard2").find(".button-last").show();
          $("#basicwizard2").find(".button-finish").hide();
        }
        if ($current === 1) {
          $("#basicwizard2").find(".button-first").addClass("disabled");
          return $("#basicwizard2").find(".button-previous").addClass("disabled");
        } else {
          $("#basicwizard2").find(".button-first").removeClass("disabled");
          return $("#basicwizard2").find(".button-previous").removeClass("disabled");
        }
      },
      nextSelector: ".button-next",
      previousSelector: ".button-previous",
      firstSelector: ".button-first",
      lastSelector: ".button-last"
    });
    $("#basicwizard2 .button-finish").click(function() {
      $("#finish-modal2").modal("show");
    });
  };
  /**/

  handleLateralBasicExampleWizard = function() {
    $("#basicwizard3").bootstrapWizard({
      onTabShow: function(tab, navigation, index) {
        var $current, $percent, $total;
        $total = navigation.find("li").length;
        $current = index + 1;
        $percent = ($current / $total) * 100;
        $("#basicwizard3").find(".bar").css({
          width: $percent + "%"
        });
        if ($current >= $total) {
          $("#basicwizard3").find(".button-next").hide();
          $("#basicwizard3").find(".button-last").hide();
          $("#basicwizard3").find(".button-finish").show();
          $("#basicwizard3").find(".button-finish").removeClass("disabled");
        } else {
          $("#basicwizard3").find(".button-next").show();
          $("#basicwizard3").find(".button-last").show();
          $("#basicwizard3").find(".button-finish").hide();
        }
        if ($current === 1) {
          $("#basicwizard3").find(".button-first").addClass("disabled");
          return $("#basicwizard3").find(".button-previous").addClass("disabled");
        } else {
          $("#basicwizard3").find(".button-first").removeClass("disabled");
          return $("#basicwizard3").find(".button-previous").removeClass("disabled");
        }
      },
      nextSelector: ".button-next",
      previousSelector: ".button-previous",
      firstSelector: ".button-first",
      lastSelector: ".button-last"
    });
    $("#basicwizard3 .button-finish").click(function() {
      $("#finish-modal3").modal("show");
    });
  };
  /**/

  handleAdvancedExampleForm = function() {
    $("#phonenumber").mask("+9?9 999-999-9999");
  };
  /**/

  handleAdvancedExampleWizard = function() {
    $("#validationwizard").bootstrapWizard({
      onTabShow: function(tab, navigation, index) {
        var $current, $percent, $total;
        $total = navigation.find("li").length;
        $current = index + 1;
        $percent = ($current / $total) * 100;
        $("#validationwizard").find(".bar").css({
          width: $percent + "%"
        });
        if ($current >= $total) {
          $("#validationwizard").find(".button-next").hide();
          $("#validationwizard").find(".button-finish").show();
          $("#validationwizard").find(".button-finish").removeClass("disabled");
        } else {
          $("#validationwizard").find(".button-next").show();
          $("#validationwizard").find(".button-finish").hide();
        }
        if ($current === 1) {
          $("#validationwizard").find(".button-previous").addClass("disabled");
          return;
        } else {
          $("#validationwizard").find(".button-previous").removeClass("disabled");
          return;
        }
      },
      onNext: function(tab, navigation, index) {
        if (!(index <= navigation.context.childElementCount ? $("#form-validation").valid() : void 0)) {
          return false;
        }
      },
      onTabClick: function(tab, navigation, index) {
        var alertContent;
        if ($("#validationwizard #alert-tab2").length > 0) {
          $("#validationwizard #alert-tab2").animate({
            opacity: 0
          }, 250).animate({
            opacity: 1
          }, 500);
        } else {
          alertContent = "<div id=\"alert-tab2\" class=\"alert alert-error fade in\"><strong>Warning!</strong> On tab click disabled.</div>";
          $("#validationwizard #bar2").before(alertContent);
        }
        return false;
      },
      nextSelector: ".button-next",
      previousSelector: ".button-previous"
    });
    $("#validationwizard .button-finish").click(function() {
      if (!$("#form-validation").valid()) {
        return false;
      } else {
        return $("#finish-modal").modal("show");
      }
    });
  };
  /**/

  addChosenValidator = function() {
    $.validator.addMethod("chosen", (function(value, element) {
      if (value === 0) {
        return false;
      } else {
        if (value.length === 0) {
          return false;
        } else {
          return true;
        }
      }
    }), "Please select an option");
  };
  /**/

  handleAdvancedExampleValidation = function() {
    $("#form-validation").validate({
      errorElement: "span",
      errorPlacement: function(error, element) {
        error.appendTo(element.parents("div.controls"));
        error.addClass("help-block");
        element.parents(".control-group").removeClass("success").addClass("error");
        return element.parents(".control-group").find("a.chzn-single").addClass("error");
      },
      success: function(label) {
        label.parents(".control-group").removeClass("error");
        return label.parents(".control-group").find("a.chzn-single").removeClass("error");
      },
      rules: {
        fullname: {
          required: true,
          minlength: 4
        },
        email: {
          required: true,
          email: true
        },
        phonenumber: {
          required: true
        },
        gender: {
          required: true
        },
        address: {
          required: true,
          minlength: 5
        },
        citytown: {
          required: true,
          minlength: 5
        },
        postalcode: {
          required: true,
          minlength: 4,
          digits: true
        },
        country: {
          required: true,
          chosen: true
        },
        cardholdername: {
          required: true,
          minlength: 4
        },
        creditcardnumber: {
          required: true,
          minlength: 12,
          maxlength: 14,
          digits: true
        },
        cvc: {
          required: true,
          minlength: 3,
          maxlength: 3,
          digits: true
        },
        expmonth: {
          required: true,
          minlength: 2,
          maxlength: 2,
          digits: true
        },
        expyear: {
          required: true,
          minlength: 3,
          maxlength: 34,
          digits: true
        },
        confirm: {
          required: true
        }
      },
      submitHandler: function(form) {}
    });
  };
  return {
    init: init
  };
})(jQuery);
