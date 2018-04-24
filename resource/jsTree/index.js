$(function() {
    // init jstree withd configuration
    // var jsTree = $('#jstree').jstree({
    //     core: {
    //         data: {
    //             url: 'jsTree.json',
    //             data: function (node) {
    //                 return {
    //                     id: node.id
    //                 }
    //             }
    //         }
    //     }
    // })

    $('#jstree').jstree({
        core: {
            data: [
                {
                    id: '1',
                    text: 'node-1',
                    icon: 'glyphicon glyphicon-folder-close',
                    state: {
                        opened: true,
                        selected: false
                    },
                    children: [{
                        id: '11',
                        text: 'node-1-1',
                        icon: 'glyphicon glyphicon-picture',
                        li_attr: {
                            'fileUrl': 'http://www.zhihu.com'
                        }
                    }, {
                        id: '12',
                        text: 'node-1-2',
                        icon: 'glyphicon glyphicon-file',
                        li_attr: {
                            'fileUrl': 'http://www.baidu.com'
                        }
                    }, {
                        id: '13',
                        text: 'node-1-3',
                        icon: 'glyphicon glyphicon-picture',
                        li_attr: {
                            'fileUrl': 'http://www.google.com'
                        }
                    }, {
                        id: '14',
                        text: 'node-1-4',
                        icon: 'glyphicon glyphicon-signal',
                        li_attr: {
                            'fileUrl': 'http://www.sina.com.cn'
                        }
                    }]
                }
            ]
        }
    })
    // init Event Listening
    $('#jstree').on('changed.jstree', function(e, data) {
        console.log($(e.target))
        console.log(data)
        window.open(data.node.li_attr.fileUrl)
    })

    // interact with your instance
    $('button').on('click', function() {
        console.log('button click')
    })
})