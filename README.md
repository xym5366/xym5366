
=======

# 百度顶贴js代码（会被封号，想挑战就用。）
```
javascript:function reply(a,b){var c={ie:"utf-8",kw:PageData.forum.forum_name,fid:PageData.forum.forum_id,tid:PageData.thread.thread_id,quote_id:b,tbs:PageData.tbs,content:a,};return $.post("http://tieba.baidu.com/f/commit/post/add",c),console.log("已回复"+timer+"次"),++timer,timer>config.times?(clearInterval(run),alert("代码执行完毕，即将刷新"),setTimeout("location.reload()",1e3),0):void 0}var run,config={content:prompt("请输入回帖内容","冯耀宗博客关注站长的那点事儿!!")||"",pid:prompt("请输入要回复的楼层号（普通回复直接确定）",""),times:prompt("请输入回复次数","10000")||1,standby:prompt("请输入间隔时间（不可填0），单位：秒","2")||6},timer=1,cmfcfg='回帖内容:"'+config.content+'"\n';cmfcfg+="--"==config.pid?"回复楼层:普通回复\n":"回复楼层:"+config.pid+"\n",cmfcfg+="回复次数:"+config.times+"\n"+"时间间隔:"+config.standby+"s\n"+"确认参数正确开始回复？",1==confirm("请核对参数后确认执行\n"+cmfcfg)?1==config.times?(reply(config.content,config.pid),setTimeout("location.reload()",1e3)):(reply(config.content,config.pid),run=setInterval("reply(config.content,config.pid);",1e3*config.standby)):(alert("代码未执行，将重新刷新。"),location.reload());
```
