/*
 * Form module for post title
 */

module.exports = PublicLab.TitleModule = PublicLab.Module.extend({

  init: function(_editor, options) {

    var _module = this;

    _module.options = options || {};
    _module.options.name = "title";
    _module.options.required = true;

    _module._super(_editor, _module.options);


    _module.valid = function() {

      // must not be empty
      return _module.el.find('input').val() != "";

    }


    // All the "related" behavior below is application-specific, 
    // though perhaps it's a generalizable menu interface,
    // like "ModuleSuggestion" or something. Anyhow, let's
    // tuck it into a subclass or something...


    // make an area for "related posts" to connect to
    _module.el.find('.ple-module-guide').prepend('<div style="display:none;" class="ple-menu-more ple-help-minor pull-right"></div>');
    _module.menuEl = _module.el.find('.ple-menu-more');
    _module.menuEl.append('<a class="btn btn-default">...</a>');

    
    // make an area for "related posts" to connect to
    _module.el.find('.ple-module-content').append('<div style="display:none;" class="ple-title-related"></div>');
    _module.relatedEl = _module.el.find('.ple-title-related');
    _module.relatedEl.append('<p class="ple-help">Does your work relate to one of these? Click to alert those contributors.</p><hr style="margin: 4px 0;" />');

    _module.relatedEl.append('<div class="related"><a class=""><i class="fa fa-plus-circle"></i></a> <a>Suggestion</a> by <a>@eustatic</a> - <span class="ple-help">3 comments</span></div>');
    _module.relatedEl.append('<div class="related"><a class=""><i class="fa fa-plus-circle"></i></a> <a>Suggestion</a> by <a>@eustatic</a> - <span class="ple-help">3 comments</span></div>');
    _module.relatedEl.append('<div class="related"><a class=""><i class="fa fa-plus-circle"></i></a> <a>Suggestion</a> by <a>@eustatic</a> - <span class="ple-help">3 comments</span></div>');

    $(_module.el).find('input').keydown(function(e) {

      _module.relatedEl.fadeIn();

    });

    // make this hide only if another section is clicked, using a 'not' pseudoselector
    $(_module.el).find('input').focusout(function(e) {

      _module.relatedEl.fadeOut();

    });


  }

});