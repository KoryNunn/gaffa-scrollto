var Gaffa = require('gaffa'),
    doc = require('doc-js'),
    scrollIntoView = require('scroll-into-view');

function ScrollTo(actionDefinition){}
ScrollTo = Gaffa.createSpec(ScrollTo, Gaffa.Action);
ScrollTo.prototype.type = 'scrollTo';
ScrollTo.prototype.trigger = function(){
    this.__super__.trigger.apply(this, arguments);

    scrollIntoView(doc.findOne(this.target.value));

};
ScrollTo.prototype.target = new Gaffa.Property();

module.exports = ScrollTo;