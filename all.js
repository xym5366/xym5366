window.addEventListener("load", function () {
  function sendData() {
    var request_mes = new XMLHttpRequest();
		var manager_uid=document.getElementById("manager_uid");
		var manager_uname=document.getElementById("manager_uname");
    var data="";
    
    var tbs_request=new XMLHttpRequest();
    var tbs="";
    
    // 数据发送成功
    tbs_request.addEventListener("load", function(event) {
      tbs=event.target.responseText;
      alert(event.target.responseText);
      // 组建POST请求
      request_mes.open("POST", "http://tieba.baidu.com/pmc/tousu/commitTousu",true);
      request_mes.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
      // 发送的数据，由用户输入提供一些
      data='manager_uid='+manager_uid.value+'&'+'manager_uname='+manager_uname.value+'&forum_id=22545&forum_name=c%E8%AF%AD%E8%A8%80&complaint_type=illegal_delpost&reason=%E4%B9%B1%E5%88%A0%E8%B4%B4&tbs='+tbs
      request_mes.send(data);
    });
    request_mes.addEventListener("load", function(event) {
      alert(event.target.responseText);
    });
    // 数据发送失败
    tbs_request.addEventListener("error", function(event) {
      alert('get出错');
    });
    request_mes.addEventListener("error", function(event) {
      alert('Oups! POST出错。');
    });
    // 组建tbs GET请求
    tbs_request.open("GET","http://tieba.baidu.com/dc/common/tbs",true);
    //tbs_request.open("GET", "http://www.baidu.com",true);
    tbs_request.setRequestHeader('Cookie','any non-empty string here'); //跨域，浏览器不给设置cookie，可恶的浏览器
    tbs_request.send();
  }
  // 访问框架元素
  var formobj = document.getElementById("myForm");
  // 监听submit事件
  formobj.addEventListener("submit", function (event) {
    event.preventDefault();
    sendData();
  });
});
