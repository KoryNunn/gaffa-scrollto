var Gaffa = require('gaffa'),
    doc = require('doc-js');

function ScrollTo(actionDefinition){}
ScrollTo = Gaffa.createSpec(ScrollTo, Gaffa.Action);
ScrollTo.prototype.type = 'scrollTo';
ScrollTo.prototype.trigger = function(){
    this.__super__.trigger.apply(this, arguments);

    var action = this,
        target = doc.findOne(this.target.value);

    // Didn't find an element? meh..
    if(!target){
        return;
    }

    var parent = target.parentNode,
        targetPosition = target.getBoundingClientRect();

    while(parent && parent !== document){
        parentOverflow = window.getComputedStyle(parent).overflow;
        if(
            parentOverflow !== 'auto' ||
            parentOverflow !== 'scroll' ||
            parentOverflow !== 'scrollX' ||
            parentOverflow !== 'scrollY'
        ){
            parent.scrollTop = targetPosition.y;
            parent.scrollLeft = targetPosition.x;
            console.log(targetPosition);
        }

        parent = parent.parentNode;
    }
};
ScrollTo.prototype.target = new Gaffa.Property();

module.exports = ScrollTo;