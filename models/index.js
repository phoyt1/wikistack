var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack', {logging: false});

//create model
var Page = db.define('page',
  {
    // desired fields
    title:      {type: Sequelize.STRING, allowNull: false},
    urlTitle:   {type: Sequelize.STRING, allowNull: false},
    content:    {type: Sequelize.TEXT, allowNull: false},
    status:     Sequelize.ENUM('open', 'closed')
  },
  {
    getterMethods:  {
      route:  function(){return '/wiki/' + this.urlTitle}
    }
  }//,
  // {
  //   hooks: {
  //     beforeValidate: function(page) {
  //       if(!page.title) {page.urlTitle = Math.random().toString(36).substring(2,7);}
  //       else{page.urlTitle = page.title.replace(/\s+/g, '_').replace(/\W/g, '');}
  //       console.log(page);
  //     }
  //   }
  // }
);

Page.hook('beforeValidate',function(page) {
        if(!page.title) {page.urlTitle = Math.random().toString(36).substring(2,7);}
        else{page.urlTitle = page.title.replace(/\s+/g, '_').replace(/\W/g, '');}
        console.log(page);
      });

var User = db.define('user', {
  // desired fields
  name:     {type: Sequelize.STRING, allowNull: false},
  email:    {type: Sequelize.STRING, allowNull: false, validate: {isEmail: true}}
});

module.exports = {
  Page: Page,
  User: User,
  db: db
}

