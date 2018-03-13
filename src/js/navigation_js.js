// $(function() {
//     var text = {
//         Qinghua: '这是清华大学',
//         Wuhan: '这是武汉大学',
//         Nanjing: '这是南京大学',
//         Fudan: '这是复旦大学',
//         Beijing: '这是北京大学',
//         Sichuan: '这是四川大学',
//         Chongqing: '这是重庆大学',
//         Xinan: '这是西南大学',
//     };

//     var navigation_list = $('.website_navigation');
//     console.log(navigation_list);
//     var s = $('.website_navigation')[0].attr('name');
//     // console.log(navigation_list[0].attr('class'));

//     $('body').click(function (event) {
//         var $node = $(event.target);
//         // if ($node)
//         for (var i = 0, len = navigation_list.length; i < len; i++) {
//             if ($node[0] === navigation_list[i]) {
//                 var $name = $node.data-name;

//             }
//         }
//     });
// });



var navigation_list = document.querySelectorAll('.website_navigation');
// console.log(navigation_list[0].dataset.name);

var EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, handler);
        } else {
            element['on' + type] = handler;
        }
    },
    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent('on' + type, handler);
        } else {
            element['on' + type] = null;
        }
    }
};

var getName = function(e) {

    var text = {
        Qinghua : '这是清华大学，是中国的一流学府，风景优美，坐落于北京，位于首都。',
        Wuhan : '这是武汉大学',
        Nanjing : '这是南京大学',
        Fudan : '这是复旦大学',
        Beijing : '这是北京大学',
        Sichuan : '这是四川大学',
        Chongqing : '这是重庆大学',
        Xinan : '这是西南大学',
        Zhiwang : '',
        Fenghuang : '',
        Tengxun : '',
        Xinlang : '',
        Wangyi : '',
        Ali : '',
        Shizi : '',
        Yanjiusheng : '',
        Benkesheng : '',
    };

    var node = e.target,
        name = node.parentNode.dataset.name;
        console.log(node, name);
    
    if (node.parentNode.children.length === 1) {
        var div1 = document.createElement('div');
        div1.setAttribute('class', 'navigation_introduce');
        div1.innerHTML = text[name];
        // console.log(div1);
        node.parentNode.appendChild(div1);
    }
}

var lastName = function(e) {
    var node1 = e.target,
        Pnode = node1.parentNode;

    if (Pnode.length !== 1) {
        Pnode.removeChild(Pnode.lastChild);
    }
}

for (var i = 0; i < navigation_list.length; i += 1) {
    var childNode = navigation_list[i].children[0];
    // console.log(childNode);
    EventUtil.addHandler(childNode, 'mouseover', getName);
    EventUtil.addHandler(childNode, 'mouseleave', lastName);
}