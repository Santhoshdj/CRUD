/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


	saveDetails: function (req, res) {
    var details = req.body;

    if(req.method === 'GET'){
      return res.view('');
    }
    else(req.method === 'POST' && details )
     User.saveDetails(details, function(err, response){
          return res.json(response);
      });
    },

    viewDetails: function(req, res){
    User.find().exec(function(err, data) {
                if (err) return next(err);
                // res.json(data);  
            res.view('viewDetails', { viewDetails : data});

            });
    },


    editDetails: function(req, res){
    User.find({id:req.params.i}).exec(function(err, data) {
                if (err) return next(err);
                   res.view('editDetails', { editDetails : data});
            });
    },
    updatedata: function(req, res){
  User.updatedata(req.allParams(), function(err, data){
      if(!err){
        return res.json(data);
        }
    })
  },
  deleteDetails: function(req, res){
User.destroy({id:req.params.i}, function(err, result) {
               User.find().exec(function(err, data) {
                if (err) return next(err);
                res.json(data);  
            });
});
},

	
};



