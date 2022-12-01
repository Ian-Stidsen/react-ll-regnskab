
// Imports navbar and footer to other pages using "data-include"
$(function() {
  const includes = $('[data-include]');
  $.each(includes, function() {
    const html = `../../components/${$(this).data('include')}/${$(this).data('include')}.html`;
    $(this).load(html);
  })
})

//const file = '../components/' + $(this).data('include') + '.html';