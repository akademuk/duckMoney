const tabNavs = document.querySelectorAll('.tab-nav');
const tabs = document.querySelectorAll('.tab');

tabNavs.forEach(tabNav => {
  tabNav.addEventListener('click', () => {
    const tabTarget = tabNav.getAttribute('data-tab-target');
    
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
    
    tabNavs.forEach(tabNav => {
      tabNav.classList.remove('active');
    });
    
    document.querySelector(tabTarget).classList.add('active');
    tabNav.classList.add('active');
  });
});
