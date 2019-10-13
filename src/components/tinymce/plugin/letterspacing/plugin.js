tinymce.PluginManager.add('letterspacing', function (editor, url) {
  var pluginName = '字间距'
  var global$1 = tinymce.util.Tools.resolve('tinymce.util.Tools')
  var letterspacing_val = editor.getParam('letterspacing_val', '1px 2px 3px 4px 5px')

  editor.on('init', function () {
    editor.formatter.register({
      letterspacing: {inline: 'span', styles: {'letter-spacing': '%value'}}
    })
  })

  var doAct = function (value) {
    editor.formatter.apply('letterspacing', {value: value})
    editor.fire('change', {})
  }

  editor.ui.registry.addMenuButton('letterspacing', {
    text: '<svg t="1570979572631" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12244" width="20" height="20" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css"></style></defs><path d="M33.450667 3.413333h102.4v956.8256H33.450667V3.413333z m887.330133 1.8432h102.4v957.713067h-102.4V5.188267z m-425.301333 200.704h108.9536l223.6416 584.977067h-102.4l-53.248-146.6368H427.485867l-53.248 146.6368h-102.4l223.6416-584.9088z m-39.3216 359.697067H643.754667L552.004267 309.248h-3.2768L456.157867 565.6576z" fill="#2c2c2c" p-id="12245"></path></svg>',
    tooltip: pluginName,
    fetch: function (callback) {
      var dom = editor.dom
      var blocks = editor.selection.getSelectedBlocks()
      var lhv = 0
      global$1.each(blocks, function (block) {
        if (lhv == 0) {
          lhv = dom.getStyle(block, 'letterspacing') ? dom.getStyle(block, 'letterspacing') : 0
        }
      })

      var items = letterspacing_val.split(' ').map(function (item) {
        var text = item
        var value = item
        return {
          type: 'togglemenuitem',
          text: text,
          active: lhv == value ? true : false,
          onAction: function () {
            doAct(value)
          }
        }
      })
      callback(items)
    }
  })

  return {
    getMetadata: function () {
      return {
        name: pluginName,
        url: 'http://tinymce.ax-z.cn/more-plugins/lineheight.php',
      }
    }
  }
})
