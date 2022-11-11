import { LegacyRef, useRef, useState } from 'react'
import {Upload} from 'tus-js-client'
import './App.css'

function App() {

  const [file, setFile] = useState<File | undefined>()


  const handleSubmit = () => {
    if (!file) {
      return
    }

    send_request()


    // var upload = new Upload(file, {
    //   endpoint: "http://localhost:8081/upload",
    //   metadata: {
    //     filename: file.name,
    //     filetype: file.type
    //   },
    //   onBeforeRequest(req) {
    //     return new Promise(resolve => {
    //       var xhr = req.getUnderlyingObject()
    //       xhr.withCredentials = true
    //       resolve(xhr)
    //   })
    //   },
    // })

    // upload.start()
  }


  function send_request() {
    var xmlhttp = null;
    if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest();
    }
  
    if (xmlhttp != null) {
      // serverUrl是 用户获取 '签名和Policy' 等信息的应用服务器的URL，请将下面的IP和Port配置为您自己的真实信息。
     var serverUrl =
        "http://localhost:8081/upload";
  
      xmlhttp.open("POST", serverUrl, false);
      const body = new FormData()

      body.append("file", file || '')
      xmlhttp.send(body)
      // xmlhttp.onprogress = (num, index) => {
      //   console.log(num, index);
      // }
      return xmlhttp.responseText;
    } else {
      alert("Your browser does not support XMLHTTP.");
    }
  }

  return (
    <div className="App">
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] as File) } />

     <button onClick={handleSubmit} >
      提交测试
     </button>
    </div>
  )
}

export default App
