1.跨站脚本攻击XSS
2.跨站请求伪造攻击CSRF
3.前端Cookies安全性
4.点击劫持攻击
5.传输过程安全问题
6.用户密码安全问题
7.SQL注入攻击


XSS攻击分类
1.反射型：url参数直接注入
2.存储型：存储到DB后读取时注入

XSS攻击注入点：
1.HTML节点内容  
   如<div>{content}</div>。
   如果用户输入的content内容为<script>alert(1)</script>
   则变成<div><script>alert(1)</script></div>，就会弹出一个弹框。不过react已经对
   这个做了过滤。
   防御：服务器返回内容给前端时，对content进行转义后再返回给前端

2.HTML属性
  <img src={imgSrc} />
  如果用户传入的imgSrc为：1" onerror="alert(1)，则变成
  <img src="1" onerror="alert(1)" />
  可以做个判断，判断是否是http或https开头，如果不是说明是错误的。
3.JavaScript代码
  <script>
    const data={data}
  </script>
  如果用户输入的data为：hello";alert(1);";
  则变成
  <script>
    const data="hello";alert(1);""
  </script>
  
  
4.富文本
