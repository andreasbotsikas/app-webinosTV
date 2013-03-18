Ext.define('webinosTV.controller.SelectMediaController', {
  extend: 'Ext.app.Controller',
  xtype: 'selmediactrl',
//   requires:[''],

  //TODO actions depending on media type - right now it's just masking/unmasking
  config: {
    control: {
      mplaylist:
        {
          select: 'mediaPLSelected', //event = select, cb = mediaCategorySelected
          deselect: 'mediaPLDeselected'
        }
    },
    refs: {
      mediaSColumn: '#mediaSelectionColumn',
      mplaylist: '#mediaPlaylist', //controlling
      targetDevList: '#targetDevicesList' //controlled
    }
  },
  mediaPLDeselected: function(mediaPlaylist, record, eOpts) {
    var selectedColumn = this.getMediaSColumn();

    var mplaylist = this.getMplaylist();
//    console.log("mediaPLDeselected - count", mplaylist.getSelectionCount())
    var targetDevList = this.getTargetDevList();
    if (mplaylist.getSelectionCount() === 0)
    {
      var header = selectedColumn.query('panel[name=columnheadertext]')[0];
      if (header) {
        header.removeCls('selected-column-header');
      }
      //selectedColumn.getAt(0).removeCls('selected-column-header');
      targetDevList.deselectAll();
      targetDevList.setMasked(true);
      targetDevList.setDisabled(true);
      targetDevList.setDisableSelection(true);

    }
  },
  mediaPLSelected: function(mediaPlaylist, record, eOpts)
  {
    var selectedColumn = this.getMediaSColumn();
    var header = selectedColumn.query('panel[name=columnheadertext]')[0];
    if (header) {
      header.addCls('selected-column-header');
    }

    //selectedColumn.getAt(0).addCls('selected-column-header');
//    console.log("mediaSelected")
    var targetDevList = this.getTargetDevList();
    targetDevList.setMasked(false);
    targetDevList.setDisabled(false);
    targetDevList.setDisableSelection(false);
  }
});