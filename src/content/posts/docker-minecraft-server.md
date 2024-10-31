---
title: 使用 Docker 快速搭建《我的世界》（Minecraft）服务器
published: 2024-05-15 13:29:50
tags: [我的世界, 服务器, Docker]
category: 教程
description: 搭建《我的世界》服务器是一个折磨的过程，但用上 Docker，就能省去很多麻烦。
---

本篇是一个使用 Docker 进行游戏服务器快速搭建的教程，需要先自行安装 [Docker](https://docs.docker.com/engine/install/)，以做好前置准备。

本教程基于 [docker-minecraft-server](https://github.com/itzg/docker-minecraft-server) 项目进行部署，详情请参阅 [docker-minecraft-server 文档](https://docker-minecraft-server.readthedocs.io/en/latest/)。

## 快速部署

```shell
docker run -d -it --name mc -p 25565:25565 -e EULA=TRUE -v /home/minecraft/data:/data itzg/minecraft-server
```

`--name mc`：设置容器名，此处设置为 `mc`，方便下文使用。

`-v /home/minecraft/data:/data`：将容器数据卷挂载到 `/home/minecraft/data` 路径下，可自行修改，此处方便下文使用。

执行以上命令后，等待 docker 部署完成，最基础的 Minecraft 服务器就已经搭建成功了，此时已经可以尝试通过 Minecraft 的 `多人游戏` 连接到服务器公网 IP 了。

> _注意_：如果使用家庭网络搭建服务器，一般是没有 IPv4 的公网 IP 的，可以尝试使用 IPv6 来连接。
> 部分云服务商还需要手动开启对应的端口访问，比如我使用的阿里云服务器，需要到`安全组`中放行上面命令行用到的 `25565` 端口即可。

## 修改服务器参数

服务器搭建完成后，如果需要修改参数，就要找到 Minecraft 服务器对应的 Docker 数据卷（volume）挂载的路径。如果使用了上文的快速部署命令，路径应该为 `/home/minecraft/data`，切换到改路径下：

```shell
cd /home/minecraft/data
```

找到路径下的 `server.properties` 文件，内容大致如下：

```properties
#Minecraft server properties
#Wed May 15 05:00:42 UTC 2024
accepts-transfers=false
allow-flight=false
allow-nether=true
broadcast-console-to-ops=true
broadcast-rcon-to-ops=true
difficulty=easy
enable-command-block=false
enable-jmx-monitoring=false
enable-query=false
enable-rcon=false
enable-status=true
enforce-secure-profile=true
enforce-whitelist=false
entity-broadcast-range-percentage=100
force-gamemode=false
function-permission-level=2
gamemode=survival
generate-structures=true
generator-settings={}
hardcore=false
hide-online-players=false
initial-disabled-packs=
initial-enabled-packs=vanilla
level-name=world
level-seed=
level-type=minecraft\:normal
log-ips=true
max-chained-neighbor-updates=1000000
max-players=20
max-tick-time=60000
max-world-size=29999984
motd=A Minecraft Server
network-compression-threshold=256
online-mode=true
op-permission-level=4
player-idle-timeout=0
prevent-proxy-connections=false
pvp=true
query.port=25565
rate-limit=0
rcon.password=
rcon.port=25575
region-file-compression=deflate
require-resource-pack=false
resource-pack=
resource-pack-id=
resource-pack-prompt=
resource-pack-sha1=
server-ip=
server-port=25565
simulation-distance=10
spawn-animals=true
spawn-monsters=true
spawn-npcs=true
spawn-protection=16
sync-chunk-writes=true
text-filtering-config=
use-native-transport=true
view-distance=10
white-list=false
```

参数对应的功能可以在 [Minecraft WIKI](https://zh.minecraft.wiki/w/Server.properties) 中查看，按需修改对应的参数即可。

修改完成后，需要重启一下 Docker 容器，参考下文 `Docker 常用命令`。

## 常用参数

如果不想一个一个查看参数对应的内容，我这里会给出一些常用的参数配置说明，以便快速修改。

```properties
# 游戏难度
# peaceful - 和平
# easy - 简单
# normal - 普通
# hard - 困难
difficulty=easy

# 游戏模式
# survival - 生存模式
# creative - 创造模式
# adventure - 冒险模式
# spectator - 旁观模式
gamemode=survival

# 最大玩家数
max-players=20

# 队友伤害
# true - 玩家可以互相伤害。
# false - 玩家无法互相造成伤害（也称作玩家对战环境（PvE））。
pvp=true

# 启用白名单
# false - 不使用白名单。
# true - 从 whitelist.json 文件加载白名单，需要在 whitelist.json 中添加玩家的用户名，对应的玩家才能加入服务器。
white-list=false
```

## Docker 常用命令

查看所有 docker 容器：

```shell
docker ps -a
# 输出内容如下
CONTAINER ID   IMAGE                        COMMAND                   CREATED        STATUS                       PORTS                                           NAMES
19bb186f2584   itzg/minecraft-server        "/start"                  16 hours ago   Up About an hour (healthy)   0.0.0.0:25565->25565/tcp, :::25565->25565/tcp   mc
```

重启 Docker 容器：

```shell
# 使用容器名来重启，例如容器名为 mc
docker restart mc
# 如果容器名太长，也可以使用容器 ID（CONTAINER ID），输入 ID 前几位即可
docker restart 19bb1
```

暂停 Docker 容器：

```shell
docker stop mc
```

启动 Docker 容器：

```shell
docker start mc
```

## 踩坑分享

设置了一次白名单之后，如果重启一次容器，可能导致白名单的用户无法进入服务器，具体原因未知，所以我直接关闭了白名单，这种情况请注意保护好自己的**公网 IP 不要泄露**，否则可能有其他人捣乱。

如果遇到 `暂时无法连接到登录验证服务器，请稍后再试`，检查一下是否修改过本机的 `hosts`，如果有修改，清理一遍重进就行。

服务器建议 4G 内存起步，2G 很容易炸掉，不推荐用来部署 Minecraft 服务器。

## 参考

[Docker](https://docs.docker.com/engine/install/)
[docker-minecraft-server](https://github.com/itzg/docker-minecraft-server)
[docker-minecraft-server 文档](https://docker-minecraft-server.readthedocs.io/en/latest/)
[Minecraft WIKI](https://zh.minecraft.wiki/w/Server.properties)
