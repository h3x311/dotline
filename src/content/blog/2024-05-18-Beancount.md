---
title: Beancount Setup
author: dot
pubDatetime: 2024-05-18
slug: beancount
featured: false
draft: false
tags:
  - beancount
  - money

description:
  "Learn Beancount"
---

# Preface

I want to structure the process of log money expense/income/debts. Beancount has good reputation of it.

# Setup

```pip3 install beancount 
    pip3 install fava
```

# start your log
```
2024-05-18 open Assets:Card
2024-05-18 open Assets:Alipay
2024-05-18 open Assets:Wechat
2024-05-18 open Liabilities:CreditCard
2024-05-18 open Liabilities:Huabei
2024-05-18 open Expenses:Food
2024-05-18 open Expenses:LifeThings
2024-05-18 open Expenses:VirtualThings
2024-05-18 open Income:Salary
2024-05-18 open Equity:Opening-Balances

2024-05-18 * "银行卡"
    Assets:Card                    777.00 CNY
    Equity:Opening-Balances       -777.00 CNY
2024-05-18 * "花呗"
    Liabilities:Huabei            -11.00 CNY
    Equity:Opening-Balances        11.00 CNY
2024-08-18 * "Salary"  
    Assets:Card                   3333.00 CNY
    Income:Salary                  -3333.00 CNY
```

# web visualize your graph

```
bean-web xx.beancount
```

# conclusion
I hope I could explore more, like use bot or other plugin(smart import) to log this in a long term.