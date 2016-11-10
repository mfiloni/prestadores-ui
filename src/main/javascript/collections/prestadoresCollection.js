'use strict';

//Main Collection for prestadores



var prestadoresCollection = Backbone.Collection.extend({
  
  url: function(options) {
  	if()
  		if(this.document.url().contains("localhost")){
  			return "http://localhost/prestadores?" + options
  		}else{
  			return this.document.url +  "prestadores"
  		}
  }

  parse: function(response){
  	return response.results
  }


});