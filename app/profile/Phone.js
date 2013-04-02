Ext.define('webinosTV.profile.Phone', {
  extend: 'Ext.app.Profile',
  config: {
    name: 'phone',
    namespace: 'phone',
    views: ['BrowserView']
  },
  isActive: function() {
    return Ext.os.is.Phone; //WARNING this is either true or undefined, not false!!!
  },
  launch: function() {
    Ext.create('webinosTV.view.phone.BrowserView');


    //seems not to work in the config
    // Initialize the main view
    //  Ext.Viewport.add(Ext.create('webinosTV.view.phone.BrowserView'));
  }
});