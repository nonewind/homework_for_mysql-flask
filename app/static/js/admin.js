function add_views() {
    var style = document.getElementById("view_add").style.visibility;
    console.log(style);
    if (style == "hidden") {
      document.getElementById("view_add").style.visibility = "visible";
    } else {
      document.getElementById("view_add").style.visibility = "hidden";
    }
  }

  function add_views_now() {
    var name = document.getElementById("name_get").value;
    var jianjie = document.getElementById("jianjie_get").value;
    if (name == "") {
      alert("您输入了个锤子？");
    } else if (jianjie == "") {
      alert("您输入了个锤子？");
    } else {
      data = JSON.stringify({
        seach: "add_views",
        name: name,
        jianjie: jianjie,
      });
      $.ajax({
        type: "POST",
        url: "/admin_seach",
        data: data,
        contentType: "application/json; charset=UTF-8",
        success: function (data) {
          if (data["statu"] == "1") {
            alert("新增成功");
          } else {
            alert("新增失败");
          }
        },
      });
    }
    add_views();
  }

  function add_guide() {
    var style = document.getElementById("guide_add").style.visibility;
    console.log(style);
    if (style == "hidden") {
      document.getElementById("guide_add").style.visibility = "visible";
    } else {
      document.getElementById("guide_add").style.visibility = "hidden";
    }
  }

  function add_guide_now() {
    var name = document.getElementById("name_get_guide").value;
    var zhuanye = document.getElementById("zhuanye_get_guide").value;
    var views = document.getElementById("views_get_guide").value;
    if (name == "") {
      alert("您输入了个锤子？");
    } else if (zhuanye == "") {
      alert("您输入了个锤子？");
    } else if (views == "") {
      alert("您输入了个锤子？");
    } else {
      data = JSON.stringify({
        seach: "add_guide",
        name: name,
        zhuanye: zhuanye,
        views: views,
      });
      $.ajax({
        type: "POST",
        url: "/admin_seach",
        data: data,
        contentType: "application/json; charset=UTF-8",
        success: function (data) {
          if (data["statu"] == "1") {
            alert("新增成功");
          } else {
            alert("新增失败");
          }
        },
      });
    }
    add_guide();
  }
  function add_visitor() {
    var style = document.getElementById("visitor_add").style.visibility;
    console.log(style);
    if (style == "hidden") {
      document.getElementById("visitor_add").style.visibility = "visible";
    } else {
      document.getElementById("visitor_add").style.visibility = "hidden";
    }
  }
  function add_visitor_now() {
    var name = document.getElementById("name_get_vis").value;
    var sex = document.getElementById("sex_get_vis").value;
    var tel_get_vis = document.getElementById("tel_get_vis").value;
    if (name == "") {
      alert("您输入了个锤子？");
    } else if (sex == "") {
      alert("您输入了个锤子？");
    } else if (tel_get_vis == "") {
      alert("您输入了个锤子？");
    } else {
      data = JSON.stringify({
        seach: "add_vis",
        name: name,
        sex: sex,
        tel: tel_get_vis,
      });
      $.ajax({
        type: "POST",
        url: "/admin_seach",
        data: data,
        contentType: "application/json; charset=UTF-8",
        success: function (data) {
          if (data["statu"] == "1") {
            alert("新增成功");
          } else {
            alert("新增失败");
          }
        },
      });
    }
    add_visitor()
  }


  function add_user() {
    var style = document.getElementById("user_add").style.visibility;
    console.log(style);
    if (style == "hidden") {
      document.getElementById("user_add").style.visibility = "visible";
    } else {
      document.getElementById("user_add").style.visibility = "hidden";
    }
  }

  function add_user_now(){
    var username = document.getElementById("username").value;
    var passwd = document.getElementById("passwd").value;
    if (username == "") {
        alert("您输入了个锤子？");
      } else if (passwd == "") {
        alert("您输入了个锤子？");
      } else {
        data = JSON.stringify({
            seach: "add_user",
            username:username,
            passwd:passwd
        });
        $.ajax({
            type: "POST",
            url: "/admin_seach",
            data: data,
            contentType: "application/json; charset=UTF-8",
            success: function (data) {
              if (data["statu"] == "1") {
                alert("新增成功");
              } else {
                alert("新增失败");
              }
            },
          });
      }
  }