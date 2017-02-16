/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	

  },
  saveDetails: function (details, cb) {
        

                   
                        
                    User.create(details, function (err, response) {
                        if (err)
                            cb(err);
                        else{
                       
                                cb(null, response);
                        }
                    });
    },
     updatedata: function(details, cb){
 

                        User.update({id:details.id},details).exec(function(err, updatedUser)
                       {
 						if(!err){
    					cb(null, updatedUser);
  						}
						})
                		}


};

