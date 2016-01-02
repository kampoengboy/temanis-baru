/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      email : 'string',
      encryptedPassword : 'string',
      encryptedId : 'string',
      name : 'string',
      files : 'array',
      types : 'string',
      gender : 'string',
      grade : "string",
      address : 'string',
      placebirth : 'string',
      datebirth : 'string',
      phone : 'string',
      status : 'integer',
      admin : {
        type : 'boolean',
        defaultsTo : false
      }
  }
};
