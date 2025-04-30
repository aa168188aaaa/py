var content='';

// 通过类名'banner-info'获取div元素
var bannerDiv = document.querySelector('.banner-info');

// 检查是否找到了该元素
if (bannerDiv) {
    // 查找h1标签下的span元素
    var spanElement = bannerDiv.querySelector('h1 > span');
    
    // 检查是否找到了span元素
    if (spanElement) {
        // 获取span元素的文本内容
         content = spanElement.textContent || spanElement.innerText;
     } else {
        
    }
} else {
   content=document.title;
}
 
 
 
 
 
        if(window.location.host.includes('pbgsfa.cn')){
  
 document.writeln('应用名称：'+content+ '   版本号：v24.11.3'+ '   台州爱唛网络科技有限公司新乡分公司 电话：电话：4001255223   <br>Copyright 2019-2022 All Rights Reserved.<img src="ga.png" alt="公安网监备案" style="vertical-align: middle;margin-left: 3px;width: 16px">  <a href="https://beian.miit.gov.cn" target="_blank">  浙ICP备2021039562号-3 <a href="../yszc.html" target="_blank">隐私政策</a> | <a href="../yhqx.html" target="_blank">用户权限</a>');

 }
 
 
          if(window.location.host.includes('hys9')){
  
 document.writeln('应用名称：'+content+ '   版本号：v25.11.0'+ '   重庆黑伊始网络科技有限公司徐州分公司  地址：徐州淮海国际港务区柳新镇冯庄村(301乡道柳冯线 6号)1幢4层406号-2室   电话：0516-784566   <br>Copyright 2019-2022 All Rights Reserved.<img src="../ga.png" alt="公安网监备案" style="vertical-align: middle;margin-left: 3px;width: 16px">  <a href="https://beian.miit.gov.cn" target="_blank">  渝ICP备2024025101号-3 <a href="../yszc.html" target="_blank">隐私政策</a> | <a href="../yhqx.html" target="_blank">用户权限</a>');

 }
 
 
 
 
             if(window.location.host.includes('voielf')){
  
 document.writeln('应用名称：'+content+ '   版本号：v25.11.0'+ '   南京芸萌阁教育咨询有限公司永州零陵分公司  电话：4001055289  <br>Copyright 2019-2022 All Rights Reserved.<img src="../ga.png" alt="公安网监备案" style="vertical-align: middle;margin-left: 3px;width: 16px">  <a href="https://beian.miit.gov.cn" target="_blank">  苏ICP备2024124754号-1 <a href="../yszc.html" target="_blank">隐私政策</a> | <a href="../yhqx.html" target="_blank">用户权限</a>');

 }
 
 
 
 
 document.addEventListener('DOMContentLoaded', function() {
    var logo = document.createElement('img');
    logo.src = '../kaituo.png';
    logo.style.position = 'absolute'; // 修改为绝对定位
    logo.style.left = '6px';
    logo.style.top = '15px';
    logo.style.width = '150px'; // 设置宽度为150px

    logo.addEventListener('click', function() {
        window.location.href = '../kaituo/index.html';
    });

    document.body.appendChild(logo);
});