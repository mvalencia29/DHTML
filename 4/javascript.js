function openTab(e, tabId){
  var i, tabcontent, tablink;

  tabcontent = document.getElementsByClassName('tabcontent');
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablink = document.getElementsByClassName('tablink');
  for (var i = 0; i < tablink.length; i++) {
    tablink[i].ClassName = tablink[i].ClassName.replace('active', "");
  }

  document.getElementById(tabId).style.display = "block";
  e.currentTarget.ClassName += 'active';
}
