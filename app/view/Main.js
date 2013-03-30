Ext.define('HelloWorld.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',
        fullscreen: true,
        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Project Half'
                },

                html: [
                    "Hello World!"
                ].join("")
            },
            {
                title: 'Contacts',
                iconCls: 'action',
                
                styleHtmlContent: true,
                scrollable: true,

                items: {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Contacts'
                },
                
                html: [
                       "<div id='test'>Alll About Us!</div>"
                ].join("")
            }
        ]
    }
});
