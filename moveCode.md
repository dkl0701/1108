开始练习响应式布局和自适应布局



步骤：

1.在github上创建新的项目，命名。

2.打开要上传项目用的文件夹，cmd，git init,创建本地仓库。

3.复制github上的远程链接 如：git remote add origin git@github.com:dkl0701/1108.git

4.git remote -v 查看连接到远程仓库的哪



5.创建一个markdown文件作为文件说明。

6.git status查看状态  git add .     git commit -m'初始化项目'

7.继续去github上复制git push -u origin main   main一般改成master 用

8.git branch查看分支 ，就是在master上

9.git checkout -b 1108   创建并切换到1108这个分支上，这个是本地仓库上的

10.在本地文件夹里和.git同级的地方创建文件夹，去vscode打开，开始写

11.创建好需要的文件类型，比如css，html,js等，注意文件夹不能为空，否则上传不到远程仓库

12.git push origin 1108 ，远程仓库上也有了一个1108

13.需要拉代码的时候用git pull 。第一次用git pull origin 分支名，后边可以直接git pull

14.团队项目必须先拉后推，有冲突要解决完冲突后再推上去  即：git pull,解决冲突，git push.