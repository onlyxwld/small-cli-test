# small-cli-test

根据<a href="https://segmentfault.com/a/1190000006190814" target="_blank">segmentfault博文</a>，进行学习练习

构建项目时，包管理器使用的时yarn

### 编写了 small.cmd
本工程下面，可以直接使用 small 指令

### pakage.json 添加 bin内容
```
"bin": {
  "small": "bin/small"
}
```
###### 本地调试的时候，在根目录下执行如下指令
```
npm link
```
即可把npm命令绑定到去全局，以后就可以直接以small作为命令开头而无需敲入长长的node small之类的命令了。