from app import app
from flask import render_template,request,jsonify,redirect
import json
import pymysql

connection = pymysql.connect(
        host='39.106.76.120',
        user='root',
        password='ZZH9472zzh',
        db='sheji'
    )


@app.route('/')
@app.route('/index')
def index():
    return render_template(
        'index.html'
    )

@app.route('/login', methods=['POST','GET'])
#数据库登录查询部分  成功查询返回admin管理页面
def login():
    data = json.loads(request.get_data(as_text=True))
    user = data['user']
    passd = data['passwd']
    try:
        cur = connection.cursor()
    except:
        print("=数据库连接错误=")
    try:
        cur.execute("select password from user where user_name='%s'" %user)
        select_from_mysql = cur.fetchone()
        cur.close()
        if select_from_mysql[0] == passd:
            url_route = '/admin'
            return jsonify({'ok':1})
        else:
            return jsonify({'ok':0})
    except:
        cur.close()
        return jsonify({'ok':0})


@app.route('/admin', methods=['POST','GET'])
def admin():
    return render_template(
        'admin.html'
    )

@app.route('/admin_seach',methods=['POST','GET'])
def admin_seach():
    data = json.loads(request.get_data(as_text=True))
    seach = data['seach']
    cur = connection.cursor()
    if seach == 'add_views':
        name = data['name']
        jianjie = data['jianjie']
        try:
            cur.execute("insert into views values(null,'%s','%s')" %(name,jianjie))
            connection.commit()
            return jsonify({
                "statu":1
            })
        except:
            connection.rollback()
            return jsonify({
                "statu":0
            })
        cur.close()
    elif seach == "add_guide":
        name = data['name']
        zhuanye = data['zhuanye']
        views = data['views']
        try:
            cur.execute("insert into guide values(null,'%s','%s','%s')" %(name,zhuanye,views))
            connection.commit()
            return jsonify({
                "statu":1
            })
        except:
            connection.rollback()
            return jsonify({
                "statu":0
            })
        cur.close()
    elif seach == 'add_vis':
        name = data['name']
        sex = data['sex']
        tel = data['tel']
        try:
            cur.execute("insert into visitor values(null,'%s','%s','%s')" %(name,sex,tel))
            connection.commit()
            return jsonify({
                "statu":1
            })
        except:
            connection.rollback()
            return jsonify({
                "statu":0
            })
        cur.close()
    elif seach == 'add_user':
        name = data['username']
        passwd = data['passwd']

        try:
            cur.execute("insert into user values(null,'%s','%s')" %(name,passwd))
            connection.commit()
            return jsonify({
                "statu":1
            })
        except:
            connection.rollback()
            return jsonify({
                "statu":0
            })
        cur.close()


        
    """
    try:
        cur = connection.cursor()
    except:
        print("=数据库连接错误=")
    try:
        pass
    except:
        pass
    """