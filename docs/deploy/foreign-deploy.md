---
title: 国外部署
sidebar_position: 3
---

国外部署可以采用Ntelify、Vercel、各大厂商提供的VPS服务器。

## 个人VPS部署流程图

```mermaid
graph TD
    subgraph "Internet"
        A[访客]
    end

    subgraph "CDN"
        B[Cloudflare]
        click B "https://cloudflare.com"
    end

    subgraph "VPS"
        C[反向代理服务器]
        D[个人博客系统]
    end

    subgraph "本地"
        E[VS Code]
        F[开发者]
    end

    A -- 请求资源 --> B
    B -- 获取资源 --> C
    C -- 转发请求 --> D

    D -- 响应请求 --> C
    C -- 响应资源 --> B
    B -- 响应资源 --> A

    F -- 打开软件 --> E
    E -- "远程连接写作、开发" --> D
   
    linkStyle 0 stroke-width:2px,fill:none,stroke:red;
    linkStyle 1 stroke-width:2px,fill:none,stroke:red;
    linkStyle 2 stroke-width:2px,fill:none,stroke:red;

    linkStyle 3 stroke-width:2px,fill:none,stroke:blue;
    linkStyle 4 stroke-width:2px,fill:none,stroke:blue;
    linkStyle 5 stroke-width:2px,fill:none,stroke:blue;

    linkStyle 6 stroke-width:2px,fill:none,stroke:green;
    linkStyle 7 stroke-width:2px,fill:none,stroke:green;
```

## PaaS平台部署流程图

```mermaid
graph TD
    subgraph "Internet"
        A[访客]
    end

    subgraph "CDN"
        B[Cloudflare]
        C[Netlify/Vercel CDN]
    end

    subgraph "代码托管平台"
        D[GitHub]
    end

    subgraph "本地"
        E[开发者]
        F[VS Code]
    end

    A -- 请求资源 --> B
    B -- 请求资源 --> C

    C -- 响应资源 --> B
    B -- 响应资源 --> A
    

    E -- 打开软件 --> F
    F -- git提交 --> D
    D -- 触发更新自动部署 --> C

    linkStyle 0 stroke-width:2px,fill:none,stroke:red;
    linkStyle 1 stroke-width:2px,fill:none,stroke:red;

    linkStyle 2 stroke-width:2px,fill:none,stroke:blue;
    linkStyle 3 stroke-width:2px,fill:none,stroke:blue;

    linkStyle 4 stroke-width:2px,fill:none,stroke:green;
    linkStyle 5 stroke-width:2px,fill:none,stroke:green;
    linkStyle 6 stroke-width:2px,fill:none,stroke:green;

```
