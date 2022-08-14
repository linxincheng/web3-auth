import react from 'react';
import "./App.css";

function Home () {
    return <div className="container">
        <h1 className="title">
            <a target="_blank" href="http://web3auth.io/" rel="noreferrer">
            Web3Auth
            </a>
            & Test
        </h1>
        <div className="grid">
            下载
            <a onClick={() => {
                window.open('/build.zip')
            }}>
                插件
            </a>
            解压后导入chrome扩展程序使用
            ，目前插件暂时给https://github.com、https://www.baidu.com开通了白名单域名登录测试
        </div>
        <footer className="footer">
            <a href="https://github.com/linxincheng/rel-plugin-project" target="_blank" rel="noopener noreferrer">
                Source code
            </a>
        </footer>
    </div>
}
export default Home;