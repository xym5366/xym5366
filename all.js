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
      alert(tbs_request.responseText);
    });
    request_mes.addEventListener("error", function(event) {
      alert('Oups! POST出错。');
    });
    // 组建tbs GET请求
    //tbs_request.open("GET","http://tieba.baidu.com/dc/common/tbs",true);
    //tbs_request.open("GET", "http://www.baidu.com",true);
    //tbs_request.setRequestHeader('Origin','');
    //tbs_request.send(null);
    fetch('http://tieba.baidu.com/dc/common/tbs', {
  method: "GET",
  headers: {
    'Host': 'tieba.baidu.com', 
    'Cache-Control': 'max-age=0', 
    'Upgrade-Insecure-Requests': '1', 
    'Cookie': 'BAIDUID=2F87A2B4F005C41D0BF4380DC0E2A386:FG=1; BIDUPSID=2F87A2B4F005C41D0BF4380DC0E2A386; PSTM=1504886493; TIEBA_USERTYPE=2c5edaef49cac081299fdeef; bdshare_firstime=1504935746516; __cfduid=dbe08631a4c1f5bca6d949082bb1da64b1505066829; FP_LASTTIME=1509730531605; MCITY=-%3A; FP_UID=c62489a0cfb7619baeb15f2afc482fd8; TIEBAUID=0a368e3a29a1f78fa8438bc4; BDRCVFR[feWj1Vr5u3D]=I67x6TjHwwYf0; PSINO=2; BDORZ=B490B5EBF6F3CD402E515D22BCDA1598; BDRCVFR[dG2JNJb_ajR]=mk3SLVN4HKm; BDRCVFR[-pGxjrCMryR]=mk3SLVN4HKm; 3465372583_FRSVideoUploadTip=1; wise_device=0; Hm_lvt_98b9d8c2fd6608d564bf2ac2ae642948=1518328746,1518351232,1518414575,1518498303; Hm_lpvt_98b9d8c2fd6608d564bf2ac2ae642948=1518498303; BDUSS=IwNG4tbEdHSk1KVWdPcFJ4bzRsTjRQRWR6QS1WY2RSYkFybW5LaUtBSTdCNnBhQVFBQUFBJCQAAAAAAAAAAAEAAACnY43O19TWxrLZ1~dzeXN0ZW0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADt6glo7eoJaaj; STOKEN=7842f1afaaa4c80a5100134e2cddf158c209d167be649f9add7dac2d4fb9540d; H_PS_PSSID=1461_18194_21110_17001_20697_22075' // This is missing from request
  }
})
  }
  // 访问框架元素
  var formobj = document.getElementById("myForm");
  // 监听submit事件
  formobj.addEventListener("submit", function (event) {
    event.preventDefault();
    sendData();
  });
});
