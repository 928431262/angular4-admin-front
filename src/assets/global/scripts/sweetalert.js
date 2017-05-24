var SweetAlert = (function () {

    return {
        // 弹出成功信息
        alert: function (text, title) {
            swal({
                title: title,
                text: text,
                type: "success", // 类型为 success 警告框(alert)
                showConfirmButton: false, // 显示确认按钮 否
                showCancelButton: false, // 显示取消按钮 否
                confirmButtonClass: 'btn-submit', // 确认按钮样式
                sweetTitleText: title,
                timer: 1500
            });
        },
        // 弹出待处理的成功信息
        alertWithCallBack: function (text, title, callBack) {
            swal({
                title: title,
                text: text,
                type: "success", // 类型为 success 警告框(alert)
                showConfirmButton: true, // 显示确认按钮 
                showCancelButton: false, // 显示取消按钮 
                confirmButtonClass: 'btn-submit', // 确认按钮样式
                sweetTitleText: title,
                timer: 1500
            }, function(){
                callBack();
            });
        },
        // 警告
        warning: function (text, title) {
            swal({
                title: title,
                text: text,
                type: "warning",// 类型为 warning 警告框(alert)
                showConfirmButton: true,// 显示确认按钮 是
                showCancelButton: false,// 显示取消按钮 否
                confirmButtonClass: 'btn-warning',// 确认按钮样式
                confirmButtonText: "确定",// 确认按钮上文本
                sweetTitleText: title
            });
        },
        // 提示信息
        notice: function (text, title) {
            swal({
                title: '',
                text: text,
                type: "info",// 类型为 warning 警告框(alert)
                showConfirmButton: false,//显示确认按钮 否
                showCancelButton: false,//显示取消按钮 否
                confirmButtonClass: 'btn-warning',//确认按钮样式
                confirmButtonText: "确定",//确认按钮上文本
                sweetTitleText: title,
                timer: 1200
            });
        },
        // 待确认
        confirm: function (text, callBack) {
            swal({
                title: '',
                text: text,
                type: "info",//类型为 info 信息框(confirm)
                closeOnConfirm: true,
                closeOnCancel: true,
                showConfirmButton: true,//显示确认按钮 是
                showCancelButton: true,//显示取消按钮 否
                confirmButtonClass: 'btn-primary',//确认按钮样式
                cancelButtonClass: 'btn-danger',//取消按钮样式
                confirmButtonText: "确定",//确认按钮上文本
                cancelButtonText: "取消",//取消按钮上文本
                sweetTitleText: "确认"
            }, function (isConfirm) {
                if (isConfirm) {
                    callBack();
                } else {
                    swal({
                        title: "取消",
                        text: "操作取消",
                        type: "error",
                        showConfirmButton: false,
                        timer: 800
                    });
                }
            });
        }
    };
})();

