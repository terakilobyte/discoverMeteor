Template.postItem.helpers({
    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    },
    author: function() {
        var p = document.createElement('p');
        p.text = this.author;
        return p.text;
    }
});
