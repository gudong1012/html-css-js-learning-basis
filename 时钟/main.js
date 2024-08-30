function Editor(input, preview) {
  this.update = function () {
    preview.innerHTML = marked.parse(input.value);
  };
  input.editor = this;
  this.update();
}
new Editor(editor, preview);

function update(src, dest, hint) {
  var scrollRange = src.scrollHeight - src.clientHeight,
      p = src.scrollTop / scrollRange;  
  
  dest.scrollTop = p * (dest.scrollHeight - dest.clientHeight);
  hint.innerHTML = Math.round(100 * p) + '%';
}

function debounce(fn, ms = 100) {
  let debounceTimer = null;
  return function(...args) {
    if(debounceTimer) clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
      fn.apply(this, args);
    }, ms);
  }
}

let scrollingTarget = null;
editor.addEventListener('scroll', function(evt){
  if(!scrollingTarget) scrollingTarget = editor;
  if(scrollingTarget === editor) update(editor, preview, hintbar);
});

editor.addEventListener('scroll', debounce(function(evt){
  scrollingTarget = null;
}));

preview.addEventListener('scroll', function(evt){  
  if(!scrollingTarget) scrollingTarget = preview;
  if(scrollingTarget === preview) update(preview, editor, hintbar);
});

