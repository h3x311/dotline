---
title: Git Multiple user setup
author: sober
pubDatetime: 2022-02-22T14:26:09+08:00
slug: gitmultisuer
featured: false
draft: false
tags:
  - git
  - tool

description:
  "Learn git multi user setup"
---
## Table of contents

# How to add new user's ssh key
## 1. Generate new ssh key
```
ssh-keygen -t rsa -C "user2@email.com"
```
名字加后缀，不要覆盖之前的key

## 2. Add pub key into github ssh
<!-- ## 2. 添加key到ssh agent中
```
ssh-agent bash
ssh-add ~/.ssh/keyname
``` -->
## 3. update file`~/.ssh/config`
```
Host xxwhatever
HostName ssh.github.com
User git
Port 443
IdentityFile /Users/sober/.ssh/yourkeyname
IdentitiesOnly yes
```

# Change local repo's current user
## 1st method
``` 
git config --local user.name "xxx"
git config --local user.email "xxx"
```
## 2nd method
Another method is to update file`.git\config`
![KOjbCltest](https://cdn.jsdelivr.net/gh/h3x311/upic@main/LC3/2024/KOjbCltest.png)

# Add remote repo with non-global git user
```
git remote/clone add origin git@xxwhatever:repoUrl
```

