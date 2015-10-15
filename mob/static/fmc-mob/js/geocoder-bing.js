
/*******************************************************************************
 * 
 * Copyright (c) 2015 Fraunhofer FOKUS, All rights reserved.
 * 
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3.0 of the License, or (at your option) any later version.
 * 
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library. If not, see <http://www.gnu.org/licenses/>. 
 * 
 * AUTHORS: Louay Bassbouss (louay.bassbouss@fokus.fraunhofer.de)
 *
 ******************************************************************************/


var BingGeocoder = function(){
	this.provider = "bing";
}

BingGeocoder.prototype.getAddress = function(loc,callback){
	var lat = loc.lat;
	var lng = loc.lng;
	var key = settings.BING_MAP_API_KEY;
	$.getJSON('http://dev.virtualearth.net/REST/v1/Locations/'+lat+','+lng+'?o=json&key='+key+'&jsonp=?', function(data) {
		
		var addressBingFormat = data.resourceSets[0].resources[0].address;
		
		var address = {
			  city: addressBingFormat.locality
			, country: addressBingFormat.countryRegion
			, postalCode: addressBingFormat.postalCode
			, street: addressBingFormat.addressLine
		};
		
		callback(address);
	});
};

