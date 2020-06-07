# -*- coding: utf-8 -*-
# @ ziheng_wind

import  pymysql
import random


def visitor():
    sex = ['男','女']
    fristname = '赵钱孙李周吴郑王冯陈'
    lastname = '一二三四五六七八九十'
    fristname_list = list(fristname)
    lastname_list = list(lastname)
    name = random.choice(fristname_list)+random.choice(lastname_list)
    return name,random.choice(sex)


if __name__ == "__main__":
    connection = pymysql.connect(
        host='39.106.76.120',
        user='root',
        password='ZZH9472zzh',
        db='sheji'
    )
    cur = connection.cursor()
    for line in range(0,9):
        name,sex = visitor()
        cur.execute("insert into visitor values(null,'%s','%s',null)" %(name,sex))
        connection.commit()
    connection.close()
    cur.close()
        
