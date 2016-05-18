//finds farmers markets by zip


document.addEventListener('DOMContentLoaded', getResults);

function getResults() {
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        // submit a get request to the restful service zipSearch.
        url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=77450",
        dataType: 'jsonp',
		success: function(searchResults) {
			console.log(searchResults);
			var list = searchResults.results;
			for (var key = 0; key < list.length; key++) {
				var name = list[key].marketname;
				var results = list[key].id;
				$.ajax({
					type: "GET",
					contentType: "application/json; charset=utf-8",
					// submit a get request to the restful service mktDetail.
					url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + results,
					dataType: 'jsonp',
					success: function(detailresults) {
						console.log(name.substring(name.indexOf(' ') + 1));
						console.log(detailresults.marketdetails.Address);
					},
					error: function(xhr, textStatus, error) {
						console.log(xhr);
						console.log(textStatus);
						console.log(error);
					},
				});
			}
		},
		error: function(xhr, textStatus, error) {
			console.log(xhr);
			console.log(textStatus);
			console.log(error);
		},
	});	
}


function getDetails(id) {
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        // submit a get request to the restful service mktDetail.
        url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + id,
        dataType: 'jsonp',
		success: function(detailresults) {
			console.log(detailresults.marketdetails.Address);
		},
		error: function(xhr, textStatus, error) {
			console.log(xhr);
			console.log(textStatus);
			console.log(error);
		}
    });
}
